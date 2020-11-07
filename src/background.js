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

function loadKiosk(tabWindowId) {
  // chrome.windows.update(tabWindowId, { state: "fullscreen" });
  // chrome.tabs.insertCSS({
  //   file: "styles.css",
  // });
  chrome.tabs.executeScript({
    file: "content.js",
  });
  // chrome.cookies.set({
  //   url: "services.planningcenteronline.com",
  //   name: "theme",
  //   value: "dark",
  //   path: "/live",
  // });
}

function resetKiosk(tabWindowId) {
  // chrome.windows.update(tabWindowId, { state: "normal" });
  // the CSS doesn't work right now, but will in future!
  // chrome.tabs.removeCSS({
  //   file: "styles.css",
  // });
  chrome.tabs.executeScript({
    file: "contentReset.js",
  });
  // chrome.cookies.set({
  //   url: "services.planningcenteronline.com",
  //   name: "theme",
  //   value: "light",
  // });
}

function onClick(tab) {
  const windowId = tab.windowId;
  chrome.windows.getCurrent(undefined, function (window) {
    if (window.state !== "fullscreen") {
      loadKiosk(windowId);
    }
  });
}

function onBounds(window) {
  console.log(window);
  if (window.state !== "fullscreen") {
    resetKiosk(window.id);
  }
}

chrome.pageAction.onClicked.addListener(onClick);
chrome.windows.onBoundsChanged.addListener(onBounds);
