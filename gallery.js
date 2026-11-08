
const composition = document.getElementById("rotatingComposition");
const photos = document.querySelectorAll(".gallery-photo");

const nextPhotoButton = document.getElementById("nextPhoto");
const backPhotoButton = document.getElementById("backPhoto");
const backToBirthdayButton = document.getElementById("backToBirthday");


// =========================================
// CANDIE'S 12 ROMANTIC MESSAGES
// =========================================

const loveMessages = [
    {
        title: "My Beautiful Achiever ❤️",
        message: "Look at you, my beautiful girl. There's something special about seeing you in your element, looking confident and carrying yourself with so much grace. I hope you never stop believing in the woman you're becoming. I admire your ambition, your beauty and the determination that makes you uniquely you. I hope life opens doors you once only dreamed of walking through, and that you never lose sight of how capable you are. I am proud of you, Candie, and I hope you always remember that there's so much more waiting for you. Keep becoming everything you've ever dreamed of, my love ❤️."
    },
    {
        title: "My Little Sunshine ☀️",
        message: "There's something about you that I could never get tired of admiring. Even in the simplest moments, you have a way of looking beautiful without even trying. I wish you could see yourself through my eyes, just for a moment, because perhaps then you'd understand why I find myself smiling whenever I look at you. It's not just your beautiful face; it's the little things that make you who you are. I hope you always feel confident, appreciated and loved. And whenever life gets a little overwhelming, I hope you remember that you are someone's favourite person, someone worth celebrating, and someone who makes this world a little brighter just by being in it."
    },
    {
        title: "Unforgettable, Just Like You ❤️",
        message: "Sometimes I wonder whether you realise just how effortlessly beautiful you are. It's in the little things, the way you carry yourself, your expressions and the confidence you bring without even trying. I could look at a hundred pictures of you and still find something new to admire in each one. But beyond your beauty, I hope you always hold on to the person you are becoming. Never be afraid to take up space, chase your dreams or be unapologetically yourself. I love that there is only one you in this entire world, and if there is one thing I hope you never forget, it's that you are incredibly special to me. ❤️"
    },
    {
        title: "My sweetest blessing",
        message: "There's a kind of beauty that doesn't need an occasion, a perfect outfit or a special moment to be noticed. It's simply there, effortlessly, in the way you carry yourself and the little things that make you who you are. I love seeing you in these simple moments, being yourself without having to prove anything to anyone. I hope you never feel pressured to become someone else just to fit into the world's expectations. You are already someone worth admiring. Keep that beautiful smile, keep your gentle spirit and never stop discovering all the wonderful things you are capable of. If only you could see how lovely you are through my eyes. ❤️"
    },
    {
        title: "A Moment I'll Always Keep ❤️",
        message: "I remember this moment, and there's something beautiful about knowing that I was the one behind the camera. Sometimes I wish I could capture more than just an image, the feeling of that moment, the atmosphere and everything that made it special. You probably don't realise how many little things about you I notice and quietly appreciate. Even when you're simply relaxing, doing your own thing or unaware that I'm admiring you, there's something about you that makes an ordinary moment worth remembering. I hope we never run out of moments like these, the unplanned ones, the silly ones and the ones we don't realise will become our favourite memories. This picture will always remind me of one of them."
    },
    {
        title: "Better Together ❤️",
        message: "One of my favourite things about this picture is that I'm not just looking at you; I'm looking at a moment we shared. I love having memories where we are both part of the story, because one day we'll look back at these pictures and remember where we were, what we were doing and all the little things that made those moments special. I hope we never run out of places to go, experiences to share and reasons to take pictures together. There are still so many memories I'd love for us to make, so many moments waiting to become stories we tell years from now. And if I could keep one thing from all those moments, it would be the happiness of having you beside me."
    },
    {
        title: "If I could pause time",
        message: "There's something about being close to you that makes me forget everything else around me. I love the way you look at me, the way your eyes find mine and the little moments when we're so close that words aren't even necessary. Sometimes I wish I could pull you a little closer, hold you against me and steal a few kisses without worrying about how quickly time is passing. You have no idea how much I love having you in my arms, feeling your warmth and getting lost in those little moments that belong only to us. If I had you beside me right now, I probably wouldn't have much to say. I'd rather let my kisses do the talking. ❤️‍🔥"
    },
    {
        title: "Those Eyes Have Me ❤️",
        message: "Do you know how difficult it is to look at you and not get completely distracted? There's something about your eyes that keeps drawing me in. I could sit across from you, look into them and forget whatever I was supposed to be saying. I love the little moments when we're close, when I can admire your face, touch your cheek and remind you just how beautiful you are. Sometimes I don't even need a special occasion to want to hold you, kiss your forehead and then steal a kiss from those lips of yours. If you were beside me right now, I'd probably pull you closer and stay there a little longer than necessary. You have a way of making closeness feel like my favourite place to be. ❤️‍🔥"
    },
    {
        title: "My Gorgeous Woman ❤️‍🔥",
        message: "Can I just say how dangerously beautiful you look here? The glasses, the outfit, those lips and the way you carry yourself… honestly, you make it very difficult for me to concentrate. 😂❤️ But what I find even more attractive is the woman behind that beautiful face. I love seeing you grow, become more confident and discover new things about yourself. There are moments when I just want to pull you close, hold your waist, look into your eyes and remind you how much I adore you. I hope you never forget how attractive you are to me, not just in photographs, but even in those little everyday moments when you're not trying at all. You will always have a special way of stealing my attention."
    },
    {
        title: "That Little Attitude of Yours 😘",
        message: "Look at you, acting all innocent while knowing perfectly well how much trouble you cause for my heart. 😂 There's something about that little expression of yours that makes me want to come closer, hold your face gently and kiss those lips. I love your playful side, the little attitude, the teasing and all those moments when you make it impossible for me to stay serious. You have this way of getting my attention without even asking for it. And honestly, I wouldn't want you any other way. Keep being that beautiful, cheeky girl who makes me smile for no reason. Just know that when I finally get you close, I'm collecting all those kisses you've been making me imagine. ❤️‍🔥"
    },
    {
        title: "Beautiful Even in Your Yesterday ❤️",
        message: "You might look at this picture and see all the little things you wish were different, but when I look at it, I see someone I have always found beautiful. I love that this photograph captures an older version of you, a little piece of your journey that time has carried forward. I wish you could borrow my eyes for a moment and see what I see. You don't have to look perfect in every picture for me to admire you. I love the moments when you're all dressed up, but I also love these simple, imperfect photographs because they're part of your story. Never be too hard on the girl in this picture. She deserves to be appreciated too. ❤️"
    },
    {
        title: "My Favourite Trouble ❤️‍🔥",
        message: "Look at this little troublemaker! 😂❤️ I swear you have a special talent for making me smile, even when you're doing absolutely nothing. I love this playful side of you, the silly expressions, the teasing and those little surprises that make you so much fun to love. But let me tell you something: behind all that mischief is a woman I find incredibly beautiful and irresistible. Sometimes I just want to pull you into my arms, kiss away that cheeky smile and remind you that you have someone who adores every little version of you. Never lose this side of yourself, my love. Keep being playful, keep being wonderfully unpredictable and keep giving me reasons to fall for you all over again."
    }
];


// =========================================
// MESSAGE POPUP STYLES
// =========================================

const popupStyles = document.createElement("style");

popupStyles.textContent = `
    .love-popup {
        position: fixed;
        inset: 0;
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 18px;
        background: rgba(35, 22, 29, 0.78);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        opacity: 0;
        visibility: hidden;
        transition: opacity .4s ease, visibility .4s ease;
    }

    .love-popup.active {
        opacity: 1;
        visibility: visible;
    }

    .love-popup-card {
        position: relative;
        width: min(100%, 430px);
        max-height: 94dvh;
        overflow-y: auto;
        border-radius: 30px;
        background: #fff7f0;
        box-shadow: 0 20px 70px rgba(0,0,0,.3);
        transform: translateY(25px) scale(.96);
        transition: transform .45s cubic-bezier(.2,.8,.2,1);
    }

    .love-popup.active .love-popup-card {
        transform: translateY(0) scale(1);
    }

    .love-popup-top {
        padding: 28px 25px;
        background: linear-gradient(145deg, #fffaf4, #f9e9e4);
    }

    .love-photo-frame {
        position: relative;
        height: 220px;
        padding: 25px;
        border: 1px solid #e8d8cf;
        border-radius: 42px;
        background: #fffdfb;
        box-shadow: 0 12px 30px rgba(80, 48, 48, .09);
    }

    .love-photo-inner {
        width: 100%;
        height: 100%;
        overflow: hidden;
        border: 1px solid #e4cfc5;
        border-radius: 25px;
        background: #f7e9e1;
    }

    .love-photo-inner img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .love-tape {
        position: absolute;
        top: 17px;
        left: 30px;
        width: 95px;
        height: 34px;
        border-radius: 10px;
        background: rgba(255, 226, 150, .75);
        border: 1px solid rgba(190, 157, 89, .35);
        transform: rotate(-10deg);
        z-index: 2;
    }

    .love-popup-close {
        position: absolute;
        top: 13px;
        right: 13px;
        z-index: 5;
        width: 43px;
        height: 43px;
        border: none;
        border-radius: 50%;
        background: rgba(255,255,255,.88);
        color: #49343a;
        font-size: 30px;
        cursor: pointer;
    }

    .love-popup-bottom {
        padding: 28px 25px 35px;
        background: linear-gradient(145deg, #fffaf5, #fff0ed);
    }

    .love-popup-letter {
        padding: 26px 20px;
        border: 1px solid #eddfda;
        border-radius: 42px;
        background: rgba(255,255,255,.85);
    }

    .love-popup-label {
        margin-bottom: 19px;
        font-family: Arial, sans-serif;
        font-size: 14px;
        font-weight: bold;
        letter-spacing: 5px;
        color: #b46772;
    }

    .love-popup-title {
        margin-bottom: 22px;
        font-family: Georgia, serif;
        font-size: clamp(27px, 7vw, 38px);
        font-weight: normal;
        line-height: 1.2;
        color: #422832;
    }

    .love-popup-paper {
        max-height: 340px;
        overflow-y: auto;
        padding: 14px 12px;
        border: 1px solid #e8d7ce;
        border-radius: 32px;
        background-color: #fffaf5;
        background-image: repeating-linear-gradient(
            to bottom,
            transparent 0,
            transparent 54px,
            #ddc9be 55px,
            #ddc9be 57px
        );
        scrollbar-width: thin;
        scrollbar-color: #d8b9ae transparent;
    }

    .love-popup-message {
        margin: 0;
        font-family: Georgia, serif;
        font-size: 19px;
        line-height: 1.98;
        color: #59434a;
        white-space: pre-wrap;
        overflow-wrap: break-word;
    }

    @media(max-width: 400px) {
        .love-popup {
            padding: 12px;
        }

        .love-popup-top {
            padding: 20px 16px;
        }

        .love-photo-frame {
            height: 185px;
            padding: 18px;
        }

        .love-popup-bottom {
            padding: 22px 16px 25px;
        }

        .love-popup-letter {
            padding: 23px 16px;
        }

        .love-popup-paper {
            max-height: 330px;
        }

        .love-popup-message {
            font-size: 17px;
        }
    }
`;

document.head.appendChild(popupStyles);


// =========================================
// CREATE MEMORY LETTER POPUP
// =========================================

const popup = document.createElement("div");

popup.className = "love-popup";

popup.innerHTML = `
    <div class="love-popup-card">

        <button class="love-popup-close" aria-label="Close message">
            &times;
        </button>

        <div class="love-popup-top">

            <div class="love-photo-frame">

                <div class="love-tape"></div>

                <div class="love-photo-inner">
                    <img class="love-popup-photo" src="" alt="Our memory">
                </div>

            </div>

        </div>

        <div class="love-popup-bottom">

            <div class="love-popup-letter">

                <div class="love-popup-label">
                    MEMORY NOTE
                </div>

                <h2 class="love-popup-title"></h2>

                <div class="love-popup-paper">
                    <p class="love-popup-message"></p>
                </div>

            </div>

        </div>

    </div>
`;

document.body.appendChild(popup);

const popupTitle = popup.querySelector(".love-popup-title");
const popupMessage = popup.querySelector(".love-popup-message");
const popupPhoto = popup.querySelector(".love-popup-photo");
const closePopupButton = popup.querySelector(".love-popup-close");

let typingTimer = null;

function openLoveMessage(index) {

    const message = loveMessages[index];
    const selectedPhoto = photos[index];

    if (!message || !selectedPhoto) return;

    clearInterval(typingTimer);

    popupPhoto.src = selectedPhoto.currentSrc || selectedPhoto.src;

    popupTitle.textContent = message.title;

    popupMessage.textContent = "";

    popup.classList.add("active");

    document.body.style.overflow = "hidden";

    let characterIndex = 0;

    typingTimer = setInterval(() => {

        popupMessage.textContent += message.message.charAt(characterIndex);

        characterIndex++;

        if (characterIndex >= message.message.length) {
            clearInterval(typingTimer);
        }

    }, 32);
}

function closeLoveMessage() {

    clearInterval(typingTimer);

    popup.classList.remove("active");

    document.body.style.overflow = "";
}

closePopupButton.addEventListener("click", closeLoveMessage);

popup.addEventListener("click", (event) => {

    if (event.target === popup) {
        closeLoveMessage();
    }

});

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        closeLoveMessage();
    }

});


// =========================================
// CENTRE PHOTO FOCUS AND CLICK
// =========================================

let currentRotation = 0;
let activePhotoIndex = 6;
let suppressPhotoClick = false;

let introAnimating = true;

function updatePhotoFocus() {

    const steps = Math.round(currentRotation / 30);

    activePhotoIndex = ((6 - steps) % 12 + 12) % 12;

    photos.forEach((photo, index) => {

        const isCenter = index === activePhotoIndex;

        photo.classList.toggle("center-photo", isCenter);

        photo.style.pointerEvents =
            isCenter && !introAnimating ? "auto" : "none";

        photo.style.cursor =
            isCenter && !introAnimating ? "pointer" : "default";

    });
}

photos.forEach((photo, index) => {

    photo.addEventListener("click", () => {

        if (introAnimating) return;

        if (suppressPhotoClick) return;

        if (index !== activePhotoIndex) return;

        openLoveMessage(index);

    });

});


// =========================================
// PHOTO POSITIONING
// ORIGINAL ARRANGEMENT PRESERVED
// =========================================

function arrangePhotos() {

    const size = composition.offsetWidth;
    const center = size / 2;

    const radius = size * (400 / 1100);

    photos.forEach((photo, index) => {

        const angle = -90 + index * 30;

        const radians = angle * Math.PI / 180;

        const x = center + radius * Math.cos(radians);
        const y = center + radius * Math.sin(radians);

        photo.style.left = `${x}px`;
        photo.style.top = `${y}px`;

        const rotation = angle + 270;

        photo.style.setProperty(
            "--photo-rotation",
            `${rotation}deg`
        );

    });
}




/* =========================================
   GALLERY ENTRANCE
   MOBILE-FRIENDLY 360 DEGREE ROTATION
========================================= */

let entranceFinished = false;
let entranceFallbackTimer = null;

function playGalleryEntrance() {

    const reducedMotion =
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    entranceFinished = false;
    introAnimating = true;

    clearTimeout(entranceFallbackTimer);

    composition.style.transition = "none";
    composition.style.opacity = "0";
    composition.style.transform = "rotate(-360deg) scale(.92)";

    // Make the browser apply the starting position first.
    void composition.offsetWidth;

    if (reducedMotion) {
        composition.style.opacity = "1";
        composition.style.transform = "rotate(0deg) scale(1)";
        finishEntrance();
        return;
    }

    requestAnimationFrame(() => {

        composition.style.transition =
            "transform 2.4s cubic-bezier(.16, 1, .3, 1), opacity .9s ease";

        composition.style.opacity = "1";
        composition.style.transform = "rotate(0deg) scale(1)";

    });

    entranceFallbackTimer = setTimeout(() => {
        finishEntrance();
    }, 3000);
}


// =========================================
// FINISH ENTRANCE
// =========================================

function finishEntrance() {

    if (entranceFinished) return;

    entranceFinished = true;

    clearTimeout(entranceFallbackTimer);

    composition.style.transition =
        "transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)";

    composition.style.opacity = "1";
    composition.style.transform =
        `rotate(${currentRotation}deg) scale(1)`;

    introAnimating = false;

    updatePhotoFocus();
}


// Detect when the entrance rotation completes.
composition.addEventListener("transitionend", (event) => {

    if (
        event.propertyName === "transform" &&
        introAnimating
    ) {
        finishEntrance();
    }

});




// =========================================
// ROTATION
// =========================================

function rotateComposition(direction) {

    if (introAnimating) return;

    currentRotation += direction * 30;

    composition.style.transition =
        "transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)";

    composition.style.transform =
        `rotate(${currentRotation}deg)`;

    updatePhotoFocus();
}


// =========================================
// GALLERY NAVIGATION BUTTONS
// =========================================

if (nextPhotoButton) {

    nextPhotoButton.addEventListener("click", () => {
        rotateComposition(1);
    });

}

if (backPhotoButton) {

    backPhotoButton.addEventListener("click", () => {
        rotateComposition(-1);
    });

}


// =========================================
// RETURN TO BIRTHDAY GREETING
// =========================================

if (backToBirthdayButton) {

    backToBirthdayButton.addEventListener("click", () => {

        window.location.replace("./index.html?fromGallery=1");

    });

}


// =========================================
// FINGER-RESPONSIVE SWIPING
// =========================================

let touchStartX = 0;
let touchStartY = 0;
let dragRotation = 0;

let isDragging = false;
let isHorizontalSwipe = false;

composition.addEventListener("pointerdown", (event) => {

    if (introAnimating) return;

    if (event.pointerType !== "touch") return;

    touchStartX = event.clientX;
    touchStartY = event.clientY;

    dragRotation = 0;
    isDragging = true;
    isHorizontalSwipe = false;

    composition.style.transition = "none";

    composition.setPointerCapture(event.pointerId);

});

composition.addEventListener("pointermove", (event) => {

    if (introAnimating) return;

    if (!isDragging || event.pointerType !== "touch") return;

    const dx = event.clientX - touchStartX;
    const dy = event.clientY - touchStartY;

    if (!isHorizontalSwipe) {

        if (Math.abs(dx) < 8 && Math.abs(dy) < 8) return;

        if (Math.abs(dy) > Math.abs(dx)) {
            isDragging = false;
            return;
        }

        isHorizontalSwipe = true;
        suppressPhotoClick = true;
    }

    dragRotation = -dx * 0.22;

    composition.style.transform =
        `rotate(${currentRotation + dragRotation}deg)`;

});

composition.addEventListener("pointerup", (event) => {

    if (introAnimating) return;

    if (!isDragging || event.pointerType !== "touch") return;

    isDragging = false;

    if (isHorizontalSwipe) {

        currentRotation += dragRotation;

        composition.style.transition = "none";

        composition.style.transform =
            `rotate(${currentRotation}deg)`;

        updatePhotoFocus();

        setTimeout(() => {
            suppressPhotoClick = false;
        }, 300);

    } else {

        composition.style.transition =
            "transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)";

    }

    isHorizontalSwipe = false;
    dragRotation = 0;

});

composition.addEventListener("pointercancel", () => {

    isDragging = false;
    isHorizontalSwipe = false;
    dragRotation = 0;

    composition.style.transition = "none";

    composition.style.transform =
        `rotate(${currentRotation}deg)`;

    suppressPhotoClick = false;

});


// =========================================
// INITIALIZE
// =========================================

arrangePhotos();
updatePhotoFocus();

playGalleryEntrance();

window.addEventListener("resize", arrangePhotos);
