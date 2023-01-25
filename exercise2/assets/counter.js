const myCounter = document.getElementById("pCounter");

const setStart = function () {
  if (sessionStorage.getItem("start") === null) {
    myCounter.innerText = "0";
    const startDateTime = new Date().getTime();
    const startTime = Math.round(startDateTime / 1000);
    sessionStorage.setItem("start", startTime);
  } else {
    console.log(sessionStorage.getItem("start"));
  }
};

const timeStamp = function () {
  let endDateTime = new Date().getTime();
  let counter = Math.round(endDateTime / 1000);
  sessionStorage.setItem("counter", counter);
  const startingTime = sessionStorage.getItem("start");
  const endingTime = sessionStorage.getItem("counter");
  let timePassed = startingTime - endingTime;
  myCounter.innerText = Math.abs(timePassed);
};

window.onload = () => {
  setStart();
  setInterval(timeStamp, 1005);
};
