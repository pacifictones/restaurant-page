import './style.css';

export default function homePage() {
    const element = document.getElementById('container');

    const title = document.createElement('h1');
    const pageContent = document.createElement('div');
    const pageTitle = document.createElement('div');

    title.classList.add('title');
    pageContent.setAttribute('id', 'pageContent');
    pageTitle.setAttribute('id', 'pageTitle');

    title.innerHTML = 'The Cumby Baker';

    element.appendChild(pageContent);
    pageContent.appendChild(pageTitle);
    pageTitle.appendChild(title);
    console.log("Home testing");
}