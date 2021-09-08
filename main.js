function verificar(){
    var data = new Data();
    var ano = data.getFullYear();
    var fano = getElementById('txtano')
    var res = querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique novamente')
    }else{
        var fsex = getElementByName('radsexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //criança
            }
            else if(idade >= 10 && idade < 21){
                //jovem
            }
            else if(idade >= 21 && idade < 50){
                //adulto
            }
            else if(idade >= 50 && idade < 90){
                //velho
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //criança
            }
            else if(idade >= 10 && idade < 21){
                //jovem
            }
            else if(idade >= 21 && idade < 50){
                //adulto
            }
            else if(idade >= 50 && idade < 90){
                //velho
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    
    }

}