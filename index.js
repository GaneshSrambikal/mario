window.onscroll = function () { onScrollStick() };

// get ref to subnavs
const subnav = document.getElementById('subnavs')

// offset position of subnavs
const sticky = subnav.offsetTop;
console.log(sticky)

function onScrollStick() {
    console.log(window.pageYOffset, sticky)
    if (window.pageYOffset > 750) {
        subnav.classList.add('sticky');
        console.log('stickey added')
    } else {
        subnav.classList.remove('sticky');
        console.log('stickey removed')
    }
}