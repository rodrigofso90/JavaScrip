function google(){
   //window.open("https://www.google.com/")
   window.location.href = "https://www.google.com/"
    //console.log("document.getElementById("agradecimento")");
    //alert("Obrigado por Clicar!");
}

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por Clicar</b>"
    //console.log("document.getElementById("agradecimento")");
    //alert("Obrigado por Clicar!");
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar Texto")

}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o ouse aqui.";
    elemento.innerHTML = "Passe o mouse aqui."
}

function load(){
    alert("Pagina Carregada!");

}

function funcaoChange(elemento){
    console.log(elemento.value);

}
/*function soma(n1, n2){
    return n1 + n2;
}*/
/*
function validaIdade(idade){
    var validar;
    if(idade >=18){
        validar = true;
        alert("Maior de Idade!")
    }
    else{
        validar = false;
        alert("Menor de idade!")
    }
    return validar;
}
var idade = prompt("qual sua idade?");
console.log(validaIdade(idade));
    */
//alert(soma(5, 10));


/*
var data = new Date();
alert(data.getMonth()+1);
alert(data.getDate());
alert(data.getFullYear());
alert(data.getSeconds());
alert(data.getMinutes());
alert(data.getHours());
*/

/*
var count ;
for (count=0;count<=5; count++){
    alert(count);
};
*/

/*
var count = 0;
while(count<=10){
    console.log(count);
    alert(count);
    count++;
}
*/

/*
var idade = prompt("Qual sua idade");
if(idade >= 18){
    alert("Maior de idade");

}
else{
    alert("menor de idade");

};
*/

/*
var frutas = [{nome:"Maçã", cor:"Vermelha"},{nome:"Uva", cor:"Roxa"},{nome:"Mixirica", cor:"Laranja"}]
console.log(frutas[2].nome);
alert(frutas[1].cor);*/

/*var fruta = {nome:"Maçã", cor:"Vermelha"}
console.log(fruta.nome);
alert(fruta.cor);*/

//var lista = ["maçã","Pera","Laranja"];
//lista.push("uva");
//lista.pop();

//console.log(lista);
//console.log(lista.toString()[0]);
//console.log(lista.join(" - "));

//alert(lista[1]);

/*
var nome = "Rodrigo Ferreira"
var idade = 30;
var idade2 = 10;
var frase = "Japão é a melhor seleção do mundo";

//alert("Me chamo " + nome + " e tenho " + idade + " anos");

console.log(idade + idade2);
//console.log(frase.toLowerCase());
//alert(frase.replace("Japão", "Brasil"));
*/