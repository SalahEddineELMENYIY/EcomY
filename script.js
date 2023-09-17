/*copy menu for mobile*/
function copy(from, into) {
    var copyFrom = document.querySelector(from);
    var pastInto = document.querySelector(into);
    pastInto.innerHTML = copyFrom.innerHTML;
}
copy('.dpt-cat', '.departements');
copy('.header-nav nav', '.off-canvas nav');
copy('.header-top .wrapper', '.off-canvas .thetop-nav');

/*show sub menu on mobile*/
const subMenu = document.querySelectorAll('.has-child .icon-small');
subMenu.forEach((menu) => menu.addEventListener('click', toggle));
function toggle(e) {
    e.preventDefault();
    subMenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('expand') : null);
    if (this.closest('.has-child').classList != 'expand');
    this.closest('.has-child').classList.toggle('expand');
}

/*show mobile menu*/
const menuButton = document.querySelector('.trigger'),
    closeButton = document.querySelector('.t-close'),
    addClass = document.querySelector('.site');
menuButton.addEventListener('click', function () {
    addClass.classList.toggle('showmenu');
})
closeButton.addEventListener('click', function () {
    addClass.classList.remove('showmenu');
})
