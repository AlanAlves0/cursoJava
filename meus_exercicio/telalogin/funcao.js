function login(){
    var text1 = document.getElementById("txt1")
    var txt2 = document.getElementById("sen")
    var res = document.getElementById("res")

    var texto = text1.value
    var sen = txt2.value
    
    res.innerHTML = `O seu usuario é ${texto} e a sua senha é ${sen}`
    confirm('Os dados estão corretos?')
}