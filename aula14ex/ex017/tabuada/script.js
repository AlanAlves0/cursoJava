function tabuada (){
    var numero = document.getElementById('txtnumero')
    var tab = document.getElementById('seltab')
    

    if (numero.value.length == 0){
        alert('Por favor, digite um número')
        
    }else{
        var t = Number(numero.value)
        let c= 1
        tab.innerHTML = ''
        while( c<=10 ){
            let item = document.createElement('option')
            item.text = `${t} x ${c} = ${t*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
   
    
}