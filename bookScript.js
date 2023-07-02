let progressBars = document.getElementsByClassName("progress-bars")[0];
let firstName = document.getElementById("fname");
let lastName = document.getElementById("lname");
let dateTime = document.getElementById("date-time");
setInterval(function() {
    let percent = 0;
    if (firstName.checkValidity()) {
        percent += 33;
    }
    if (lastName.checkValidity()) {
        percent += 33;
    }
    if (dateTime.checkValidity()) {
        percent += 33;
    }
    progressBars.value = percent;
}, 1000)
