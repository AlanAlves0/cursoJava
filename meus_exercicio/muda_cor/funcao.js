function mudarcor(){
    var menssagem = document.getElementById('mensa')
    var fotos = window.document.getElementById('foto')
    var hora = new Date()
    var agora = hora.getHours()


   menssagem.innerHTML = `Agora são ${agora} horas `

   if(agora > 0 && agora < 12){
    fotos.src = 'ftmanha.png'
    document.body.style.background = 'green'
   } else if (agora > 12 && agora <=18){
    fotos.src = 'fttarde.png'
    document.body.style.background = 'yellow'
   }else {
    fotos.src = 'ftnoite.png'
    document.body.style.background = 'blue'
   }



}