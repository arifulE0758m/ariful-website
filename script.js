// Mobile menu functions
function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.classList.add("active");
    document.body.style.overflow = "hidden";
}

function cancel() {
    const navbar = document.querySelector(".dropdown");
    navbar.classList.remove("active");
    document.body.style.overflow = "auto";
}

// Close dropdown when clicking on a link
document.querySelectorAll('.dropdown .links a').forEach(link => {
    link.addEventListener('click', cancel);
});

// Typewriter Effect

const texts = [
    "DEVELOPER",
    "DESIGNER",
    "STUDENT"
]

let speed  =100;
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let charcterIndex = 0;

function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed); 
    }
    else{
        setTimeout(eraseText, 1000)
    }
}

function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}

window.onload = typeWriter
// Initialize when page loads
window.addEventListener('load', () => {
    // Start typewriter effect
    typeWriter();
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        const dropdown = document.querySelector('.dropdown');
        const hamburger = document.querySelector('.hamburg');
        
        if (dropdown.classList.contains('active') && 
            !dropdown.contains(e.target) && 
            e.target !== hamburger) {
            cancel();
        }
    });
});