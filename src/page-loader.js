import './style.css';

export default function loadPage(...elements) {
    const content = document.querySelector('#content');

    // create nav that will always be present regardless of which page the user is on
    const nav = document.createElement('div');
    nav.appendChild(document.createElement('div'));
    nav.childNodes[0].innerText = "Restaurant Title";

    let table = ['HOME', 'MENU', 'CONTACT'];
   
    // create nav buttons and its respective event listeners
    for (let i = 0; i < 3; i++) {
        elements[i].classList.add('style-div');
        const button = document.createElement('div');
        button.innerText = table[i];
        button.addEventListener("click", () => {
            content.removeChild(content.childNodes[2]);
            content.appendChild(elements[i]);
        });
        button.classList.add('style-nav-buttons');
        nav.appendChild(button);
    }

    // add css style to the nav
    nav.classList.add('style-nav')

    content.appendChild(nav);
    // let home be the div below nav, initially.
    content.appendChild(elements[0]);

};