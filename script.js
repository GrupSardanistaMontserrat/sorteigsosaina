// La data final: 7 de juny de 2026 a les 18:00:00
const targetDate = new Date("June 7, 2026 18:00:00").getTime();

const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Actualitzem l'HTML només si encara no hem arribat a 0 (afegim el 0 davant si és < 10)
    if (distance >= 0) {
        document.getElementById("days").innerText = days < 10 ? "0" + days : days;
        document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
        document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
        document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;
    }

    // Quan el comptador arriba a zero
    if (distance <= 0) {
        clearInterval(countdown); // Aturem el rellotge
        
        // Amaguem el contingut principal i el patró de fons
        document.getElementById("main-content").style.display = "none";
        //document.getElementById("background-layer").style.display = "none";
        //document.body.style.backgroundColor = "#000"; // Fons totalment negre
        
        // Mostrem el vídeo i li donem el display flex perquè se centri
        const videoCont = document.getElementById("video-container");
        videoCont.style.display = "flex";
        
        // Iniciem la reproducció (amb prevenció d'errors si el navegador ho bloqueja)
        const video = document.getElementById("myVideo");
        video.play().catch(error => {
            console.log("El navegador ha bloquejat l'autoreproducció. L'usuari haurà de donar-li al Play.");
        });
    }
}, 1000);
