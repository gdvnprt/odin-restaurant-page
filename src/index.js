import './home.js';
import './menu.js';
import './about.js'

console.log("Webpack running");

goHome();

function clear() {
    const content = document.querySelector('#content');
    while (content.firstChild) {
        content.removeChild(container.firstChild);
    };
};

const homeButton = document.querySelector('#home');
homeButton.addEventListener('click',() => {
    clear();
    goHome();
});

const menuButton = document.querySelector('#menu');
menuButton.addEventListener('click',() => {
    clear();
    goMenu();
});

const aboutButton = document.querySelector('#about');
aboutButton.addEventListener('click',() => {
    clear();
    goAbout();
});
