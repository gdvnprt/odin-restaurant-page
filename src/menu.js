function goMenu() {
    const content = document.querySelector('#content');

    const title = document.createElement('h1');
    title.innerHTML = "Menu";
    content.appendChild(title);

    for (let i = 0; i < 3; i++) {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        content.appendChild(menuItem);

        const menuImage = document.createElement('img');
        menuImage.classList.add('menu-image');
        menuItem.appendChild(menuImage);

        const itemTitle = document.createElement('h2');
        menuItem.classList.add('item-title');
        menuItem.appendChild(itemTitle);

        const itemDesc = document.createElement('p');
        menuItem.classList.add('item-description');
        menuItem.appendChild(itemDesc);
    };

    menuImage[0].src = '';// image link
    menuImage[0].alt = 'A plain cheese pizza';
    itemTitle[0].innerHTML = "Cheese Pizza";
    itemDesc[0].innerHTML = "A cheese pizza with your choice of up to four cheeses!";

    menuImage[1].src = '';// image link
    menuImage[1].alt = 'A pepperoni pizza';
    itemTitle[1].innerHTML = "One-topping pizza";
    itemDesc[1].innerHTML = "A single-topping pizza with your choice of our many topping options!";

    menuImage[2].src = '';// image link
    menuImage[2].alt = 'A Hawaiian-style pizza';
    itemTitle[2].innerHTML = "Two-topping pizza";
    itemDesc[2].innerHTML = "Our classic choice, choose two toppings of any kind!";
};