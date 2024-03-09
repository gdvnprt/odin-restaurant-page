import pizza from './jpg/camp-pizza.jpg';
import grilledCheese from './jpg/grilled-cheese.jpg';
import sMore from './jpg/s-more.jpg';
import hotChoc from './jpg/hot-chocolate.jpg';

let menuList = [];

function menuDish(lnk, alt, ttle, dsc) {
    const imgLnk = lnk;
    const imgAlt = alt;
    const title = ttle;
    const desc = dsc;
    return { imgLnk, imgAlt, title, desc };
};

menuList.push(menuDish(pizza, 'A Hawaiian-style pizza', "Campfire Pizza", "Our classic choice, choose your cheese types and any combination of toppings!"));
menuList.push(menuDish(grilledCheese, "A toasted grilled cheese sandwich on a plate", "Campfire Grilled Cheese", "A classic campfire lunch with the best melted sharp cheddar!  Choose with or without spicy chipotle avocado spread."));
menuList.push(menuDish(sMore, "A toasted s'more by a campfire", "Dessert S'more", "A hand-roasted s'more cooked to your liking and with your choice of chocolate!"));
menuList.push(menuDish(hotChoc, "A mug of hot chocolate by a campfire", "Campfire Hot Chocolate", "Rich hot chocolate topped with a toasted marshmallow.  A must-have for cold nights at the campground!"));

export default function goMenu() {


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