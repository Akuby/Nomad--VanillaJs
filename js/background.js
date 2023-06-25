const imageArr = ["bg01.jpg", "bg02.jpg", "bg03.jpg"];
const targetImage = imageArr[randomGen()];

const body = document.querySelector('body');

body.style.backgroundImage = `url(/img/${targetImage})`;

function randomGen() {
    const num = Math.floor(Math.random() * imageArr.length);
    return num;
}