function contar(){
    var ini = document.getElementById('numero1')
    var fim = document.getElementById('numero2')
    var passo = document.getElementById('numero3')
    let res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = `Impossível contar!`
        alert('[Erro] Faltam dados')
        
    }else{
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            alert(`Passo inválido! Considerando PASSO 1`)
            p = 1
        }
        if(i < f){
            //contagem crescente
            for(let c = i; c <= f; c +=p ){
                res.innerHTML += ` ${c} \u{1f449}`
            } 
           
        } else{
            //contagem regressiva
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1f449} ` 
        }
       
    }
       res.innerHTML +=`\u{1f3c1}`
    

    }
}