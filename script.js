const editor = document.querySelector('#editor');

const svg = document.querySelectorAll('svg');
const span = document.querySelectorAll('span');
const textEditor = document.querySelector('.text-block'); 
const iconBlock = document.querySelector('.icon-block');
const dMenu = document.querySelectorAll('.d-menu');
const labels = document.querySelectorAll('label');
const linkInput = document.querySelector('.link-input');
const titleInput = document.querySelector('.title-input');
const targetInput = document.querySelector('#target-input');

// ici je le déclare pour tester la modification des couleurs
// des icons, mais normalement svg est créé par le script


// const iconBlock = document.createElement('div'); 
// const textEditor = document.createElement('div');

// iconBlock.classList.add('icon-block');
// textEditor.classList.add('text-block');
// textEditor.setAttribute('contenteditable', true);

// editor.appendChild(iconBlock);
// editor.appendChild(textEditor);

// const dValue = [
//     'M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z',
//     'M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z',
//     ''
// ];

// const svg = [];
// const path = [];

// for(let i = 0; i < 10; i++) {
//     svg[i] = document.createElement('svg');
//     svg[i].classList.add('bi');
//     svg[i].setAttribute('width', '1.5em');
//     svg[i].setAttribute('height', '1.5em');
//     svg[i].setAttribute('viewbox', '0 0 16 16');
//     svg[i].setAttribute('fill', '#000');
//     svg[i].setAttribute('xmlns', 'http://www.w3.org/2000/svg');
//     path[i] = document.createElement('path'); 
//     svg[i].appendChild(path[i]);
//     iconBlock.appendChild(svg[i]);
// }

// for(let i = 0; i <= dValue.length; i++) {
//     path[i].setAttribute('d', dValue[i]);
// }

// svg[0].classList.add('bi-arrow-counterclockwise');
// svg[1].classList.add('bi-code');
// svg[2].classList.add('');
// svg[3].classList.add('');
// svg[4].classList.add('');
// svg[5].classList.add('');
// svg[6].classList.add('');
// svg[7].classList.add('');
// svg[8].classList.add('');
// svg[9].classList.add('');
// svg[10].classList.add('');
// svg[11].classList.add('');
// svg[12].classList.add('');
// svg[13].classList.add('');





const changeText = (command, ShowDefaultUI, value) => {
    console.log(value);
    document.execCommand(command, ShowDefaultUI, value);
}

const createLink = (link, title, target, text) => {

    let htmlCode = "";
    console.log(link);
    console.log(title);
    console.log(target);
    console.log(text);

    if(title !== "" && target === true) {
        htmlCode = "<a href='" + link + "' title='" + title + "' target='_blank'>" + text + "</a>";
        console.log("title + target");
    } else if(title !== "" && target === false) {
        htmlCode = "<a href='" + link + "' title='" + title + "'>" + text + "</a>";
        console.log("title only");
    } else if(title === "" && target === true) {
        htmlCode = "<a href='" + link + "' target='_blank'>" + text + "</a>";
        console.log("target only");
    } else {
        htmlCode = "<a href='" + link + "'>" + text + "</a>";
        console.log("R");
    }

    console.log(htmlCode);
    document.execCommand('insertHTML', true, htmlCode);

}

const changeColor = (event, element) => {
    
    switch(element) {
        case 'editor': 
            editor.style.background = event.target.value;
            break; 
        case 'icons': 
            for(let icon of svg) {
                icon.setAttribute('fill', event.target.value);
            }
            for(let arrow of span) {
                arrow.style.color = event.target.value;
            }
            for(let label of labels) {
                label.style.color = event.target.value;
            }
            break;
        case 'text-block': 
            textBlock.style.background = event.target.value;
            break;
        case 'text': 
            textBlock.style.color = event.target.value;
            break;
        case 'submenu':
            for(let sub of dMenu) {
                sub.style.setProperty('--submenu-color', event.target.value);
            }
            iconBlock.style.borderBottom = "2px solid " + event.target.value;
            break;
    }

    // if(editor.style.background != textBlock.style.background) {
    //     iconBlock.style.borderBottom = "0px";
    // } else {
    //     iconBlock.style.borderBottom = "2px solid #c9c9c9";
    // }
}

const changeSelection = (element) => {

    switch(element) {
        case 'quote': 
            var range = window.getSelection().getRangeAt(0);
            var selectionContents = range.extractContents();
            var quote = document.createElement("blockquote");
            quote.appendChild(selectionContents);
            quote.classList.add('quote');
            range.insertNode(quote);
            break; 
        case 'h1':
            var range = window.getSelection().getRangeAt(0);
            var selectionContents = range.extractContents();
            var h1 = document.createElement("h1");
            h1.appendChild(selectionContents);
            range.insertNode(h1);
            break;
        case 'h2':
            var range = window.getSelection().getRangeAt(0);
            var selectionContents = range.extractContents();
            var h2 = document.createElement("h2");
            h2.appendChild(selectionContents);
            range.insertNode(h2);
            break;
        case 'h3':
            console.log(h1);
            console.log(h2);
            var range = window.getSelection().getRangeAt(0);
            var selectionContents = range.extractContents();
            var h3 = document.createElement("h3");
            h3.appendChild(selectionContents);
            range.insertNode(h3);
            break;
        
    }


}


iconBlock.style.borderBottom = "2px solid #c9c9c9";
