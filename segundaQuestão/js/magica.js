// dom
const calcular = document.querySelector('#btnCalcular')
const resultado = document.querySelector('#spanResultado')


// evento
calcular.addEventListener('click', ()=>
{
let peso = Number(document.querySelector('#inputPeso').value)
let altura = Number(document.querySelector('#inputAltura').value)


multiplicacao = altura*altura
media = peso/multiplicacao

//  resultado.textContent= `${media.toFixed(2)}`

if (media<18.5){

    resultado.textContent= `Sua média de peso é ${media.toFixed(2)}. O Sr(a) está na magreza.`
}else if(media> 18.5 && media< 25) 
{
    resultado.textContent= `Sua média de peso é ${media.toFixed(2)}. O Sr(a) está no peso ideal.`
}

else if(media> 25 && media< 30) 
{
    resultado.textContent= `Sua média de peso é ${media.toFixed(2)}. O Sr(a) está acima do peso.`
}
else 
{
    resultado.textContent= `Sua média de peso é ${media.toFixed(2)}. O Sr(a) está na obesidade.`
}



})