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

function initializeClock(id, endtime, isActive) {
    var timeinterval = setInterval(function() {
        var t = getTimeRemaining(endtime);
        clock.innerHTML =
            'minutes: ' + t.minutes + '<br>' +
            'seconds: ' + t.seconds + '<br>' + 'total: ' + t.total;
        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }, 1000);
}

function startStopClock(id, endtime, isActive) {
  alert('isActive before: '+ isActive);
  if(isActive === false) {
    alert("it's starting!");
    initializeClock(id, endtime, isActive);
  }
  else {
    alert('a');
    stopClock();
  }
  isActive = switchIsActive(isActive);
  alert('isActive status: ' + isActive);
  return isActive;
}

function switchIsActive(isActive) {
  if(isActive === true) {
    isActive = false;
  }
  else if (isActive === false) {
    isActive = true;
  }
  return isActive;
}

function stopClock() {
            alert(yoli);
            clearInterval(timeinterval);
        }



// Adding event listener to the startbutton
var clock = document.getElementById('clockdiv');
var buttonStatus = false;
clock.addEventListener('click', startClock);

// You need to create another function abstracting away what the button will do
function startClock() {

    buttonStatus = startStopClock(clock, deadline, buttonStatus);
}

// initializeClock('clockdiv', deadline);
// initializeClock('clockdiv', breakDeadline);
