var input_manga = document.getElementById('pesquisa')

var tbate = 'tbate.html'
var magic = 'magic.html'
var mercenary = 'mercenary.html'
var ominicient = 'ominicient.html'
var eleceed = 'eleceed.html'

function btn_pesquisa() {
   
//    tbate script
    var inputValue = input_manga.value.trim();
    if (inputValue == 'the Beginning After The End') {
        window.location.href = tbate
    }

//    magic emperior script
 
    if (inputValue == 'magic emperior') {
        window.location.href = magic
    }
//    mercenary script
   
    if (inputValue == 'mercenary enrollment') {
        window.location.href = mercenary


    }

//    onmicient script
 
    if (inputValue == 'ominiscient Reader`s Viewpoint') {


        window.location.href = ominicient


    }


    if (inputValue == 'eleceed') {
        window.location.href = eleceed


    }


    if(inputValue == ''){

        alert('Escreva algo animal')

    }

}


input_manga.addEventListener('keypress', function (event) {
    var key = event.key || event.keyCode;
    var inputValue = input_manga.value.trim();
    if ((inputValue === 'the Beginning After The End') && (key === 'Enter' || key === 13)) {
        window.location.href = tbate;
    }

    if ((inputValue === 'magic emperior') && (key === 'Enter' || key === 13)) {
        window.location.href = magic;
    }

    if ((inputValue === 'mercenary enrollment') && (key === 'Enter' || key === 13)) {
        window.location.href = mercenary;
    }

    if ((inputValue === 'ominiscient Reader`s Viewpoint') && (key === 'Enter' || key === 13)) {
        window.location.href = ominicient;
    }

    if ((inputValue === 'eleceed') && (key === 'Enter' || key === 13)) {
        window.location.href = eleceed;
    }
    if ((inputValue === '') && (key === 'Enter' || key === 13)) {
        
        alert('Escreva algo animal')
    }
})







