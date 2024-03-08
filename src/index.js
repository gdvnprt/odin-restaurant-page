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
