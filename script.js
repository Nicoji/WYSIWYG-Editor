const editor = document.querySelector('#editor');

const iconBlock = document.createElement('div'); 
const textEditor = document.createElement('div');

iconBlock.classList.add('icon-block');
textEditor.classList.add('text-block');
textEditor.setAttribute('contenteditable', true);

editor.appendChild(iconBlock);
editor.appendChild(textEditor);

const dValue = [''];

const svg = [];
const path = [];

for(let i = 0; i < 10; i++) {
    svg[i] = document.createElement('svg');
    svg[i].classList.add('bi');
    svg[i].setAttribute('width', '1.5em');
    svg[i].setAttribute('height', '1.5em');
    svg[i].setAttribute('viewbox', '0 0 16 16');
    svg[i].setAttribute('fill', '#000');
    svg[i].setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    path[i] = document.createElement('path'); 
    svg[i].appendChild(path[i]);
    iconBlock.appendChild(svg[i]);
}

for(let i = 0; i <= dValue.length; i++) {
    
}

svg[0].classList.add('bi-arrow-counterclockwise');
svg[1].classList.add('bi-code');
svg[2].classList.add('');
svg[3].classList.add('');
svg[4].classList.add('');
svg[5].classList.add('');
svg[6].classList.add('');
svg[7].classList.add('');
svg[8].classList.add('');
svg[9].classList.add('');
svg[10].classList.add('');
svg[11].classList.add('');
svg[12].classList.add('');
svg[13].classList.add('');
