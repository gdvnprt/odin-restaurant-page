import About from './jpg/campsite-kitchen.jpg';


export default function goAbout() {
    const content = document.querySelector('#content');
    
    const title = document.createElement('h1');
    title.innerHTML = "Born in the outdoors.";
    content.appendChild(title);

    const aboutImg = document.createElement('img');
    aboutImg.src = About;
    aboutImg.alt = "A campfire in the woods";
    content.appendChild(aboutImg);

    const description = document.createElement('p');
    description.innerHTML = "The idea for this was conceived right where you'd want it to be - over a campfire one night in the woods, with a few friends, a few drinks, and some unexpectedly good food.  From there it sat dormant for a while as more expected career options were pursued, but eventually, the woods came calling loud enough that we figured we'd give this a shot, now here we are!";
    content.appendChild(description);
};
