const num = prompt("Você quer segrir a área Front-End ou Back-End? 1-para Front-End 2-para Back-End");

if(num == 1){
    frontEnd();
} else if(num == 2){
    backEnd();
}else{
    alert("Escolha inválida.");
}

num = prompt(`"Você prefere continuar se especializando em ${escolha} ou seguir se estudando para se tornar Full-Stack?  1-para continuar ${escolha} 2-para Full-Stack."`);



/*
if (escolha == "React"){
    alert("React é uma biblioteca JavaScript desenvolvida pela Facebook que permite criar interfaces de usuário complexas e interativas de maneira eficiente e fácil. Ele permite aos desenvolvedores construir aplicativos web altamente escaláveis e performáticos, tornando a experiência do usuário mais fluida e agradável. Além disso, o React é amplamente utilizado por empresas de todos os tamanhos e setores, o que significa que há uma grande demanda por desenvolvedores que sabem trabalhar com ele. Se você está procurando uma maneira de aprimorar suas habilidades de desenvolvimento web e se destacar no mercado de trabalho, o React é uma escolha excelente. Inspire-se e comece a aprender hoje!");
}else if(escolha =="Java"){
    alert
}
*/
function frontEnd(){
    num = prompt("Você quer aprender React ou Vue. 1-para React 2-para Vue:");
    if (num == 1){
        const escolha = "React";
    }else if(num == 2){
        const escolha = "Vue";
    }else{
        alert("Escolha inválida.");
    }
}

function backEnd(){
    num = prompt("Você quer aprender C# ou java? 1-para C# 2-para Java");
    if (num == 2){
        const escolha = "Java";
    }
}

