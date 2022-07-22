function changeTime(){
    let clock = document.querySelector("#clock");
    let newTime = new Date();
    clock.textContent = newTime.toLocaleTimeString();
}

changeTime();
setInterval(changeTime, 1000)