import dogsData from "./data.js";
import Dog from "./Dog.js";

let dogs = dogsData.map((i) => new Dog(i));
let nextDog = "";

function getNextDog() {
    if (dogs.length != 0) {
        nextDog = new Dog(dogs.shift());
    } else {
        dogs = dogsData.map((i) => new Dog(i));
        getNextDog();
    }
}

function render() {
    getNextDog();
    document.getElementById("main").innerHTML = nextDog.getDogHtml();
}

function swiped(liked) {
    document.getElementById("main").innerHTML += nextDog.swiped(liked);
    setTimeout(render, 1000);
}

document
    .getElementById("like-btn")
    .addEventListener("click", () => swiped(true));

document
    .getElementById("dislike-btn")
    .addEventListener("click", () => swiped(false));

render();
