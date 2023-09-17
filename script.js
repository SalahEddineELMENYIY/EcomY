/*copy menu for mobile*/
function copy(par1, par2) {
    var param1 = document.querySelector(par1);
    var param2 = document.querySelector(par2);
    param2.innerHTML = param1.innerHTML;
}
copy('.dpt-cat', '.departements');
copy('.header-nav nav', '.off-canvas nav');
copy('.header-top', '.off-canvas .thetop-nav');