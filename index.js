let hr=document.getElementById('hour')
let min=document.getElementById('min')
let sec=document.getElementById('sec')

function displaytime(){
    let date=new Date();

    let h=date.getHours()
    let m=date.getMinutes()
    let s=date.getSeconds()

    let hRotation =30*h+m/2;
    let mRotation =6*m;
    let sRotation =6*s;

    hr.style.transform=`rotate(${hRotation}deg)`;
    min.style.transform=`rotate(${mRotation}deg)`;
    sec.style.transform=`rotate(${sRotation}deg)`;

}

setInterval(displaytime,1000);



let startTime;
let interval;

const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

function startTimer() {
    startTime = Date.now() - (startTime ? startTime : 0);
    interval = setInterval(updateTime, 1000);
    startBtn.disabled = true;
}

function stopTimer() {
    clearInterval(interval);
    startBtn.disabled = false;
}

function resetTimer() {
    clearInterval(interval);
    display.textContent = "00:00:00";
    startTime = 0;
    startBtn.disabled = false;
}

function updateTime() {
    const currentTime = Date.now() - startTime;
    const hours = Math.floor(currentTime / 3600000);
    const minutes = Math.floor((currentTime % 3600000) / 60000);
    const seconds = Math.floor((currentTime % 60000) / 1000);
    display.textContent = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

