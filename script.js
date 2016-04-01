//1:interface
//2:main loop
//::::::a)work loop
//::::::b)break loop

//set desired countdown variable
var currentDate = new Date();
var pomodoroDuration = 1;
var deadline = new Date(currentDate.getTime() + (pomodoroDuration * 60 * 1000));

var breakDuration = 5;
var breakDeadline = new Date(currentDate.getTime() + (breakDuration * 60 * 1000));
var desiredBreak = document.getElementById('desired-break');
desiredBreak.innerHTML = breakDuration;

var desiredTimer = document.getElementById('desired-countdown');
desiredTimer.innerHTML = pomodoroDuration;

//buttons for timer
var addButton = document.getElementById('add-button-timer');
var substractButton = document.getElementById('substract-button-timer');
//buttons for break
var addButtonBreak = document.getElementById('add-button-break');
var substractButtonBreak = document.getElementById('substract-button-break');

//interaction for timer buttons
addButton.addEventListener('click', function addOne() {
    desiredTimer.innerHTML = parseInt(desiredTimer.innerHTML) + 1;
});

substractButton.addEventListener('click', function substractOne() {
    desiredTimer.innerHTML = parseInt(desiredTimer.innerHTML) - 1;
});
//interaction for break buttons
addButtonBreak.addEventListener('click', function addOne() {
    desiredBreak.innerHTML = parseInt(desiredBreak.innerHTML) + 1;
});

substractButtonBreak.addEventListener('click', function substractOne() {
    desiredBreak.innerHTML = parseInt(desiredBreak.innerHTML) - 1;
});

//pomodoro clock script
//countdown clock

function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000) / 60);
    var total = Math.floor((t /1000) / 60);

    return {
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var timeinterval = setInterval(function() {
        var t = getTimeRemaining(endtime);
        clock.innerHTML =
            'minutes: ' + t.minutes + '<br>' +
            'seconds: ' + t.seconds + '<br>' + 'total: ' + t.total;
        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
        stopButton.addEventListener('click', stopClock)
        function stopClock() {
            clearInterval(timeinterval);
        }
    }, 1000);
}

function stopClock(id) {
  var clock = document.getElementById(id);
  
}

// Adding event listener to the startbutton
var startButton = document.getElementById('start-button');
var stopButton = document.getElementById('stop-button');
startButton.addEventListener('click', startClock);

// You need to create another function abstracting away what the button will do
function startClock(ev) {
    ev.preventDefault();

    // It creates another abstraction layer over the clock start function
    // Meaning that you separate the working of the clock and the working of the button
    // Here you could change the clock however you want without the button even knowing
    // about the internal working of the clock! 
    initializeClock('clockdiv', deadline);
}

// initializeClock('clockdiv', deadline);
// initializeClock('clockdiv', breakDeadline);
