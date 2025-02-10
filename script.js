// Countdown Timer
function startCountdown() {
    let countdownDate = new Date().getTime() + (17 * 24 * 60 * 60 * 1000); // 17 days from now

    function updateCountdown() {
        let now = new Date().getTime();
        let difference = countdownDate - now;

        let days = Math.floor(difference / (1000 * 60 * 60 * 24));
        let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;

        if (difference < 0) {
            clearInterval(timer);
            document.querySelector(".countdown").textContent = "Event Started!";
        }
    }

    let timer = setInterval(updateCountdown, 1000);
}

startCountdown();

document.addEventListener("DOMContentLoaded", function() {
    const year = new Date().getFullYear();
    document.getElementById("dynamic-year").innerHTML = `&copy; ${year} Recruit CRM. All rights reserved. Designed by <a href='#'>Igwe Goodness .C</a>`;
});

document.addEventListener("scroll", function () {
    const videoSection = document.querySelector(".video-section");
    const demoButton = document.querySelector(".floating-demo-btn");
    const demoSection = document.querySelector(".demo-section");
    const videoSectionTop = videoSection.offsetTop;
    const demoSectionTop = demoSection.offsetTop;
    const scrollY = window.scrollY;

    if (scrollY >= videoSectionTop - 600 && scrollY < demoSectionTop - 600) {
        // Hide button during video section
        demoButton.classList.add("hidden");
    } else if (scrollY >= demoSectionTop - 600) {
        // Move button inside the demo section
        demoButton.classList.remove("hidden");
        demoButton.style.position = "absolute";
        demoButton.style.bottom = "20px";
        demoButton.style.left = "auto";
        demoButton.style.transform = "none";
    } else {
        // Floating button stays fixed at bottom
        demoButton.classList.remove("hidden");
        demoButton.style.position = "fixed";
        demoButton.style.bottom = "20px";
        demoButton.style.left = "50%";
        demoButton.style.transform = "translateX(-50%)";
    }
});


// document.addEventListener("scroll", function() {
//     const videoSection = document.querySelector(".video-section");
//     const demoButton = document.querySelector(".floating-demo-btn");
//     const demoSection = document.querySelector(".demo-section");
//     const videoSectionTop = videoSection.offsetTop;
//     const demoSectionTop = demoSection.offsetTop;
//     const scrollY = window.scrollY;
    
//     if (scrollY >= videoSectionTop - 200 && scrollY < demoSectionTop - 200) {
//         demoButton.classList.add("hidden");
//     } else {
//         demoButton.classList.remove("hidden");
//     }
// });