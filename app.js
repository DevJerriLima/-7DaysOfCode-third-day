function frontEnd(){
    num = prompt("Você quer aprender React ou Vue. 1-para React 2-para Vue:");
    if (num == 1){
        const escolha = "React";
    }else if(num == 2){
        const escolha = "Vue";
    }else{
        alert("Escolha inválida.");
        
    }
    return num;
}

function backEnd(){
    num = prompt("Você quer aprender C# ou java? 1-para C# 2-para Java");
    if (num == 1){
        const escolha = "C#";
    }else if( num == 2){
        const escolha = "Java";
        alert("TEst")
    }else{
        alert("Escolha inválida.");
    }
    return num;
}


const num = prompt("Você quer segrir a área Front-End ou Back-End? 1-para Front-End 2-para Back-End");

if(num == 1){
    frontEnd();
} else if(num == 2){
    backEnd();
}else{
    alert("Escolha inválida.");
}

num = prompt(`"Você prefere continuar se especializando em ${escolha} ou seguir se estudando para se tornar Full-Stack?  1-para continuar ${escolha} 2-para Full-Stack."`);
if (num == 1){
    alert(`"Parabéns continuar com ${escolha} é uma excelente ecolha."`);
}else if(num == 2){
    alert("Parabéns, se tornar um programador Full-Stack irá abrir muitas porta para você no mercado de trabalho.");
}else{
    alert("escolha inválida.");
}



const saida = "";

while(saida =! ok){
    const tecnologias = " ";
    prompt("Tem mais alguma tecnologia que gostaria de aprender? reponda com ok ou no:");
    tecnologias + prompt(" Qual?");
    tecnologias + "; ";
    saida = tecnologias;
}


if (escolha == "React"){
    alert("React é uma biblioteca JavaScript desenvolvida pela Facebook que permite criar interfaces de usuário complexas e interativas de maneira eficiente e fácil. Ele permite aos desenvolvedores construir aplicativos web altamente escaláveis e performáticos, tornando a experiência do usuário mais fluida e agradável. Além disso, o React é amplamente utilizado por empresas de todos os tamanhos e setores, o que significa que há uma grande demanda por desenvolvedores que sabem trabalhar com ele. Se você está procurando uma maneira de aprimorar suas habilidades de desenvolvimento web e se destacar no mercado de trabalho, o React é uma escolha excelente. Inspire-se e comece a aprender hoje!");
}else if(escolha =="Vue"){
    alert("Vue.js é um framework JavaScript progressivo para criar interfaces de usuário. Ele foi criado com a premissa de ser simples e fácil de aprender, mas ainda assim poderoso o suficiente para construir aplicativos complexos. O Vue.js se concentra em oferecer uma estrutura de componentes reutilizáveis, permitindo aos desenvolvedores construir aplicativos web escaláveis e performáticos. Ele também tem uma comunidade ativa e crescente, o que significa que há uma grande quantidade de recursos e bibliotecas disponíveis para ajudar os desenvolvedores a trabalhar com o Vue.js. Se você está procurando uma alternativa fácil de aprender ao React ou Angular, o Vue.js é uma ótima escolha. Inspire-se e comece a aprender hoje!");
}else if (escolha == "C#"){
    alert("C# é uma linguagem de programação orientada a objetos desenvolvida pela Microsoft. Ele é amplamente utilizado para desenvolver aplicativos desktop, web e mobile, bem como jogos e aplicativos de realidade virtual. C# é uma linguagem de alto nível, o que significa que é fácil de ler e escrever, mas ainda possui recursos avançados para ajudar os desenvolvedores a construir aplicativos complexos. Ele também é parte da plataforma .NET, o que significa que os desenvolvedores podem aproveitar uma ampla gama de bibliotecas e ferramentas para ajudar no desenvolvimento. Se você está procurando uma linguagem de programação versátil e poderosa para desenvolver aplicativos, o C# é uma excelente escolha. Inspire-se e comece a aprender hoje!");
}else if(escolha == "Java"){
    alert("Java é uma linguagem de programação orientada a objetos amplamente utilizada para desenvolver aplicativos de vários tipos, incluindo aplicativos desktop, web, mobile, jogos e aplicativos embarcados. Ele é conhecido por sua portabilidade, o que significa que os aplicativos escritos em Java podem ser executados em várias plataformas, sem necessidade de modificações. Além disso, Java é uma linguagem de alto nível, o que significa que é fácil de ler e escrever, mas ainda possui recursos avançados para ajudar os desenvolvedores a construir aplicativos complexos. A comunidade Java é grande e ativa, o que significa que há uma grande quantidade de recursos e bibliotecas disponíveis para ajudar os desenvolvedores a trabalhar com a linguagem. Se você está procurando uma linguagem de programação popular, versátil e poderosa, o Java é uma excelente escolha. Inspire-se e comece a aprender hoje!");
}else{
    alert("Você não escolheu a linguagem. ");
}

alert("Parabéns e boa sorte no estudos das tecnologias : ", tecnologias);

