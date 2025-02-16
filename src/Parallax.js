/*
document.addEventListener("mousemove", function(event)
{
    let x = event.clientX / window.innerWidth - 0.5; // Normalize to range [-0.5, 0.5]
    let y = event.clientY / window.innerHeight - 0.5; // Normalize to range [-0.5, 0.5]

    document.querySelector(".background").style.transform = `translate(${x * 50}px, ${y * 50}px) scale(1.5)`;
    document.querySelector(".subject").style.transform = `translate(${x * 30}px, ${y * 30}px)`;
    document.querySelector(".foreground").style.transform = `translate(${x * 70}px, ${y * 70}px) scale(1.2)`;
});
*/

let mouseX = 0, mouseY = 0;
let targetX = 0, targetY = 0;

document.addEventListener("mousemove", (event) => {
    targetX = (event.clientX / window.innerWidth - 0.5) * 100;
    targetY = (event.clientY / window.innerHeight - 0.5) * 100;
});

function animate() {
    mouseX += (targetX - mouseX) * 0.1; // Smooth interpolation
    mouseY += (targetY - mouseY) * 0.1;

    document.querySelector(".background").style.transform = `translateX(${mouseX * 0.1}px) translateY(${mouseY * 0.05}px) scale(1.01)`;
    /*document.querySelector(".subject").style.transform = `translateX(${mouseX * -0.05}px) translateY(${mouseY * -0.025}px) scale(1.00)`;*/
    document.querySelector(".foreground").style.transform = `translateX(${mouseX * -0.4}px) translateY(${mouseY * -0.2}px) scale(1.03)`;

    requestAnimationFrame(animate);
}

animate();