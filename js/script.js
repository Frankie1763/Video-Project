console.log( "Ready" );
window.onload =function() {
  setSize()
}
window.onresize = function() {
  setSize()
}

var vid= document.getElementById('vid');

function setSize(){
  if (window.innerWidth/window.innerHeight >= 16/9) {
    vid.width = window.innerWidth;
    vid.height = window.innerWidth * 9/16;
  } else {
    vid.width = window.innerHeight * 16/9;
    vid.height = window.innerHeight;
  }
  //pause btn
  pauseBtn.style.width = Math.floor(vid.width * 0.05) + "px";
  pauseBtn.style.height = Math.floor(vid.height * 0.05) + "px";
  pauseBtn.style.left = vid.width * 0.01 + "px";
  pauseBtn.style.top = vid.height * 0.01 + "px";
  //buttons
  btn1.style.width = Math.floor(vid.width * 0.13) + "px";
  btn1.style.height = Math.floor(vid.height * 0.13) + "px";
  btn1.style.left = Math.floor(vid.width * 0.55) + "px";
  btn1.style.top = Math.floor(vid.height * 0.1) + "px";

  btn2.style.width = Math.floor(vid.width * 0.13) + "px";
  btn2.style.height = Math.floor(vid.height * 0.13) + "px";
  btn2.style.left = Math.floor(vid.width * 0.4) + "px";
  btn2.style.top = Math.floor(vid.height * 0.5) + "px";

  btn3.style.width = Math.floor(vid.width * 0.1) + "px";
  btn3.style.height = Math.floor(vid.height * 0.1) + "px";
  btn3.style.left = Math.floor(vid.width * 0.25) + "px";
  btn3.style.top = Math.floor(vid.height * 0.58) + "px";

  btn4.style.width = Math.floor(vid.width * 0.1) + "px";
  btn4.style.height = Math.floor(vid.height * 0.1) + "px";
  btn4.style.left = Math.floor(vid.width * 0.32) + "px";
  btn4.style.top = Math.floor(vid.height * 0.24) + "px";

  btn5.style.width = Math.floor(vid.width * 0.1) + "px";
  btn5.style.height = Math.floor(vid.height * 0.1) + "px";
  btn5.style.left = Math.floor(vid.width * 0.65) + "px";
  btn5.style.top = Math.floor(vid.height * 0.65) + "px";

  btn6.style.width = Math.floor(vid.width * 0.08) + "px";
  btn6.style.height = Math.floor(vid.height * 0.1) + "px";
  btn6.style.left = Math.floor(vid.width * 0.4) + "px";
  btn6.style.top = Math.floor(vid.height * 0.5) + "px";

  btn7.style.width = Math.floor(vid.width * 0.2) + "px";
  btn7.style.height = Math.floor(vid.height * 0.2) + "px";
  btn7.style.left = Math.floor(vid.width * 0.46) + "px";
  btn7.style.top = Math.floor(vid.height * 0.41) + "px";

  btn8.style.width = Math.floor(vid.width * 0.1) + "px";
  btn8.style.height = Math.floor(vid.height * 0.2) + "px";
  btn8.style.left = Math.floor(vid.width * 0.78) + "px";
  btn8.style.top = Math.floor(vid.height * 0.25) + "px";
}
var pauseValue = 1;
function pauseOrPlay() {
  if (pauseValue == 0) {
      vid.pause();
      pauseValue=1;
  } else {
    vid.play();
    pauseValue = 0;
  }

}
var currentSrc = 0;
var src= ["video/cafe.mp4","video/thought.mp4","video/prepare.mp4","video/phone missing.mp4","video/enter room.mp4","video/lfp01.mp4","video/lfp02.mp4","video/lfp03.mp4","","video/lfp04.mp4","video/cakeface01.mp4","video/cakeface02.mp4","video/flower01.mp4","video/flower02.mp4","video/change time.mp4","video/last.mp4"]

vid.addEventListener("ended", vidEnded);
var btn1 = document.getElementById('btn1')
var btn2 = document.getElementById('btn2')
var btn3 = document.getElementById('btn3')
var btn4 = document.getElementById('btn4')
var btn5 = document.getElementById('btn5')
var btn6 = document.getElementById('btn6')
var btn7 = document.getElementById('btn7')
var btn8 = document.getElementById('btn8')
var pauseBtn = document.getElementById('pause')

function showButton() {
  var t= vid.currentTime;
  if (currentSrc==0&&t>31) {
    btn1.style.display = "block";
  }
  if (currentSrc==2&&t>20) {
    btn2.style.display = "block";
  }
  if (currentSrc==4&&t>14) {
    btn3.style.display = "block";
    btn4.style.display = "block";
    btn5.style.display = "block";
  }
  if (currentSrc==10&&t>9) {
    btn6.style.display = "block";
  }
  if (currentSrc==12&&t>6) {
    btn7.style.display = "block";
  }
  if (currentSrc==14&&t>47) {
    btn8.style.display = "block";
  }
}

// var switchValue = false;
document.getElementById('btn1').addEventListener("click", switchVideo);
document.getElementById('btn2').addEventListener("click", switchVideo);
document.getElementById('btn6').addEventListener("click", switchVideo);
document.getElementById('btn7').addEventListener("click", switchVideo);
document.getElementById('btn8').addEventListener("click", switchVideo);

document.getElementById('btn3').addEventListener("click", switchVideo3);
document.getElementById('btn4').addEventListener("click", switchVideo4);
document.getElementById('btn5').addEventListener("click", switchVideo5);
var btnValue=1;
function switchVideo() {
  currentSrc+=1;
  vid.src= src[currentSrc]
  vid.currentTime = 0;
  vid.play();
  document.getElementById('btn'+btnValue).style.display="none";
  btnValue++;
}



var countBtn =0;
function switchVideo3() {
  currentSrc=6;
  vid.src= src[currentSrc]
  vid.currentTime = 0;
  vid.play();
  document.getElementById('btn3').style.display="none";
  countBtn++;
  if (countBtn==3) {
    currentSrc=8;
    btnValue=6;
  }
}
function switchVideo4() {
  currentSrc=7;
  vid.src= src[currentSrc]
  vid.currentTime = 0;
  vid.play();
  document.getElementById('btn4').style.display="none";
  countBtn++;
  if (countBtn==3) {
    currentSrc=8;
    btnValue=6;
  }
}
function switchVideo5() {
  currentSrc=5;
  vid.src= src[currentSrc]
  vid.currentTime = 0;
  vid.play();
  document.getElementById('btn5').style.display="none";
  countBtn++;
  if (countBtn==3) {
    currentSrc=8;
    btnValue=6;
  }
}


function vidEnded() {
  if (currentSrc==1||currentSrc==3||currentSrc==8||currentSrc==9||currentSrc==11||currentSrc==13) {
    currentSrc+=1;
    vid.src= src[currentSrc]
    vid.currentTime = 0;
    vid.play();
  }
}
