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




function lista(manga_name){

let artigo_escolhido = JSON.parse(localStorage.getItem('artigo_escolhido')) || [];
artigo_escolhido.push({ name: manga_name});
localStorage.setItem('artigo_escolhido', JSON.stringify(artigo_escolhido));


if (interruptor) {
    btn_salvar.style.backgroundColor = 'rgb(235, 211, 4)'
    interruptor = false
    


    
}

else  {
    btn_salvar.style.backgroundColor = '#222020'
    interruptor = true
}
}

