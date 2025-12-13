
let targetTime = null;

// When START button is clicked
document.getElementById("startBtn").addEventListener("click", () => {
    let d = document.getElementById("userDate").value;
    let t = document.getElementById("userTime").value;

    if (d === "" || t === "") {
        alert("Please select both date and time!");
        return;
    }

    // Combine date and time into a single target timestamp
    targetTime = new Date(`${d} ${t}`).getTime();
});

// Timer function that runs every 1 sec
function timer() {
    if (!targetTime) return;

    let now = new Date().getTime();
    let diff = Math.floor((targetTime - now) / 1000);

    if (diff <= 0) {
        document.getElementById("day").innerHTML = "00";
        document.getElementById("hour").innerHTML = "00";
        document.getElementById("min").innerHTML = "00";
        document.getElementById("sec").innerHTML = "00";
        return;
    }

    let days = Math.floor(diff / (3600 * 24));
    let hours = Math.floor((diff % (3600 * 24)) / 3600);
    let mins = Math.floor((diff % 3600) / 60);
    let secs = Math.floor(diff % 60);

    document.getElementById("day").innerHTML = days;
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("min").innerHTML = mins;
    document.getElementById("sec").innerHTML = secs;
}

setInterval(timer, 1000); 