const area = prompt("Você quer segrir a área Front-End ou Back-End? Digite o nome da área:");
let linguagem = "";

if(area == "Front-End"){
    linguagem = prompt("Você quer aprender React ou Vue?");
} else if(area == "Back-End"){
    linguagem = prompt("Você quer aprender C# ou Java?");
}else{
    alert("Escolha inválida.");
}



const especialidade = prompt(`Você prefere continuar se especializando em ${linguagem} escolhida ou seguir se estudando para se tornar Full-Stack?  1-para continuar em ${linguagem}. 2-para Full-Stack.`);
if (especialidade == 1){
    alert(`"Parabéns. Continuar com ${linguagem} é uma excelente ecolha."`);
}else if(especialidade == 2){
    alert("Parabéns, se tornar um programador Full-Stack irá abrir muitas porta para você no mercado de trabalho.");
}else{
    alert("escolha inválida.");
}

let mensagem = prompt("Tem mais alguma tecnologia que você pretende aprender? Digite ok, caso tenha.");
while(mensagem === "ok"){
    let novaTecnologia = prompt("Qual?");
    alert(`${novaTecnologia} é realmente uma tecnologia muito interessante.`);
    mensagem = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite ok, caso tenha.");
}