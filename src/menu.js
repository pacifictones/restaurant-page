import './style.css';

export default function menuPage() {
    const element = document.getElementById('container');
   
    const title = document.createElement('h1');
    const pageContent = document.createElement('div');
    const pageTitle = document.createElement('div');
    const menuInfo = document.createElement('div');
    
    //add classes to elements as needed

   
    title.classList.add('title');
   
    menuInfo.classList.add('menuInfo');

    //add IDs as needed
   
    pageContent.setAttribute('id', 'pageContent');
    pageTitle.setAttribute('id', 'pageTitle');

    //set innerHTML
    title.innerHTML = 'Menu';
    menuInfo.innerHTML = "Our menu is awesome..."  
    
    //append everything to element
    element.appendChild(pageContent);
    pageContent.appendChild(pageTitle);
    pageContent.appendChild(menuInfo);
    pageTitle.appendChild(title);
    console.log("testingmenu");
   return element;


}

console.log("fuck Me");