var btn = document.getElementById('filterbtn');
var filteritems = document.getElementsByClassName('filterallitems');
var close = document.getElementById('closer');

bnt.onclick = function () {
    filteritems.style.display = "block"
}

close.onclick = function (){
    filteritems.style.display = "none"
}