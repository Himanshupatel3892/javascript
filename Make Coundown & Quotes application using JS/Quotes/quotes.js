const quotes = [
    "Start where you are. Use what you have. Do what you can.",
    "The secret of getting ahead is getting started.",
    "A journey of a thousand miles begins with a single step.",
    "Believe you can, and you're halfway there.",
    "Dream big. Start small. Act now.",
    "Success is not final. Failure is not fatal.",
    "Push yourself because no one else will do it for you.",
    "Small progress is still progress."
];

let btn = document.querySelector("#generateBtn");
let p = document.querySelector("#quote");

// Function to update quote
function changeQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);

    p.style.opacity = 0; // fade out

    setTimeout(() => {
        p.innerHTML = quotes[randomIndex];
        p.style.animation = "none";
        void p.offsetWidth; 
        p.style.animation = "fadeInQuote 1s forwards";
    }, 200);
}

// Button click → change quote
btn.addEventListener("click", changeQuote);

// Auto change every 5 seconds
setInterval(changeQuote, 5000);
