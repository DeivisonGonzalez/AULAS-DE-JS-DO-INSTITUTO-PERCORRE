alert ("Vamos ver seu IMC, jovem!")

let altura = prompt ('Qual sua altura?')
let peso = prompt ('Qual seu peso?')
let altura2 = altura*2
IMC = peso / altura2

if (IMC >= 18.5 && IMC <= 24.9) {
    alert (`Seu IMC é de ${IMC.toFixed(0)} é está dentro de um intervalo saudável!`)
}
else{
    alert (`Seu IMC é de ${IMC.toFixed(0)} e NÃO está dentro de um intervalo saudável!`)
}
