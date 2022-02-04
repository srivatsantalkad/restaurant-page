import './style.css';

export default function createHome() {
    const div = document.createElement('div');

    let table = ['About Information', 'Schedule', 'Location'];
    let table2 = [
    'Here is the section that talks about the restaurant and what it\'s about.', 
    'This is the section that showcases the schedule of the restaurant i.e. days it\'s open, hours open, holidays when its closed, etc.', 
    'Location of Restaurant, perhaps with complemented with a map.'
    ];
    for (let i = 0; i < 3; i++) {
        const wrapper = document.createElement('div');
        wrapper.classList.add('style-div-children');
        const wrapperHeader = document.createElement('div');
        wrapperHeader.innerText = table[i];
        const wrapperBody = document.createElement('div');
        wrapperBody.innerText = table2[i];
        wrapperBody.classList.add('style-div-grandchildren')
        wrapper.appendChild(wrapperHeader);
        wrapper.appendChild(wrapperBody);
        div.appendChild(wrapper);
    }  

    return div;
}