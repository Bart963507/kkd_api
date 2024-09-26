

//const btnVolgende= document.getElementById("Volgende")
//btnVolgende.addEventListener("click", getGameInformation)
//localStorage.clear();


const btnStartSpel= document.getElementById("startSpel")
btnStartSpel.addEventListener("click",getPlayers)

const existingGame = localStorage["gameInformation"]
console.log(existingGame)

if (existingGame !== undefined){
  const btnBestaandSpel = document.getElementById("Bestaand")
  btnBestaandSpel.style="display: block;"
}
else {
  
}


// wheel.js
const canvas = document.getElementById('wheelCanvas');
console.log(canvas.getContext('2d'))
const ctx = canvas.getContext('2d');
const names = ["John", "Sara", "Tom", "Emma", "David", "Lucy",]; // Your list of names
const numSegments = names.length;
const wheelRadius = canvas.width / 2;
let currentAngle = 0;
let spinTimeout = null;
let spinAngleStart = 0;
let spinTime = 0;
let spinTimeTotal = 0;

// Function to draw the wheel
function drawWheel(names) {
    
    const wheelSegments = names.length
    const arcSize = 2 * Math.PI / wheelSegments;
    // Loop over each segment to draw
    for (let i = 0; i < wheelSegments; i++) {
        const angle = currentAngle + i * arcSize;
        ctx.beginPath();
        ctx.fillStyle = i % 2 === 0 ? "#f2a104" : "#f2d104"; // Alternating colors
        ctx.moveTo(wheelRadius, wheelRadius);
        ctx.arc(wheelRadius, wheelRadius, wheelRadius, angle, angle + arcSize, false);
        ctx.fill();
        
        // Draw text
        ctx.save();
        ctx.translate(wheelRadius, wheelRadius);
        ctx.rotate(angle + arcSize / 2);
        ctx.textAlign = "right";
        ctx.fillStyle = "#000";
        ctx.font = "16px Arial";
        ctx.fillText(names[i], wheelRadius - 10, 10);
        ctx.restore();
    }
}

// Function to rotate the wheel
function rotateWheel() {
    spinTime += 100;
    if (spinTime >= spinTimeTotal) {
        stopRotateWheel();
        return;
    }
    const spinAngle = spinAngleStart - easeOut(spinTime, 0, spinAngleStart, spinTimeTotal);
    currentAngle += (spinAngle * Math.PI / 180);
    drawWheel(names);
    spinTimeout = setTimeout(rotateWheel, 30);
}

// Function to handle the easing of the spin
function easeOut(t, b, c, d) {
    const ts = (t /= d) * t;
    const tc = ts * t;
    return b + c * (tc + -3 * ts + 3 * t);
}

// Function to stop the wheel and show the result
function stopRotateWheel() {
    clearTimeout(spinTimeout);
    const arcSize = 2 * Math.PI / numSegments;
    const index = Math.floor((currentAngle % (2 * Math.PI)) / arcSize);
    document.getElementById('result').innerText = "Selected: " + names[(numSegments - index) % numSegments];
    names.pop((numSegments - index) % numSegments)
    drawWheel(names)
}

// Start spinning the wheel
function spinWheel() {
    spinAngleStart = Math.random() * 10 + 10; // Random spin start angle
    spinTime = 0;
    spinTimeTotal = Math.random() * 3000 + 4000; // Spin duration
    rotateWheel();
}

// Attach event to spin button
document.getElementById('spinButton').addEventListener('click', spinWheel);

// Draw the wheel when the page loads
drawWheel(names);
