function tabuada(){
    var numero = document.getElementById('numero')
    var res = document.getElementById('res')
    


    if(numero.value.length == 0){
        alert('Por favor digite um número')
    }else{
        res.innerHTML = ''
        var n = Number(numero.value)
        for(var c = 1; c <=10; c++){
            res.innerHTML += `${n} x ${c} = ${n*c} <br>`
        }
    }
}