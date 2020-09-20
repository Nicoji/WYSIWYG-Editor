const textBlock = document.querySelector('.text-block');
const dropToggleHeading = document.querySelector('.drop-toggle-heading');
const dropMenuHeading = document.querySelector('.drop-menu-heading');
const dropToggleText = document.querySelector('.drop-toggle-text');
const dropMenuText = document.querySelector('.drop-menu-text');
const dropToggleJustify = document.querySelector('.drop-toggle-justify');
const dropMenuJustify = document.querySelector('.drop-menu-justify');
const dropToggleCustom = document.querySelector('.drop-toggle-custom');
const dropMenuCustom = document.querySelector('.drop-menu-custom');
const items = document.querySelectorAll('a');

let lastOpenedMenu = "";
let lastToggle = "";

const dropdown = (menuToOpen, toggle, Event) => {

    Event.defaultPrevented;

    console.log(window.getSelection().toString());

    if(menuToOpen == "a") {
        if(lastOpenedMenu != "") {
            lastOpenedMenu.style.display = "none";
            lastOpenedMenu.classList.remove('open');
            textBlock.style.paddingTop = "10px";
            lastToggle.children[1].textContent = '▼';
            lastOpenedMenu = "";
            lastToggle = "";
        }

    } else {

        if(lastToggle != toggle && lastToggle != "") {
            lastToggle.children[1].textContent = '▼';
            lastOpenedMenu.classList.remove('open');
        }

        lastOpenedMenu = menuToOpen;
        lastToggle = toggle;

        dropMenuHeading.style.display = "none";
        dropMenuText.style.display = "none";
        dropMenuJustify.style.display = "none";
        dropMenuCustom.style.display = "none";

        if(menuToOpen.classList.contains('open')) {
            menuToOpen.style.display = "none";
            menuToOpen.classList.remove('open');
            toggle.children[1].textContent = '▼';
            textBlock.style.paddingTop = "10px";
        } else {
            menuToOpen.style.display = "initial";
            menuToOpen.classList.add('open');
            toggle.children[1].textContent = '▲';
            if(menuToOpen.classList.contains('drop-menu-custom') && window.innerWidth <= 863) {
                textBlock.style.paddingTop = "85px";
            } else {
                textBlock.style.paddingTop = "50px";
            }
        }
    }
}
    
setInterval(function() {
    if(dropMenuCustom.classList.contains('open') && window.innerWidth <= 863) {
        textBlock.style.paddingTop = "85px";
    } 
    if(dropMenuCustom.classList.contains('open') && window.innerWidth > 863) {
        textBlock.style.paddingTop = "50px";
    } 
}, 10);

// const closeMenu = () => {

//         dropMenu.style.display = "none";
//         dropMenu.classList.remove('open');
// }

// for(let toggleH of dropToggleHeading) {
//     toggleH.addEventListener('click', function(){
//         dropdown(dropMenuHeading, dropToggleHeading);
//     });
// }
// for(let toggleT of dropToggleText) {
//     toggleT.addEventListener('click', function(){
//         dropdown(dropMenuText, dropToggleText);
//     });
// }
// for(let toggleJ of dropToggleJustify) {
//     toggleJ.addEventListener('click', function(){
//         dropdown(dropMenuJustify, dropToggleJustify);
//     });
// }
// for(let toggleC of dropToggleCustom) {
//     toggleC.addEventListener('click', function(){
//         dropdown(dropMenuCustom, dropToggleCustom);
//     });
// }
dropToggleHeading.addEventListener('click', function(){
    dropdown(dropMenuHeading, dropToggleHeading, Event);
});
dropToggleText.addEventListener('click', function(){
    dropdown(dropMenuText, dropToggleText);
});
dropToggleJustify.addEventListener('click', function(){
    dropdown(dropMenuJustify, dropToggleJustify);
});
dropToggleCustom.addEventListener('click', function(){
    dropdown(dropMenuCustom, dropToggleCustom);
});

for (let item of items) {
    item.addEventListener('click', function(){
        dropdown('a');
    });
}

dropMenuHeading.style.display = "none";
dropMenuText.style.display = "none";
dropMenuJustify.style.display = "none";
dropMenuCustom.style.display = "none";


