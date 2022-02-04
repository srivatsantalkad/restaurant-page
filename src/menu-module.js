export default function createMenu() {
    const div = document.createElement('div');

    let table = ['Appetizers', 'Entrees', 'Desserts'];
    let table2 = [
    'A bunch of appetizers go here.', 
        'A bunch of entrees go here.',
        'A bunch of desserts go here.'
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