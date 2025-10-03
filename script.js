function timeUpdate(){
    let time = new Date();

    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    // Add Leading Zeros
    hours = (hours <10 ? "0" : "") + hours;
    minutes = (minutes <10 ? "0" : "") + minutes;
    seconds = (seconds <10 ? "0" : "") + seconds;

    let currentTime = hours + ":" + minutes + ":" + seconds;

    document.getElementById("time").textContent = currentTime;

}

setInterval(timeUpdate, 1000);
timeUpdate();