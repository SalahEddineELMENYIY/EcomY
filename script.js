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
}
)
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

<<<<<<< HEAD
/*Show Departement Menu*/
const dptButton = document.querySelector('.dpt-cat .dpt-trigger'),
    dptClass = document.querySelector('.site');
dptButton.addEventListener('click', () => {
    dptClass.classList.toggle('showdpt');
});

/*Products Image Slider*/
=======
//show dpt menu

const dptButton = document.querySelector('.dpt-cat .dpt-trigger'),
    dptClass = document.querySelector('.site');
dptButton.addEventListener('click', function () {
    dptClass.classList.toggle('showdpt')
})

///product image slider 
>>>>>>> b47e3d82c8a9939115f1c98e3ffaa405fb83ab43
var productThumb = new Swiper('.small-image', {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3,
<<<<<<< HEAD
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
=======
    freemode: true,
    watchSlidesProgress: true,
    breakpoints: {
        481: {
            spaceBetween: 32,
        }
    }
});

var productBig = new Swiper ('.big-image', {
    loop:true,
    autoHeight:true,
>>>>>>> b47e3d82c8a9939115f1c98e3ffaa405fb83ab43
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
<<<<<<< HEAD
        swiper: productThumb
    }
});
=======
        swiper: productThumb,    
    }
})















>>>>>>> b47e3d82c8a9939115f1c98e3ffaa405fb83ab43
