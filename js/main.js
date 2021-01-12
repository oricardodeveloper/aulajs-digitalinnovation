/*

-- AULA 1 --

var nome = "Ricardo Silva";
var n1 = 20;
var n2 = 10;
var frase = "Japão é o melhor time do mundo"

alert(nome + " tem " + idade + " anos!");
alert(idade + idade2);

console.log(nome);
console.log(n1 * n2);
console.log(frase.replace("Japão", "Brasil"));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());

*/

/*

-- AULA 2 --


var lista = ["maça","perâ","laranja"];

lista.push("uva"); adiciona um item na lista
lista.pop(); retira um item na lista


console.log(lista.length); //length = quantidade de itens na lista
console.log(lista.reverse()); //reverse = deixa os itens na lista ao contrario
console.log(lista.toString()); //toString = transforma os itens em strings
console.log(lista.join("  ")); // join = com esse comando voce consegue substituir a virgula por outra coisa

var fruta = {nome: "maça", cor: "vermelha"}
console.log(fruta.nome);
alert(fruta.cor);

var fruta = [{nome: "maça", cor: "vermelha"}, {nome: "uva", cor: "roxa"}];
console.log(fruta);
alert(fruta[1].nome);

*/

/*

-- AULA 3 --

//var idade = 18;
var idade = prompt("Qual sua idade? ");

if (idade >= 18){
    alert("maior de idade");
} else {
    alert("menor de idade");
}


var count = 0;

while ( count <= 10){
    console.log(count);
    //count = count + 1;
    count++;
};


var count;

for(count = 0; count <= 5; count++){
    alert(count);
};

var d = new Date();
console.log(d);
console.log(d.getMonth()+1);
console.log(d.getDay());
console.log(d.getMinutes());
console.log(d.getHours());

*/

/* AULA 5

function soma(n1, n2){
    return n1 + n2;
}

function setReplace(){
    return frase.replace(nome, novo_nome)
};

alert(soma(5, 10));
alert(setReplace("Vai Japão","Japão","Brasil"));

function validarIdade(idade){
    var validar;

    if(idade >= 18){
        validar = true
    } else {
        validar = false
    }
    return validar;
}

var idade = prompt("Qual a sua idade?");
console.log(validarIdade(idade));

*/

/*

AULA 6

function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
    //alert("Obrigado por clicar :)");
}

function redirecionar(){
    //window.open("engmenergia.com.br");
    window.location.href = "https://engmenergia.com.br";
}

*/

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}