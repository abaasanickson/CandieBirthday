
const countdown = document.getElementById("countdown");
const countdownNumber = document.getElementById("countdownNumber");

const greetingStage = document.getElementById("greetingStage");
const nextButton = document.getElementById("nextButton");

const happy = document.getElementById("happy");
const birthday = document.getElementById("birthday");

const heartStage = document.getElementById("heartStage");
const photoStage = document.getElementById("photoStage");

const stars = document.getElementById("stars");

const sleep = ms =>
    new Promise(resolve => setTimeout(resolve, ms));


// =====================================
// FALLING STARS
// =====================================

function createStars() {

    const colors = [
        "#ff4fd8",
        "#d66bff",
        "#8b5cf6",
        "#55d9ff",
        "#ffffff",
        "#ffd166",
        "#ff8fab"
    ];

    if (!stars) return;

    stars.innerHTML = "";

    for (let i = 0; i < 250; i++) {

        const star = document.createElement("div");

        star.classList.add("star", "falling");

        const color =
            colors[Math.floor(Math.random() * colors.length)];

        star.style.color = color;
        star.style.backgroundColor = color;

        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "vh";

        const size = 1 + Math.random() * 3;

        star.style.width = size + "px";
        star.style.height = size + "px";

        star.style.animationDuration =
            (3 + Math.random() * 6) + "s";

        star.style.animationDelay =
            (Math.random() * 6) + "s";

        stars.appendChild(star);
    }
}


// =====================================
// COUNTDOWN
// =====================================

async function showCountdownNumber(number) {

    countdownNumber.textContent = number;

    countdown.classList.remove("pop");

    void countdown.offsetWidth;

    countdown.classList.add("pop");

    await sleep(1000);
}


// =====================================
// SHOW HAPPY AND BIRTHDAY
// =====================================

async function showText(element, duration) {

    element.classList.remove("hidden");

    void element.offsetWidth;

    element.classList.add("show");

    await sleep(duration);
}


// =====================================
// CHANGE FALLING STARS INTO TWINKLING
// =====================================

function makeStarsTwinkle() {

    const starElements =
        document.querySelectorAll(".star");

    starElements.forEach(star => {

        star.classList.remove("falling");
        star.classList.add("twinkling");

        star.style.animationDelay =
            Math.random() * 2 + "s";
    });
}


// =====================================
// REAL LAUNCHING HEART-SHAPED FIREWORKS
// =====================================

function formHeart() {

    document.querySelectorAll(".star").forEach(star => {
        star.remove();
    });

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    if (!ctx) {
        return { stop: () => {} };
    }

    canvas.style.position = "absolute";
    canvas.style.inset = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "5";

    heartStage.appendChild(canvas);

    const colors = [
        "#ff1744",
        "#ff4081",
        "#ff80ab",
        "#ff00ff",
        "#c77dff",
        "#8b5cf6",
        "#00e5ff",
        "#29b6f6",
        "#ffd740",
        "#ff9100",
        "#ffffff",
        "#ff5252"
    ];

    let width = 0;
    let height = 0;
    let centerX = 0;
    let centerY = 0;
    let scale = 0;

    let animationFrame = null;
    let startTime = null;
    let previousTime = null;
    let stopped = false;

    const rockets = [];
    const particles = [];
    const scheduledLaunches = [];


    function resizeCanvas() {

        const rect = heartStage.getBoundingClientRect();

        if (!rect.width || !rect.height) return;

        width = rect.width;
        height = rect.height;

        const dpr = Math.min(
            window.devicePixelRatio || 1,
            1.5
        );

        canvas.width = Math.round(width * dpr);
        canvas.height = Math.round(height * dpr);

        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        centerX = width / 2;
        centerY = height * 0.43;

        scale = Math.min(
            width / 39,
            height / 43
        );

        ctx.clearRect(0, 0, width, height);
    }

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);


    function heartPoint(t) {

        const x = 16 * Math.pow(Math.sin(t), 3);

        const y =
            13 * Math.cos(t) -
            5 * Math.cos(2 * t) -
            2 * Math.cos(3 * t) -
            Math.cos(4 * t);

        return {
            x: centerX + x * scale,
            y: centerY - y * scale
        };
    }


    function prepareFireworks() {

        scheduledLaunches.length = 0;

        const outlineCount = 22;

        for (let i = 0; i < outlineCount; i++) {

            const angle =
                (Math.PI * 2 * i) / outlineCount;

            const target = heartPoint(angle);

            scheduledLaunches.push({

                targetX: target.x,
                targetY: target.y,

                launchTime: i * 170,

                color: colors[
                    Math.floor(Math.random() * colors.length)
                ],

                size: 0.9 + Math.random() * 0.25
            });
        }

        const innerPositions = [
            [-0.32, -0.20],
            [0.32, -0.20],
            [-0.43, 0.02],
            [0.43, 0.02],
            [-0.23, 0.22],
            [0.23, 0.22],
            [0, 0.02],
            [0, 0.32]
        ];

        innerPositions.forEach((position, index) => {

            const targetX =
                centerX + position[0] * width * 0.30;

            const targetY =
                centerY + position[1] * height;

            scheduledLaunches.push({

                targetX,
                targetY,

                launchTime: 450 + index * 250,

                color: colors[
                    Math.floor(Math.random() * colors.length)
                ],

                size: 1 + Math.random() * 0.2
            });
        });

        scheduledLaunches.sort(
            (a, b) => a.launchTime - b.launchTime
        );
    }


    function launchRocket(targetX, targetY, color, size) {

        const startX =
            targetX + (Math.random() - 0.5) * width * 0.45;

        const startY = height + 15;

        const distance = Math.hypot(
            targetX - startX,
            targetY - startY
        );

        const duration = Math.max(
            650,
            Math.min(1250, distance * 1.4)
        );

        rockets.push({

            startX,
            startY,

            x: startX,
            y: startY,

            targetX,
            targetY,

            color,
            size,

            duration,

            elapsed: 0,

            trail: []
        });
    }


    function explode(x, y, size, mainColor) {

        const particleCount =
            Math.floor(75 * size);

        for (let i = 0; i < particleCount; i++) {

            const angle =
                (Math.PI * 2 * i) / particleCount +
                (Math.random() - 0.5) * 0.12;

            const speed =
                (2.5 + Math.random() * 5.5) * size;

            const color = Math.random() > 0.83
                ? "#ffffff"
                : Math.random() > 0.88
                    ? colors[Math.floor(Math.random() * colors.length)]
                    : mainColor;

            const life =
                800 + Math.random() * 850;

            particles.push({

                x,
                y,

                previousX: x,
                previousY: y,

                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,

                gravity: 0.055 + Math.random() * 0.035,

                life,
                maxLife: life,

                radius: 0.8 + Math.random() * 1.5,

                color,

                sparkle: Math.random() > 0.75
            });
        }

        for (let i = 0; i < 12; i++) {

            const angle = Math.random() * Math.PI * 2;
            const speed = 1 + Math.random() * 3;

            const life = 500 + Math.random() * 500;

            particles.push({

                x,
                y,

                previousX: x,
                previousY: y,

                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,

                gravity: 0.07,

                life,
                maxLife: life,

                radius: 1.2,

                color: "#ffffff",

                sparkle: true
            });
        }
    }


    function animate(timestamp) {

        if (stopped || !canvas.isConnected) return;

        if (startTime === null) {
            startTime = timestamp;
        }

        const delta = previousTime === null
            ? 16.67
            : Math.min(timestamp - previousTime, 32);

        previousTime = timestamp;

        const frameScale = delta / 16.67;

        const elapsed = timestamp - startTime;

        ctx.globalCompositeOperation = "source-over";
        ctx.fillStyle = "rgba(8, 5, 15, 0.22)";
        ctx.fillRect(0, 0, width, height);

        ctx.globalCompositeOperation = "lighter";

        while (
            scheduledLaunches.length > 0 &&
            elapsed >= scheduledLaunches[0].launchTime
        ) {

            const launch = scheduledLaunches.shift();

            launchRocket(
                launch.targetX,
                launch.targetY,
                launch.color,
                launch.size
            );
        }

        for (let i = rockets.length - 1; i >= 0; i--) {

            const rocket = rockets[i];

            rocket.elapsed += delta;

            const progress = Math.min(
                rocket.elapsed / rocket.duration,
                1
            );

            const eased = 1 - Math.pow(1 - progress, 2);

            rocket.x =
                rocket.startX +
                (rocket.targetX - rocket.startX) * eased;

            rocket.y =
                rocket.startY +
                (rocket.targetY - rocket.startY) * eased;

            rocket.trail.push({
                x: rocket.x,
                y: rocket.y
            });

            if (rocket.trail.length > 9) {
                rocket.trail.shift();
            }

            ctx.beginPath();

            if (rocket.trail.length > 0) {

                ctx.moveTo(
                    rocket.trail[0].x,
                    rocket.trail[0].y
                );

                for (let j = 1; j < rocket.trail.length; j++) {

                    ctx.lineTo(
                        rocket.trail[j].x,
                        rocket.trail[j].y
                    );
                }
            }

            ctx.strokeStyle = rocket.color;
            ctx.lineWidth = 2.5;
            ctx.globalAlpha = 0.8;
            ctx.stroke();

            ctx.beginPath();

            ctx.arc(
                rocket.x,
                rocket.y,
                3.5 * rocket.size,
                0,
                Math.PI * 2
            );

            ctx.fillStyle = "#ffffff";
            ctx.globalAlpha = 1;
            ctx.fill();

            if (progress >= 1) {

                explode(
                    rocket.targetX,
                    rocket.targetY,
                    rocket.size,
                    rocket.color
                );

                rockets.splice(i, 1);
            }
        }

        const paths = new Map();
        const sparkPaths = new Map();

        for (let i = particles.length - 1; i >= 0; i--) {

            const p = particles[i];

            p.previousX = p.x;
            p.previousY = p.y;

            p.x += p.vx * frameScale;
            p.y += p.vy * frameScale;

            p.vy += p.gravity * frameScale;

            p.vx *= Math.pow(0.992, frameScale);
            p.vy *= Math.pow(0.992, frameScale);

            p.life -= delta;

            if (p.life <= 0) {
                particles.splice(i, 1);
                continue;
            }

            const opacity = p.life / p.maxLife;

            if (!paths.has(p.color)) {
                paths.set(p.color, new Path2D());
            }

            const path = paths.get(p.color);

            path.moveTo(p.previousX, p.previousY);
            path.lineTo(p.x, p.y);

            if (p.sparkle && opacity > 0.35) {

                if (!sparkPaths.has(p.color)) {
                    sparkPaths.set(p.color, new Path2D());
                }

                const sparkPath = sparkPaths.get(p.color);

                sparkPath.moveTo(p.x + p.radius, p.y);

                sparkPath.arc(
                    p.x,
                    p.y,
                    p.radius,
                    0,
                    Math.PI * 2
                );
            }
        }

        ctx.globalCompositeOperation = "lighter";
        ctx.lineWidth = 1.6;
        ctx.globalAlpha = 0.9;

        for (const [color, path] of paths) {
            ctx.strokeStyle = color;
            ctx.stroke(path);
        }

        for (const [color, path] of sparkPaths) {
            ctx.fillStyle = color;
            ctx.fill(path);
        }

        ctx.globalAlpha = 1;
        ctx.globalCompositeOperation = "source-over";

        animationFrame =
            requestAnimationFrame(animate);
    }


    prepareFireworks();

    animationFrame =
        requestAnimationFrame(animate);


    return {

        canvas,

        stop: () => {

            stopped = true;

            cancelAnimationFrame(animationFrame);

            window.removeEventListener(
                "resize",
                resizeCanvas
            );

            canvas.remove();
        }
    };
}


// =====================================
// REVEAL CANDIE'S PHOTO
// =====================================

async function showPhoto() {

    photoStage.classList.remove("hidden");

    void photoStage.offsetWidth;

    photoStage.classList.add("show");
}


// =====================================
// COMPLETE BIRTHDAY ANIMATION
// =====================================

async function startAnimation() {

    createStars();

    // COUNTDOWN: 3, 2, 1
    for (let number = 3; number >= 1; number--) {
        await showCountdownNumber(number);
    }

    countdown.classList.add("hidden");

    // HAPPY
    await showText(happy, 2200);

    await sleep(500);

    happy.classList.add("hidden");

    // BIRTHDAY
    await showText(birthday, 2500);

    await sleep(1000);

    birthday.classList.add("hidden");

    // SHOW FIREWORKS STAGE
    heartStage.classList.remove("hidden");

    void heartStage.offsetWidth;

    await sleep(100);

    // LAUNCH HEART-SHAPED FIREWORKS
    const fireworks = formHeart();

    // Keep the fireworks running
    await sleep(7500);

    // STOP FIREWORKS
    fireworks.stop();

    // HIDE FIREWORKS
    heartStage.classList.add("hidden");

    // SHOW BIRTHDAY GREETING
    showGreeting();
}


// =====================================
// SHOW GREETING SCREEN
// =====================================

function showGreeting() {

    greetingStage.classList.remove("hidden");

    void greetingStage.offsetWidth;

    greetingStage.classList.add("show");
}


// =====================================
// RETURNING FROM GALLERY
// =========================================

const urlParams = new URLSearchParams(window.location.search);

const returningFromGallery =
    urlParams.get("fromGallery") === "1";

if (returningFromGallery) {

    // Hide every opening-animation stage.
    countdown.classList.add("hidden");
    happy.classList.add("hidden");
    birthday.classList.add("hidden");
    heartStage.classList.add("hidden");
        if (photoStage) {
        photoStage.classList.add("hidden");
    }

    // Reveal the greeting directly.
    greetingStage.classList.remove("hidden");

    // Force the browser to apply the visible state.
    greetingStage.style.display = "flex";
    greetingStage.style.opacity = "1";

    // The greeting's staggered entrance is not replayed.
    greetingStage.classList.remove("show");

    // Reveal its contents.
    const greetingElements = greetingStage.querySelectorAll(
        ".greeting-content > *, .cake-container, .next-button"
    );

    greetingElements.forEach(element => {
        element.style.opacity = "1";
        element.style.animation = "none";
    });

    // Remove the query parameter after handling the return.
    window.history.replaceState(
        {},
        document.title,
        window.location.pathname
    );

} else {

    // Fresh visit: play the original complete birthday sequence.
    startAnimation();

}


// =====================================
// NEXT BUTTON
// =====================================

if (nextButton) {

    nextButton.addEventListener("click", () => {

        window.location.href = "./gallery.html";

    });

}
