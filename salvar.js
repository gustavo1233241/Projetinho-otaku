var btn_salvar = document.getElementById('btn_salvar')
var interruptor = true
btn_salvar.addEventListener('click', () => {

    if (interruptor) {
        btn_salvar.style.backgroundColor = 'rgb(235, 211, 4)'
        interruptor = false
    }

    else  {
        btn_salvar.style.backgroundColor = '#222020'
        interruptor = true
    }
})

function btn_salvar_coloca(){


        btn_salvar.style.backgroundColor = 'rgb(235, 211, 4)'
        
    
}
function btn_salva_Tira(){

  
        btn_salvar.style.backgroundColor = '#222020'
      
    

 

}