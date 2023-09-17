/*copy menu for mobile*/
function copy(from, into) {
    var copyFrom = document.querySelector(from);
    var pastInto = document.querySelector(into);
    pastInto.innerHTML = copyFrom.innerHTML;
}
copy('.dpt-cat', '.departements');
copy('.header-nav nav', '.off-canvas nav');
copy('.header-top .wrapper', '.off-canvas .thetop-nav');