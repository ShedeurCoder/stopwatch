var seconds = 0;
var minutes = 0;
var hours = 0;
var realSeconds = "00";
var realMinutes = "00";
var realHours = "00";
var addCount;

function startStop() {
    if (document.getElementById("startStop").innerHTML == "Start Timer") {
        document.getElementById("startStop").innerHTML = "Stop Timer"
        addCount = setInterval(function() {
            seconds++;
            if (seconds == 60) {
                minutes++;
                seconds = 0;
                realSeconds = "0" + seconds;
                if (minutes < 10) {
                    realMinutes = "0" + minutes;
                } else {
                    realMinutes = minutes
                }
            }
            if (minutes == 60) {
                hours++;
                minutes = 0;
                seconds = 0;
                realSeconds = "0" + seconds;
                realMinutes = "0" + minutes;
                if (hours < 10) {
                    realHours = "0" + hours;
                } else {
                    realHours = hours;
                }
            } 
            if (seconds < 60) {
                if (seconds < 10) {
                    realSeconds = "0" + seconds;
                } else {
                    realSeconds = seconds;
                }
            }
            document.getElementById("timer").innerHTML = realHours + ":" + realMinutes + ":" + realSeconds;
        }, 1000);
    } else if (document.getElementById("startStop").innerHTML == "Stop Timer"){
        document.getElementById("startStop").innerHTML = "Start Timer";
        clearInterval(addCount);
    }
}