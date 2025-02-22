const fixedProgress = 0.025;
let prevTime = performance.now();
let currentX = 0, currentY = 0;
let targetX = 0, targetY = 0;

document.addEventListener("mousemove", (event) =>
{
    targetX = (event.clientX / window.innerWidth - 0.5) * 100;
    targetY = (event.clientY / window.innerHeight - 0.5) * 100;
});

if (window.DeviceOrientationEvent)
{
    window.addEventListener("deviceorientation", (event) =>
    {
        let beta = event.beta || 0;
        let gamma = event.gamma || 0;
        
        targetX = (gamma / 45) * 100;
        targetY = (beta / 90) * 100;
    });
}

function update(time)
{
    requestAnimationFrame(update);

    const deltaTime = (time - prevTime) / 1000;
    currentX = fixedProgressLerp(currentX, targetX, fixedProgress, deltaTime);
    currentY = fixedProgressLerp(currentY, targetY, fixedProgress, deltaTime);

    document.querySelector(".background").style.transform = `translateX(${currentX * 0.1}px) translateY(${currentY * 0.05}px) scale(1.01)`;
    document.querySelector(".foreground").style.transform = `translateX(${currentX * -0.4}px) translateY(${currentY * -0.2}px) scale(1.03)`;
}

function fixedProgressLerp(a, b, fixedProgress, deltaTime)
{
    return lerp(a, b, 1 - pow(1 - fixedProgress, deltaTime));
}

function lerp(a, b, t)
{
    return a + (b - a) * t;
}

function pow(base, exponent)
{
    if (exponent === 0) return 1;
    if (exponent < 0) return 1 / pow(base, -exponent);

    let half = pow(base, exponent >> 1);
    return (exponent & 1) === 0 ? half * half : half * half * base;
}

update();