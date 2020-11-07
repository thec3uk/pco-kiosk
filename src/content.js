console.log("CONTENT");

var wrapperElements = document.querySelectorAll(
  ".LiveApp-composition--overview-wrapper > div"
);
wrapperElements.forEach(function (elem) {
  elem.style.display = "none";
});

var wrapper = document.querySelector(".LiveApp-composition--overview-wrapper");
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

var timeWrapper = document.querySelector(".LiveClock-time-wrapper");
var timerText = document.querySelector(".LiveClock-time");
timeWrapper.style.display = "block";
timeWrapper.style.width = "50vw";
timeWrapper.style.gridColumnStart = "1";
timeWrapper.style.gridRowStart = "3";
timerText.style.fontSize = "30rem";
timerText.style.paddingBottom = "0";

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

var title = document.querySelector(".LivePlanItem-title");
title.style.margin = "0";
title.style.position = "relative";
