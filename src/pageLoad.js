import cakes from './cake1.jpg';
import './style.css';

export default function pageLoad() {

    //create all elements for homepage
    

    const element = document.createElement('div');
    const topBar = document.createElement('div');
    const buttons = document.createElement('div');
    const homeButton = document.createElement('button');
    const menuButton = document.createElement('button');
    const contactUsButton = document.createElement('button');
    const title = document.createElement('h1');
    const pageContent = document.createElement
    ('div');
    const pageTitle = document.createElement('div');
    
    //add classes to elements as needed
    topBar.classList.add('topBar');
    buttons.classList.add('buttons');
    title.classList.add('title');
    pageContent.classList.add('pageContent');

    //add IDs to buttons and element
    element.setAttribute('id', 'container');
    homeButton.setAttribute('id', 'homeButton');
    menuButton.setAttribute('id', 'menuButton');
    contactUsButton.setAttribute('id', 'contactUsButton');
    pageContent.setAttribute('id', 'pageContent');
    pageTitle.setAttribute('id', 'pageTitle');


    //set innerHTML

    homeButton.innerHTML = 'Home';
    menuButton.innerHTML = 'Menu';
    contactUsButton.innerHTML = 'Contact us';
    title.innerHTML = 'The Crumby Baker';
       
    //append everything to element
    element.appendChild(topBar);
    element.appendChild(pageContent);
    pageContent.appendChild(pageTitle);
    pageTitle.appendChild(title);
    topBar.appendChild(buttons);
    buttons.appendChild(homeButton);
    buttons.appendChild(menuButton);
    buttons.appendChild(contactUsButton);

    // document.body.appendChild(pageContent);
   
    console.log("testing");
   return element;

}

