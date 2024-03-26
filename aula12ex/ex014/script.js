function carregar() {
    var msg = document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
   
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        img.src = 'ftmanha.png'
       document.body.style.background = '#feeb93'
    } else if (hora > 12 && hora <= 18) {
        img.src = 'fttarde.png'
        document.body.style.background = '#d67627'
    } else { 
       img.src = 'ftnoite.png'
        document.body.style.background = '#1a3d51'
    }
}

