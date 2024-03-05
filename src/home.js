import Image from './camp-pizza.jpg';

function goHome() {
    const content = document.querySelector('#content');
    
    const title = document.createElement('h1');
    title.innerHTML = "Gavin's Campfire Pizzaria";
    content.appendChild(title);

    const pizzaImg = document.createElement('img');
    pizzaImg.src = Image;
    pizzaImg.alt = "A personal sized pizza on a plate by a campfire";
    content.appendChild(pizzaImg);

    const description = document.createElement('p');
    description.innerHTML = "Bringing quality pizza to the great outdoors!";
    content.appendChild(description);
};
