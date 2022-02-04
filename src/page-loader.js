import './style.css';

export default function loadPage(...elements) {
    const homePage = elements[0];
    const menuPage = elements[1];
    const contactPage = elements[2];
    // Add css styles to the pages
    homePage.classList.add('style-div');
    menuPage.classList.add('style-div');
    contactPage.classList.add('style-div');

    const content = document.querySelector('#content');

    // create nav that will always be present regardless of which page the user is on
    const nav = document.createElement('div');

    const homeButton = document.createElement('div');
    const menuButton = document.createElement('div');
    const contactButton = document.createElement('div');

    homeButton.innerText = "HOME";
    menuButton.innerText = "MENU";
    contactButton.innerText = "CONTACT";

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);

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