var numero = document.getElementById('fnum')
let lista = document.getElementById('flista')
var res = document.getElementById('res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    }else{
      return false
  }
}


function inLista(n , l){
    if(l.indexOF(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
  if(isNumero(num.value) && !inLista(num.value, valores)){
    alert('ok')
  }else{
    alert('Valor Inválido ou já encontrado na lista')
  }
}


