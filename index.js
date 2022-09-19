const container = document.querySelector('.container');

function createGrid(){    
    for(let i=0; i<16*16; i++){
        const el = document.createElement('div');
        el.classList.add(`pad-element`);
        container.appendChild(el);
    }
}

createGrid();

const padElements = document.querySelectorAll('.pad-element');
console.log(padElements);

padElements.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.classList.add('change-color');
    });
})