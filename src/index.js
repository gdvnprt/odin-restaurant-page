import goHome from './home.js';
import goMenu from './menu.js';
import goAbout from './about.js';

import './style.css';

console.log("Webpack running");

goHome();

function clear() {
    const content = document.querySelector('#content');
    while (content.firstChild) {
        content.removeChild(content.firstChild);
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
