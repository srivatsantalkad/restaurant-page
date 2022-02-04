export default function createContact() {
    const div = document.createElement('div');
    const contactHeader = document.createElement('div');
    const phoneNumber = document.createElement('div');
    const email = document.createElement('div');


    contactHeader.innerText = "Contact";
    phoneNumber.innerText = "Restaurant Phone Number.";
    email.innerText = "Restaurant Email Address";

    div.appendChild(contactHeader);
    div.appendChild(phoneNumber);
    div.appendChild(email);

    return div;
}