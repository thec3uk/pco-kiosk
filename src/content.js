function kioskStyles() {
  var wrapperElements = document.querySelectorAll(
    ".LiveApp-composition--overview-wrapper > div"
  );
  wrapperElements.forEach(function (elem) {
    elem.style.display = "none";
  });

  console.log(wrapperElements);

  var wrapper = document.querySelector(
    ".LiveApp-composition--overview-wrapper"
  );
  wrapper.style.display = "grid";
  wrapper.style.gridTemplateColumns = "repeat(2, minmax(0, 1fr))";
  wrapper.style.gridTemplateRows = "repeat(4, minmax(0, 1fr))";
  wrapper.style.height = "100vh";

  var timerWrapper = document.querySelector(".LiveClock-timer-wrapper");
  var timerText = document.querySelector(".LiveClock-timer");
  timerWrapper.style.display = "block";
  timerWrapper.style.gridColumn = "span 2 / span 2";
  timerWrapper.style.gridRow = "span 2 / span 2";
  timerText.style.fontSize = "50rem";
  timerText.style.fontWeight = "700";

  var timeWrapper = document.querySelector(".LiveClock-time-wrapper");
  var timeText = document.querySelector(".LiveClock-time");
  timeWrapper.style.display = "block";
  timeWrapper.style.minWidth = "50vw";
  timeWrapper.style.gridColumn = "span 1 / span 1";
  timeWrapper.style.gridRow = "span 2 / span 2";
  timeText.style.fontSize = "30rem";
  timeText.style.paddingBottom = "0";
  timeText.style.fontWeight = "500";

  var badgesWrapper = document.querySelector(".LivePlanItem-badges");
  // badgesWrapper.style.display = "block";

  var nowWrapper = document.querySelector(".LivePlanItem-now");
  nowWrapper.style.display = "block";
  nowWrapper.style.gridColumnStart = "2";
  nowWrapper.style.gridRowStart = "3";
  nowWrapper.style.position = "relative";
  nowWrapper.style.border = "0";

  var nextWrapper = document.querySelector(".LivePlanItem-next");
  nextWrapper.style.display = "block";
  nextWrapper.style.gridColumnStart = "2";
  nextWrapper.style.gridRowStart = "4";
  nextWrapper.style.position = "relative";

  var titles = document.querySelectorAll(".LivePlanItem-title");
  titles.forEach(function (title) {
    title.style.margin = "auto";
    title.style.fontWeight = "400";
  });
}

// window.addEventListener("load", kioskStyles, false);
setTimeout(kioskStyles, 2000);
