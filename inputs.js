var input_manga = document.getElementById('pesquisa')

var tbate = 'tbate.html'
var magic = 'magic.html'
var mercenary = 'mercenary.html'

function btn_pesquisa() {
   
//    tbate script
    var inputValue = input_manga.value.trim();
    if (inputValue = 'tbate') {


        window.location.href = tbate


    }

//    magic emperior script
   
    var inputValue = input_manga.value.trim();
    if (inputValue = 'emperior') {


        window.location.href = tbate


    }
//    mercenary script
 


    var inputValue = input_manga.value.trim();
    if (inputValue = 'mercenary') {


        window.location.href = mercenary


    }

}


input_manga.addEventListener('keypress', function (event) {
    var key = event.key || event.keyCode;
    var inputValue = input_manga.value.trim();
    if ((inputValue === 'tbate') && (key === 'Enter' || key === 13)) {
        window.location.href = tbate;
    }

    if ((inputValue === 'emperior') && (key === 'Enter' || key === 13)) {
        window.location.href = magic;
    }

    if ((inputValue === 'mercenary') && (key === 'Enter' || key === 13)) {
        window.location.href = mercenary;
    }
})







