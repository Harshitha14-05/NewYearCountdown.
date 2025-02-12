let dayBox = document.getElementById("day-box");
let hrBox = document.getElementById("hr-box");
let minBox = document.getElementById("min-box");
let secBox = document.getElementById("sec-box");

let countdownContainer = document.querySelector(".wrapper");
let fireworksContainer = document.getElementById("fireworks-container");
let fireworksSound = document.getElementById("fireworks-sound");


// Set countdown to 15 seconds from the current time
let endDate = new Date(new Date().getTime() + 15 * 1000);
let endTime = endDate.getTime();

function countdown() {
    let todayDate = new Date();
    let todayTime = todayDate.getTime();
    let remainingTime = endTime - todayTime;
    let oneMin = 60 * 1000;
    let oneHr = 60 * oneMin;
    let oneDay = 24 * oneHr;

    let addZeroes = (num) => (num < 10 ? `0${num}` : num);

    // Load the audio file
    const fireworksSound = new Audio('sound effect.mp3'); // Replace with the path to your audio file

    if (remainingTime <= 0) {
        clearInterval(i);
        document.querySelector(
            ".countdown"
        ).innerHTML = `<h1>Countdown Has Expired</h1>`;
        showFireworks();
    } else {
        let daysLeft = Math.floor(remainingTime / oneDay);
        let hrsLeft = Math.floor((remainingTime % oneDay) / oneHr);
        let minsLeft = Math.floor((remainingTime % oneHr) / oneMin);
        let secsLeft = Math.floor((remainingTime % oneMin) / 1000);

        dayBox.textContent = addZeroes(daysLeft);
        hrBox.textContent = addZeroes(hrsLeft);
        minBox.textContent = addZeroes(minsLeft);
        secBox.textContent = addZeroes(secsLeft);
    }
}

let i = setInterval(countdown, 1000);
countdown();

function showFireworks() {
    document.querySelector('.countdown').classList.add('hidden');
    const fireworksContainer = document.getElementById('fireworks-container');
    fireworksContainer.classList.remove('hidden');
    startFireworks();

    // Play the fireworks sound
    const fireworksSound = new Audio('sound effect.mp3'); // Replace with the path to your audio file
    fireworksSound.play();
}

function startFireworks() {
    const canvas = document.getElementById('fireworks');

    // Initialize the fireworks library
    const fireworks = new Fireworks(canvas, {
        autoresize: true,
        opacity: 0.5,
        acceleration: 1.05,
        friction: 0.95,
        gravity: 1.5,
        particles: 100,
        trace: 3,
        explosion: 5,
        boundaries: {
            x: 0,
            y: 0,
            width: window.innerWidth,
            height: window.innerHeight / 2 // Restrict to the top half of the screen
        },
        brightness: {
            min: 50,
            max: 80,
            decay: { min: 0.015, max: 0.03 }
        },
    });

    fireworks.start();
}
