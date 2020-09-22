const textBlock = document.querySelector('.text-block');
const dropToggleHeading = document.querySelector('.drop-toggle-heading');
const dropMenuHeading = document.querySelector('.drop-menu-heading');
const dropToggleText = document.querySelector('.drop-toggle-text');
const dropMenuText = document.querySelector('.drop-menu-text');
const dropToggleJustify = document.querySelector('.drop-toggle-justify');
const dropMenuJustify = document.querySelector('.drop-menu-justify');
const dropToggleLink = document.querySelector('.drop-toggle-link');
const dropMenuLink = document.querySelector('.drop-menu-link');
const dropToggleCustom = document.querySelector('.drop-toggle-custom');
const dropMenuCustom = document.querySelector('.drop-menu-custom');
const dropToggleImage = document.querySelector('.drop-toggle-image');
const dropMenuImage = document.querySelector('.drop-menu-image');
const items = document.querySelectorAll('a');

let lastOpenedMenu = "";
let lastToggle = "";

const dropdown = (menuToOpen, toggle, event) => {

    event.defaultPrevented;


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
            console.log(lastToggle);
            console.log(toggle);
            lastOpenedMenu.classList.remove('open');
            lastToggle.children[1].textContent = '▼';

            // if(lastToggle != dropToggleLink || lastToggle != dropToggleImage) {
            //     console.log("mhhhh");
            // }
        }

        lastOpenedMenu = menuToOpen;
        lastToggle = toggle;

        dropMenuHeading.style.display = "none";
        dropMenuText.style.display = "none";
        dropMenuJustify.style.display = "none";
        dropMenuCustom.style.display = "none";
        dropMenuLink.style.display = "none";
        dropMenuImage.style.display = "none";


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
    dropdown(dropMenuHeading, dropToggleHeading, event);
});
dropToggleText.addEventListener('click', function(){
    dropdown(dropMenuText, dropToggleText, event);
});
dropToggleJustify.addEventListener('click', function(){
    dropdown(dropMenuJustify, dropToggleJustify, event);
});
dropToggleCustom.addEventListener('click', function(){
    dropdown(dropMenuCustom, dropToggleCustom, event);
});
dropToggleLink.addEventListener('click', function(){
    dropdown(dropMenuLink, dropToggleLink, event);
});
dropToggleImage.addEventListener('click', function(){
    dropdown(dropMenuImage, dropToggleImage, event);
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
dropMenuLink.style.display = "none";
dropMenuImage.style.display = "none";


