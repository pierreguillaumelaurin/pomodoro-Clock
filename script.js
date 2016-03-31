//1:interface
//2:main loop
//::::::a)work loop
//::::::b)break loop

//set desired countdown variable
var currentDate = new Date();
var pomodoroDuration = 25;
var deadline = new Date(currentDate.getTime() + (pomodoroDuration *60*1000));

var breakDuration = 5;
var breakDeadline = new Date(currentDate.getTime() + (breakDuration *60*1000));
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
addButton.addEventListener('click', function addOne(){
  desiredTimer.innerHTML = parseInt(desiredTimer.innerHTML)+1;
});

substractButton.addEventListener('click', function substractOne(){
  desiredTimer.innerHTML = parseInt(desiredTimer.innerHTML)-1;
});
//interaction for break buttons
addButtonBreak.addEventListener('click', function addOne(){
  desiredTimer.innerHTML = parseInt(desiredBreak.innerHTML)+1;
});

substractButtonBreak.addEventListener('click', function substractOne(){
  desiredTimer.innerHTML = parseInt(desiredBreak.innerHTML)-1;
});


//pomodoro clock script
//countdown clock


function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor((t/1000)/60);
  
  return {
    'minutes': minutes,
    'seconds': seconds
  };
}


function initializeClock(id, endtime){
  var clock = document.getElementById(id);
  var timeinterval = setInterval(function(){
    var t = getTimeRemaining(endtime);
    clock.innerHTML = 
                      'minutes: ' + t.minutes + '<br>' +
                      'seconds: ' + t.seconds;
    if(t.total<=0){
      clearInterval(timeinterval);
    }
  },1000);
}

initializeClock('clockdiv', deadline);
//initializeClock('clockdiv', breakDeadline);



