const hoursEL = document.getElementById("hours")
const minEL = document.getElementById("minutes")
const secEL = document.getElementById("seconds")

const setTime = () => {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (hours < 10) {
        hours = `0${hours}`;
    }

        if (minutes < 10) {
        minutes = `0${minutes}`;
    }

        if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    hoursEL.innerHTML = `${hours}:`;
    minEL.innerHTML = `${minutes}:`;
    secEL.innerHTML = `${seconds}`;
};

setInterval(setTime, 1000);