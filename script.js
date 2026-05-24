// Configura la data final (1 mes vista)
const targetDate = new Date("June 7, 2026 18:00:00").getTime();

const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Càlculs de temps
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Actualitzem el HTML
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // Quan el comptador arriba a zero
    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("countdown-container").style.display = "none";
        
        const videoCont = document.getElementById("video-container");
        videoCont.style.display = "block";
        
        const video = document.getElementById("myVideo");
        video.play().catch(error => {
            console.log("L'autoreproducció ha estat bloquejada pel navegador, l'usuari ha de fer clic.");
        });
    }
}, 1000);
