let homeScore = 0;
let guestScore = 0;

const homeCount = document.getElementById("homeCount");
const guestCount = document.getElementById("guestCount");

function incrementhome1() {
  homeScore += 1;
  homeCount.textContent = homeScore;
}

function incrementhome2() {
  homeScore += 2;
  homeCount.textContent = homeScore;
}

function incrementhome3() {
  homeScore += 3;
  homeCount.textContent = homeScore;
}

function incrementguest1() {
  guestScore += 1;
  guestCount.textContent = guestScore;
}

function incrementguest2() {
  guestScore += 2;
  guestCount.textContent = guestScore;
}

function incrementguest3() {
  guestScore += 3;
  guestCount.textContent = guestScore;
}
