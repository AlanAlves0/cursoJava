function contador(){
    var inicio = document.getElementById('txtnumber')
    var fim = document.getElementById('txtnumber2')
    var passo = document.getElementById('txtnumber3')
    var res = document.getElementById('res')

    

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
        res.innerHTML = `Impossível contar`
        alert(`Prencha todos os campos`)
    }else{
        res.innerHTML += `Contando: ... <br>`
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if(p <= 0){
            alert(`Impossível contar, mudando para PASSO 1`)
            p = 1
        }
        if(i < f){
            for(c= i; c <= f; c +=p){
                res.innerHTML += ` ${c} `
            }
        }else {
            for(c = i; c >= f; c-=p){
            res.innerHTML += ` ${c} `
            }
        }
    }


}