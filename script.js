interruptor = true
interruptor1 = true
var box_OffCavas = document.getElementById('box')

function btnOffcanvas() {


    if (interruptor) {

        box_OffCavas.style.width = '30vw';
        box_OffCavas.style.display = 'block';
     
        interruptor = false


    }


    else {
        box_OffCavas.style.width = '0vw';
        box_OffCavas.style.display = 'none';
        

        interruptor = true


    }
    




}
