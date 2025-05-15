
const calcular = document.getElementById('calcular');


function imc(){
    const nome = document.getElementById('nome').value;
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const resultado = document.getElementById('resultado');

    
    if(altura <= 0 || peso<=0 ){
        alert(resultado.textContent='Por favor, preencha altura e/ou peso com valores válidos!');
        return;
    }
    

    if(nome !== '' && altura !== '' && peso!==''){
        const valorIMC= parseFloat((peso/(altura * altura)).toFixed(2));
        
        let classificacao="";

        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso.';
        }else if(valorIMC< 25){
            classificacao = 'com o peso ideal.';
        }else if(valorIMC < 30){
            classificacao = 'levemente acima do peso';
        }else if(valorIMC < 35){
            classificacao = ' com obesidade grau I';
        }else if(valorImc < 40){
            classificacao = 'com obesidade grau II';
        }else{
            classificacao = 'com obesidade grau III';
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`
    }else{
        resultado.textContent= 'Preencha todos os campos!'
    }
}
calcular.addEventListener('click',imc);