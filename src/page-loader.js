import './style.css';

export default function loadPage(...elements) {
    const content = document.querySelector('#content');

    // create nav that will always be present regardless of which page the user is on
    const nav = document.createElement('div');
    nav.appendChild(document.createElement('div'));
    nav.childNodes[0].innerText = "Restaurant Title";

    let table = ['HOME', 'MENU', 'CONTACT'];
   

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

    content.appendChild(elements[0]);

    // onclick, the #content div will remove its third node(the third node is either home, menu, or contact, home is the page that is loaded initially),
    // and then it will append the page identical to the button pressed i.e. menubutton will make #content append the node containing the menu page.
    homeButton.addEventListener("click", () => {
        content.removeChild(content.childNodes[2]);
        content.appendChild(homePage);
    });
    menuButton.addEventListener("click", () => {
        content.removeChild(content.childNodes[2]);
        content.appendChild(menuPage);
    });
    contactButton.addEventListener("click", () => {
        content.removeChild(content.childNodes[2]);
        content.appendChild(contactPage);
    });

};