const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand");

function rotateHands() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  secondHand.style.transform = `rotate(${seconds * 6 + 90}deg)`;
  minuteHand.style.transform = `rotate(${minutes * 6 + 90}deg)`;
  hourHand.style.transform = `rotate(${hours * 30 + minutes * 0.5 + 90}deg)`;
}

setInterval(rotateHands, 1000);
