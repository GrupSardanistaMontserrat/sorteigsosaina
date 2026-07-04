// La data final exacta: 7 de juny de 2026 a les 18:00:00
const targetDate = new Date("June 7, 2026 18:00:00").getTime();

const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Actualitzem l'HTML afegint un "0" davant si el número és inferior a 10
    if (distance >= 0) {
        document.getElementById("days").innerText = days < 10 ? "0" + days : days;
        document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
        document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
        document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;
    }

    // Quan el comptador arriba a zero
    if (distance <= 0) {
        clearInterval(countdown); // Aturem el rellotge
        
        // 1. Amaguem només el bloc del compte enrere
        document.getElementById("main-content").style.display = "none";
        
        // 2. Mostrem el contenidor amb el logo apilat i el vídeo
        const videoCont = document.getElementById("video-container");
        videoCont.style.display = "flex";
        
        // 3. Injectem la teva URL de YouTube afegint l'ordre de reproducció automàtica
        const video = document.getElementById("myVideo");
        video.src = "https://youtu.be/ssPytwaOEdQ?is=M70Lmd1tsEg4nUIK";
    }
}, 1000);
