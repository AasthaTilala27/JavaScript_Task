const images = [
    "./Images/lowbulb.jpg",
    "./Images/mediumbulb.jpg",
    "./Images/highbulb.jpg"
];

const levels = [
    "LOW",
    "MEDIUM",
    "HIGH"
];

let current = 0;

document.querySelector("#btn").onclick = function () {

    current++;

    if (current > 2) {
        current = 0;
    }

    document.querySelector("#bulb").src = images[current];

    document.querySelector("#btn").innerHTML = levels[current];

}