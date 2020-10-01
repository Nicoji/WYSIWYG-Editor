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
const srcInput = document.querySelector('.src-input');
const altInput = document.querySelector('.alt-input');
const alignInput = document.querySelector('#align-input');
const fileInput = document.querySelector('#file');
const hilite = document.querySelector('.hilite');
const sizeBar = document.querySelector('.size-bar');
const highlight = document.querySelector('.highlighter');
const highlightInput = document.querySelector('#highlight');

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
    document.execCommand(command, ShowDefaultUI, value);
    if(command == 'hiliteColor') {
        highlight.style.display = "none";
    }
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
    console.log(textBlock);
}

const createImage = (source, alt, align) => {
    let htmlCode = "";
    // let src = "";
    // console.log(file);
    // console.log(source);
    // console.log(alt);
    // console.log(align);
    // console.log(file.src);

    // if(file != "" && source != "") {
    //     src = file;
    // } else if(source == "" && file != "") {
    //     src = file;
    // } else {
    //     src = source;
    // }

    if(alt == "") {
        switch(align) {
            case "center":
                htmlCode = "<img class='img align-center' src='" + source + "'>";
                break;
            case "left":
                htmlCode = "<img class='img align-left' src='" + source + "'>";
                break;
            case "right": 
                htmlCode = "<img class='img align-right' src='" + source + "'>";
                break;
        }
    } else {
        switch(align) {
            case "center":
                htmlCode = "<img class='img align-center' src='" + source + "' alt='" + alt + "'>";
                break;
            case "left":
                htmlCode = "<img class='img align-left' src='" + source + "' alt='" + alt + "'>";
                break;
            case "right": 
                htmlCode = "<img class='img align-right' src='" + source + "' alt='" + alt + "'>";
                break;
        }
    }
    document.execCommand('insertHTML', true, htmlCode);
    srcInput.value = ""; 
    altInput.value = "";
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
            sizeBar.style.setProperty('--submenu-color', event.target.value);
            break;
    }
}

let quote = document.createElement("blockquote");

// const removeFormat = (text, node) => {
//     console.log(node);
//     if('newSpan' in window) {
//         if(node.parentNode.classList.contains('remove-format')) {
//             node.parentNode.replaceWith(newSpan);
//             newSpan.textContent = text;
//             node.parentNode.removeChild(node);

//             // node.replaceWith(newSpan);

//             console.log(2);
//         } else {
//             console.log(3);
//         }
//     } else {
//         newSpan = document.createElement("span");
//             newSpan.classList.add('remove-format');
//             newSpan.textContent = text;
//             node.replaceWith(newSpan);
//             console.log(1);
//     }       
// }

const removeFormat = (text, node) => {
   $(node).contents().unwrap();
   console.log(textEditor.childNodes);
//    $(node).parents().contents().unwrap();
// for (let i = 0; i < $(node).parents().length; i++) {
// //     // console.log($(node).parents()[2].classList.value);
// //    console.log(i);
//     if($(node).parents()[i].classList.value == 'text-block') {
// //         // i = $(node).parents().length;
//         console.log('ok');

// //         textEditor.textContent = text;
//     } else {
//         console.log($(node).parents());
//         console.log($(node).parents().length);
//         $(node).parents()[i].remove();
//         textEditor.textContent = text;

//     }
// }
// // console.log($(node).parents());
}

// const changeSelection = (element) => {

//     switch(element) {
//         case 'quote': 
//             // console.log(quote.childNodes);
//             var range = window.getSelection().getRangeAt(0);
//             var selectionContents = range.extractContents();

//             // Selection isn't a quote, so we make it
//             if(quote.childNodes.length == 0) {
                
//                 quote.appendChild(selectionContents);
//                 quote.classList.add('quote');
//                 range.insertNode(quote);

//                 // if(range.endOffset > 1) {
//                 //     range.insertNode(quote);
//                 // }

//                 // console.log(quote);
//                 // console.log(range.endOffset);
//                 // console.log(selectionContents);

//                 if(textBlock.childNodes[1] && textBlock.childNodes[1].classList.contains('deleted-quote')) {
//                     newSpan.replaceWith(quote);
//                     window.getSelection().removeAllRanges();
//                 } 

//                 // If the quote we made isn't in the textbox, we directly delete it, else we unselect the text (can create a bug)
//                 // if(quote.parentElement) {
//                     if(quote.parentElement.classList.contains('text-block')) {
//                         window.getSelection().removeAllRanges();
//                         console.log('bien');
//                     } else {
//                         quote.parentNode.removeChild(quote);
//                     }
                    
//             // Selection is already a quote, so we change the quote tag by a span 
//             } else {
//                 newSpan = document.createElement("span");
//                 newSpan.classList.add('deleted-quote')
//                 quote.replaceWith(newSpan);
//                 newSpan.appendChild(selectionContents);
//                 quote = document.createElement("blockquote");
//             }

//             //  if(!quote.parentNode) {
//             //     console.log(quote.parentNode);

//             //     quote.appendChild(selectionContents);
//             //     quote.classList.add('quote');
//             //     range.insertNode(quote);
//             // } else {
//             //     // quote.parentNode.removeChild(quote);
//             //     console.log('mh');
//             // }
//             break; 
//         case 'h1':
//             var range = window.getSelection().getRangeAt(0);
//             var selectionContents = range.extractContents();
//             var h1 = document.createElement("h1");
//             h1.appendChild(selectionContents);
//             range.insertNode(h1);
//             break;
//         case 'h2':
//             var range = window.getSelection().getRangeAt(0);
//             var selectionContents = range.extractContents();
//             var h2 = document.createElement("h2");
//             h2.appendChild(selectionContents);
//             range.insertNode(h2);
//             break;
//         case 'h3':
//             console.log(h1);
//             console.log(h2);
//             var range = window.getSelection().getRangeAt(0);
//             var selectionContents = range.extractContents();
//             var h3 = document.createElement("h3");
//             h3.appendChild(selectionContents);
//             range.insertNode(h3);
//             break;
//     }
// }

const resize = (e) => {
    if(textBlock.clientHeight > 100) {
        textBlock.style.height = e.pageY + 'px';
    } 
}

const stopResize = () => {
    window.removeEventListener('mousemove', resize);
}

sizeBar.addEventListener('mousedown', function(e) {
    window.addEventListener('mousemove', resize);
    window.addEventListener('mouseup', stopResize);
}); 

iconBlock.style.borderBottom = "2px solid #c9c9c9";

const codeView = () => {
    // textBlock.textContent = textBlock.outerHTML;
    console.log(textBlock.selectionStart);
    textBlock.style.border = "4px solid red";
}

