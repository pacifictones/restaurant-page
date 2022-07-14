import './style.css';
import pageLoad from './pageLoad.js';
import menuPage from './menu.js';
import homePage from './home.js';

// const content = document.getElementById('content');

document.body.appendChild( pageLoad() );


const home = document.getElementById('homeButton');
const menu = document.getElementById('menuButton');



menu.addEventListener("click", function() {
    const currentPage = document.getElementById('pageContent');
    currentPage.remove();
    menuPage();
});

home.addEventListener("click", function() {
    const currentPage = document.getElementById('pageContent');
    currentPage.remove();
    homePage();
})



