var btn_salvar = document.getElementById('btn_salvar')
var interruptor = true
var interruptor1 = true


function btn_salvar_coloca(){


    btn_salvar.style.backgroundColor = 'rgb(235, 211, 4)'


}
function btn_salva_Tira(){

if(interruptor){

    btn_salvar.style.backgroundColor = '#222020'
 

}
}


function clicar(){
    
    if (interruptor) {
        btn_salvar.style.backgroundColor = 'rgb(235, 211, 4)'
        interruptor = false
        
    }
  
    else  {
        btn_salvar.style.backgroundColor = '#222020'
        interruptor = true
    }

}

