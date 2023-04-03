//your code here
const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");

function rotateHands() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondDegree = (seconds / 60) * 360 + 90;
  const minuteDegree = (minutes / 60) * 360 + 90;
  const hourDegree = (hours / 12) * 360 + 90;

  secondHand.style.transform = `rotate(${secondDegree}deg)`;
  minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(rotateHands, 1000);