var wrapperElements = document.querySelectorAll(
  ".LiveApp-composition--overview-wrapper > div"
);
wrapperElements.forEach(function (elem) {
  elem.style.display = "table-cell";
});

var wrapper = document.querySelector(".LiveApp-composition--overview-wrapper");

wrapper.style.gridTemplateColumns = null;
wrapper.style.gridTemplateRows = null;

var timerWrapper = document.querySelector(".LiveClock-timer-wrapper");
var timerText = document.querySelector(".LiveClock-timer");
timerWrapper.style.display = "block";
timerWrapper.style.gridColumn = null;
timerWrapper.style.gridRow = null;
timerText.style.fontSize = "50rem";

var timeWrapper = document.querySelector(".LiveClock-time-wrapper");
var timerText = document.querySelector(".LiveClock-time");
timeWrapper.style.display = "block";
timeWrapper.style.width = "50vw";
timeWrapper.style.gridColumnStart = null;
timeWrapper.style.gridRowStart = null;
timerText.style.fontSize = "30rem";
timerText.style.paddingBottom = "0";

var badgesWrapper = document.querySelector(".LivePlanItem-badges");
// badgesWrapper.style.display = "block";

var nowWrapper = document.querySelector(".LivePlanItem-now");
nowWrapper.style.display = "block";
nowWrapper.style.gridColumnStart = null;
nowWrapper.style.gridRowStart = null;
nowWrapper.style.position = "absolute";
nowWrapper.style.border = "0";
var nextWrapper = document.querySelector(".LivePlanItem-next");
nextWrapper.style.display = "block";
nextWrapper.style.gridColumnStart = null;
nextWrapper.style.gridRowStart = null;
nextWrapper.style.position = "absolute";

var title = document.querySelector(".LivePlanItem-title");
title.style.margin = null;
title.style.position = "absolute";
