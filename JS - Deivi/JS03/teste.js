let curso = 'Instituto Percorre'
let nome = 'Deivison Gonzalez'

console.log(curso.charAt(4)); //acesso a caracteres
console.log(nome.length); //valor numerico da variável
console.log(typeof curso); //tipo de dado
console.log(curso.toUpperCase()); //deixa o texto em MAIÚSCULO
console.log(curso.toLowerCase()); //DEIXA O TEXTO EM minúsculo
console.log(curso.substring(13,18)); //pega uma parte do caractere, de acordo com o valor da posição que deseja pegar

let novo_nome = nome.split('e')
console.log(novo_nome);

let nome2 = nome.replace('Gonzalez', 'Castro')
console.log(nome);
console.log(nome2);
