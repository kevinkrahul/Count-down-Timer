// countdown begin --------------------------------------

var time = {
  days: document.querySelector(".days .number"),
  hours: document.querySelector(".hours .number"),
  mins: document.querySelector(".mins .number"),
  secs: document.querySelector(".secs .number")
}

// countdown setup

var countdownEnd;

var timeCapture = function () {
  var now = new Date();
  var timeLeft = countdownEnd - now; // Time difference in milliseconds

  if (timeLeft > 0) {
    // Calculate days, hours, minutes, and seconds left
    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Update the DOM
    time.days.innerText = days;
    time.hours.innerText = hours;
    time.mins.innerText = minutes;
    time.secs.innerText = seconds;

    setTimeout(timeCapture, 1000); // Recursively call timeCapture every second
  } else {
    const contentBox = document.querySelector(".content-box");
  contentBox.innerHTML = `
    <div class="heading">
      <h1>Thank You!</h1>
    </div>
  `;
  }
};


document.querySelector(".re-ideathon").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent default action if it's a link
  if (!countdownEnd) { // Initialize only once
    countdownEnd = new Date();
    countdownEnd.setHours(countdownEnd.getHours() + 11);
    countdownEnd.setMinutes(countdownEnd.getMinutes() + 20);
    timeCapture(); // Start the countdown
  }
});