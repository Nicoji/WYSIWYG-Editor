const textBlock = document.querySelector('.text-block');
const dropToggleHeading = document.querySelectorAll('.drop-toggle-heading');
const dropMenuHeading = document.querySelector('.drop-menu-heading');
const dropToggleText = document.querySelectorAll('.drop-toggle-text');
const dropMenuText = document.querySelector('.drop-menu-text');
const dropToggleJustify = document.querySelectorAll('.drop-toggle-justify');
const dropMenuJustify = document.querySelector('.drop-menu-justify');

const dropdown = (menuToOpen) => {


    dropMenuHeading.style.display = "none";
    dropMenuText.style.display = "none";
    dropMenuJustify.style.display = "none";

    if(menuToOpen.classList.contains('open')) {
        menuToOpen.style.display = "none";
        menuToOpen.classList.remove('open');
        textBlock.style.paddingTop = "0px";
    } else {
        menuToOpen.style.display = "initial";
        menuToOpen.classList.add('open');
        textBlock.style.paddingTop = "50px";
    }
}

// const closeMenu = () => {

//         dropMenu.style.display = "none";
//         dropMenu.classList.remove('open');
// }

for(let toggleH of dropToggleHeading) {
    toggleH.addEventListener('click', function(){
        dropdown(dropMenuHeading);
    });
}
for(let toggleT of dropToggleText) {
    toggleT.addEventListener('click', function(){
        dropdown(dropMenuText);
    });
}
for(let toggleJ of dropToggleJustify) {
    toggleJ.addEventListener('click', function(){
        dropdown(dropMenuJustify);
    });
}

dropMenuHeading.style.display = "none";
dropMenuText.style.display = "none";
dropMenuJustify.style.display = "none";