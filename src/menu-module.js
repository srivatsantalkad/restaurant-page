export default function createMenu() {
    const div = document.createElement('div');
    const menuHeader = document.createElement('div');
    const appetizerHeader = document.createElement('div');
    const entreeHeader = document.createElement('div');
    const dessertHeader = document.createElement('div');

    menuHeader.innerText = "Restaurant's Menu";
    appetizerHeader.innerText = "Appetizers";
    entreeHeader.innerText = "Entrees";
    dessertHeader.innerText = "Desserts";

    div.appendChild(menuHeader);
    div.appendChild(appetizerHeader);
    div.appendChild(entreeHeader);
    div.appendChild(dessertHeader);

    return div;
}