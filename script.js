// Opening Logic
function setupInfiniteScroll() {
    const track = document.getElementById('gallery-track');
    
    // 1. Get the current images
    const originalContent = track.innerHTML;
    
    // 2. Double the content (10 images become 20)
    // This ensures that as the 10th image leaves, the 1st image is already entering
    track.innerHTML = originalContent + originalContent;
}

// Ensure it is called in your button listener:
document.getElementById('open-btn').addEventListener('click', function() {
    setupInfiniteScroll(); // Call this FIRST
    
    document.getElementById('opening-overlay').classList.add('overlay-hide');
    document.getElementById('invitation-container').classList.remove('hidden');
    document.getElementById('bg-music').play();
    
    startFlowers();
    startCountdown();
});
// Mute Toggle
const muteBtn = document.getElementById('mute-btn');
const music = document.getElementById('bg-music');
muteBtn.addEventListener('click', () => {
    music.muted = !music.muted;
    muteBtn.innerText = music.muted ? "🔇" : "🔊";
});

// Flower Animation
function startFlowers() {
    const container = document.getElementById('flower-container');
    for (let i = 0; i < 20; i++) {
        const flower = document.createElement('div');
        flower.className = 'flower';
        flower.style.left = Math.random() * 100 + 'vw';
        flower.style.width = Math.random() * 20 + 10 + 'px';
        flower.style.height = flower.style.width;
        flower.style.animationDuration = Math.random() * 8 + 7 + 's';
        flower.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(flower);
    }
}

// Countdown Logic
function startCountdown() {
    const weddingDate = new Date("Dec 25, 2026 10:30:00").getTime();
    setInterval(() => {
        const now = new Date().getTime();
        const diff = weddingDate - now;

        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = d < 10 ? "0" + d : d;
        document.getElementById("hours").innerText = h < 10 ? "0" + h : h;
        document.getElementById("mins").innerText = m < 10 ? "0" + m : m;
        document.getElementById("secs").innerText = s < 10 ? "0" + s : s;
    }, 1000);
}

// Gallery & Lightbox
let slideIndex = 1;
function openLightbox() { document.getElementById("lightboxModal").style.display = "flex"; }
function closeLightbox() { document.getElementById("lightboxModal").style.display = "none"; }
function plusSlides(n) { showSlides(slideIndex += n); }
function currentSlide(n) { showSlides(slideIndex = n); }
function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;
    for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";
    slides[slideIndex-1].style.display = "block";
}
