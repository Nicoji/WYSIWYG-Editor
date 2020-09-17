const textBlock = document.querySelector('.text-block');
const dropToggleHeading = document.querySelectorAll('.drop-toggle-heading');
const dropMenuHeading = document.querySelector('.drop-menu-heading');
const dropToggleText = document.querySelectorAll('.drop-toggle-text');
const dropMenuText = document.querySelector('.drop-menu-text');
const dropToggleJustify = document.querySelectorAll('.drop-toggle-justify');
const dropMenuJustify = document.querySelector('.drop-menu-justify');
const items = document.querySelectorAll('a');

let lastOpenedMenu = "";
let lastToggle = "";

const dropdown = (menuToOpen, toggle) => {

    if(menuToOpen == "a") {
        if(lastOpenedMenu != "") {
            lastOpenedMenu.style.display = "none";
            lastOpenedMenu.classList.remove('open');
            textBlock.style.paddingTop = "10px";
            lastToggle[0].children[1].textContent = '▼';
            lastOpenedMenu = "";
            lastToggle = "";
        }

    } else {

        if(lastToggle != toggle && lastToggle != "") {
            lastToggle[0].children[1].textContent = '▼';
        }

        lastOpenedMenu = menuToOpen;
        lastToggle = toggle;

        dropMenuHeading.style.display = "none";
        dropMenuText.style.display = "none";
        dropMenuJustify.style.display = "none";

        if(menuToOpen.classList.contains('open')) {
            menuToOpen.style.display = "none";
            menuToOpen.classList.remove('open');
            toggle[0].children[1].textContent = '▼';
            textBlock.style.paddingTop = "10px";
        } else {
            menuToOpen.style.display = "initial";
            menuToOpen.classList.add('open');
            toggle[0].children[1].textContent = '▲';
            textBlock.style.paddingTop = "50px";
        }
    }
}
	
// const closeMenu = () => {

//         dropMenu.style.display = "none";
//         dropMenu.classList.remove('open');
// }

for(let toggleH of dropToggleHeading) {
    toggleH.addEventListener('click', function(){
        dropdown(dropMenuHeading, dropToggleHeading);
    });
}
for(let toggleT of dropToggleText) {
    toggleT.addEventListener('click', function(){
        dropdown(dropMenuText, dropToggleText);
    });
}
for(let toggleJ of dropToggleJustify) {
    toggleJ.addEventListener('click', function(){
        dropdown(dropMenuJustify, dropToggleJustify);
    });
}
for (let item of items) {
    item.addEventListener('click', function(){
        dropdown('a');
    });
}

dropMenuHeading.style.display = "none";
dropMenuText.style.display = "none";
dropMenuJustify.style.display = "none";