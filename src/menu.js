let menuList = [];

function menuDish(imgLnk, imgAlt, title, desc) {
    const imgLnk = imgLnk;
    const imgAlt = imgAlt;
    const title = title;
    const desc = desc;
    return { imgLnk, imgAlt, title, desc };
};

menuList.push(menuDish('', 'A plain cheese pizza', "Cheese Pizza", "A cheese pizza with your choice of up to four cheeses!"));
menuList.push(menuDish('', 'A pepperoni pizza', "One-topping pizza", "A single-topping pizza with your choice of our many topping options!"));
menuList.push(menuDish('', 'A Hawaiian-style pizza', "Two-topping pizza", "Our classic choice, choose two toppings of any kind!"));
menuList.push(menuDish('', "A toasted s'more by a campfire", "Dessert S'more", "A hand-roasted s'more cooked to your liking and with your choice of chocolate!"));

function goMenu() {
    const content = document.querySelector('#content');

    const title = document.createElement('h1');
    title.innerHTML = "Menu";
    content.appendChild(title);

    for (let i = 0; i < menuList.length; i++) {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        content.appendChild(menuItem);

        const menuImage = document.createElement('img');
        menuImage.classList.add('menu-image');
        menuImage.src = menuList[i].imgLnk;
        menuImage.alt = menuList[i].imgAlt;
        menuItem.appendChild(menuImage);

        const itemTitle = document.createElement('h2');
        itemTitle.classList.add('item-title');
        itemTitle.innerHTML = menuList[i].title;
        menuItem.appendChild(itemTitle);

        const itemDesc = document.createElement('p');
        itemDesc.classList.add('item-description');
        itemDesc.innerHTML = menuList[i].desc;
        menuItem.appendChild(itemDesc);
    };
};