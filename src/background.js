chrome.runtime.onInstalled.addListener(function () {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostEquals: "services.planningcenteronline.com" },
          }),
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()],
      },
    ]);
  });
});

var isKiosk = false;

function loadKiosk(tab) {
  chrome.windows.create(
    {
      url: tab.url,
      focused: true,
      type: "popup",
    },
    function (window) {
      chrome.cookies.getAll(
        { url: "https://services.planningcenteronline.com" },
        function (cookie) {
          console.log(cookie);
        }
      );
      chrome.cookies.set({
        url: "https://services.planningcenteronline.com",
        name: "theme",
        value: "dark",
        path: "/live",
      });
      chrome.cookies.set({
        url: "https://services.planningcenteronline.com",
        name: "composition",
        value: "overview",
        path: "/live",
      });
      chrome.windows.update(window.id, {
        state: "fullscreen",
      });
      chrome.tabs.executeScript(window.tabs[0].id, {
        file: "src/content.js",
      });
      chrome.storage.sync.set({
        windowId: window.id,
        tabId: window.tabs[0].id,
      });
    }
  );
  // chrome.tabs.insertCSS({
  //   file: "src/styles.css",
  // });
}

function resetKiosk() {
  // the CSS doesn't work right now, but will in future!
  // chrome.tabs.removeCSS({
  //   file: "src/styles.css",
  // });
  chrome.tabs.executeScript({
    file: "src/contentReset.js",
  });
  chrome.cookies.set({
    url: "https://services.planningcenteronline.com",
    name: "composition",
    value: "normal",
    path: "/live",
  });
}

function openKiosk(tab) {
  chrome.windows.getCurrent(undefined, function (window) {
    if (window.state !== "fullscreen") {
      loadKiosk(tab);
    }
  });
}

function onClick(tab) {
  chrome.storage.sync.get("windowId", function (data) {
    if (data.windowId !== undefined) {
      resetKiosk();
      chrome.windows.remove(data.windowId, function () {
        if (chrome.runtime.lastError !== undefined) {
          // window closed by itself
          console.warn(chrome.runtime.lastError.message);
          openKiosk(tab);
        } else {
          console.log("window closed");
        }
      });
    } else {
      // no window stored open new popup
      openKiosk(tab);
    }
  });
}

chrome.pageAction.onClicked.addListener(onClick);
