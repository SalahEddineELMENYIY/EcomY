//stock products bar width percentage 
var stocks = document.querySelectorAll('.products .stock');
document.addEventListener('DOMContentLoaded', () => {
    stocks.forEach((stock) => {
        let available = parseInt(stock.querySelector('.qty-available').innerHTML),
            sold = parseInt(stock.querySelector('.qty-sold').innerHTML),
            total = sold + available,
            percent = sold * 100 / total;
        stock.querySelector('div.available').style.width = percent + "%";

    })
})
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

/*Slider Script imported*/
const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    }
});

/*Search Bottom Script*/
const searchButton = document.querySelector('.t-search');
const tClose = document.querySelector('.search-close'),
    showClass = document.querySelector('.site');
searchButton.addEventListener('click', function () {
    showClass.classList.toggle('showsearch');
})
tClose.addEventListener('click', function () {
    showClass.classList.remove('showsearch');
})

/*Show Departement Menu*/
const dptButton = document.querySelector('.dpt-cat .dpt-trigger'),
    dptClass = document.querySelector('.site');
dptButton.addEventListener('click', () => {
    dptClass.classList.toggle('showdpt');
});

/*Products Image Slider*/
var productThumb = new Swiper('.small-image', {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        481: {
            spaceBetween: 32
        }
    }
});
var productBig = new Swiper('.big-image', {
    loop: true,
    autoHeight: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: productThumb
    }
});


// show cart on click
const divToShow = '.mini-cart'
const divPopup = document.querySelector(divToShow);
const divTrigger = document.querySelector('.cart-trigger')

divTrigger.addEventListener('click', () => {
    setTimeout(() => {
        if (!divPopup.classList.contains('show')) {
            divPopup.classList.add('show')
        }
    }, 250);
})

//close byclick outside

document.addEventListener('click', (e) => {
    const isClosest = e.target.closest(divToShow)
    if (!isClosest && divPopup.classList.contains('show')) {
        divPopup.classList.remove('show');
    }
})