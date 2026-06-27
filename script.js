const openBtn = document.getElementById("openBtn");
const music = document.getElementById("music");

const gallery = document.getElementById("gallery");
const letter = document.getElementById("letter");
const ending = document.getElementById("ending");

openBtn.addEventListener("click", () => {

    // Play Music
    music.play();

    // Hide Cover
    document.querySelector(".cover").style.display = "none";

    // Show Sections
    gallery.classList.remove("hidden");
    letter.classList.remove("hidden");
    ending.classList.remove("hidden");

    // Smooth Scroll
    gallery.scrollIntoView({
        behavior: "smooth"
    });

    // Confetti
    confetti({
        particleCount: 180,
        spread: 120,
        origin: {
            y: 0.6
        }
    });

    createHearts();
    createSparkles();

});

// Floating Hearts
function createHearts(){

    for(let i=0;i<40;i++){

        const heart=document.createElement("div");

        heart.innerHTML=Math.random()>0.5?"💚":"🩵";

        heart.style.position="fixed";

        heart.style.left=Math.random()*100+"vw";

        heart.style.top="100vh";

        heart.style.fontSize=(20+Math.random()*25)+"px";

        heart.style.zIndex="999";

        heart.style.pointerEvents="none";

        document.body.appendChild(heart);

        let pos=100;

        const move=setInterval(()=>{

            pos--;

            heart.style.top=pos+"vh";

            heart.style.left=
            parseFloat(heart.style.left)+
            Math.sin(pos/10)+"px";

            if(pos<-10){

                clearInterval(move);

                heart.remove();

            }

        },20);

    }

}

// Sparkle Effect
function createSparkles(){

    for(let i=0;i<80;i++){

        const star=document.createElement("div");

        star.innerHTML="✨";

        star.style.position="fixed";

        star.style.left=Math.random()*100+"vw";

        star.style.top=Math.random()*100+"vh";

        star.style.fontSize=(8+Math.random()*15)+"px";

        star.style.opacity="0";

        star.style.transition="1s";

        star.style.pointerEvents="none";

        document.body.appendChild(star);

        setTimeout(()=>{

            star.style.opacity="1";

        },100);

        setTimeout(()=>{

            star.style.opacity="0";

        },2500);

        setTimeout(()=>{

            star.remove();

        },3500);

    }

}

// Glow Animation on Photos
const photos=document.querySelectorAll(".photo-card");

photos.forEach(photo=>{

photo.addEventListener("mouseover",()=>{

photo.style.transform="scale(1.08)";

});

photo.addEventListener("mouseout",()=>{

photo.style.transform="scale(1)";

});

});