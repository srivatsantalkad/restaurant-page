export default function createHome() {
    const div = document.createElement('div');
    const restaurantTitle = document.createElement('div');
    const restaurantAboutInformation = document.createElement('div');
    const restaurantSchedule = document.createElement('div');
    const restaurantLocation = document.createElement('div');

    restaurantTitle.innerText = "Restaurant Title";
    restaurantAboutInformation.innerText = "Restaurant's About Information.";
    restaurantSchedule.innerText = "Restaurant Schedule";
    restaurantLocation.innerText = "Restaurant Location";

    div.appendChild(restaurantTitle);
    div.appendChild(restaurantAboutInformation);
    div.appendChild(restaurantSchedule);
    div.appendChild(restaurantLocation);

    return div;
}