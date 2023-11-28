
var Nrandom = 0 
var victory = 0
var victory2 = 0
var tabuada1 = [0,1,2,3,4,5,6,7,8,9,10]
var tabuada2 = [0,2,3,4,6,8,10,12,14,16,18,20]
var tabuada3 = [0,3,6,9,12,15,18,21,24,27,30]
var tabuada4 = [0,4,8,12,16,20,24,28,32,36,40]
var tabuada5 = [0,5,10,15,20,25,30,35,40,45,50]
var tabuada6 = [0,6,12,18,24,30,36,42,48,54,60]
var tabuada7 = [7,14,21,28,35,42,49,56,63,70]
var tabuada8 = [8,16,24,32,40,48,56,64,72,80]
var tabuada9 = [9,18,27,36,45,54,63,72,81,90]
var tabuada10 = [10,20,30,40,50,60,70,80,90,100]

var caixa1 = 0
var caixa2 = 0
var caixa3 = 0
var caixa4 = 0
var caixa5 = 0
var caixa6 = 0
var caixa7 = 0
var caixa8 = 0
var caixa9 = 0
var caixa10 = 0


function contas() {
    var numero = document.getElementById("id_Numero").value
    var numero2 = parseInt(numero)

    if (numero == ""){
        return alert("Digite Um Número")
    }

    var img = document.getElementById("img_1")
    var img1 = document.getElementById("img_2")  
    var img2 = document.getElementById("img_3")  
    var img3 = document.getElementById("img_4")  
    var img4 = document.getElementById("img_5")  
    
    img.setAttribute("src","./assets/fundo.png")
    img1.setAttribute("src","./assets/fundo.png")
    img2.setAttribute("src","./assets/fundo.png")
    img3.setAttribute("src","./assets/fundo.png")
    img4.setAttribute("src","./assets/fundo.png")

    img.setAttribute("src","./assets/tabuada1.jpg")

    if(numero2 == 69){
        img.setAttribute("src","./assets/meme.gif")
    }

    if (numero2 % 2 == 0){
        img1.setAttribute("src","./assets/tabuada2.jpg")
    }

    if (numero2 % 3 == 0){
        img2.setAttribute("src","./assets/tabuada3.jpg")
        if (numero2 == 69){
            img2.setAttribute("src","./assets/meme.gif")
        }
    }

    if (numero2 % 4 == 0){
        img3.setAttribute("src","./assets/tabuada4.jpg")
    }

    if (numero2 % 5 == 0){
        img4.setAttribute("src","./assets/tabuada5.jpg")
    }
}

function aleatorio() {
    Nrandom = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    var Caixa = document.getElementById("CaixaNumero")
    Caixa.innerHTML = Nrandom
    alert(valor)
    
    
}

function alets(){

    victory = 0
    victory2 = 0

    if (document.getElementById("CaixaTabuada1").checked){
        caixa1 = 1
    }else{caixa1 = 0}

    if (document.getElementById("CaixaTabuada2").checked){
        caixa2 = 1
    }else{caixa2 = 0}

    if (document.getElementById("CaixaTabuada3").checked){
        caixa3 = 1
    }else{caixa3 = 0}

    if (document.getElementById("CaixaTabuada4").checked){
        caixa4 = 1
    }else{caixa4 = 0}

    if (document.getElementById("CaixaTabuada5").checked){
        caixa5 = 1
    }else{caixa5 = 0}

    if (document.getElementById("CaixaTabuada6").checked){
        caixa6 = 1
    }else{caixa6 = 0}

    if (document.getElementById("CaixaTabuada7").checked){
        caixa7 = 1
    }else{caixa7 = 0}

    if (document.getElementById("CaixaTabuada8").checked){
        caixa8 = 1
    }else{caixa8 = 0}

    if (document.getElementById("CaixaTabuada9").checked){
        caixa9 = 1
    }else{caixa9 = 0}

    if (document.getElementById("CaixaTabuada10").checked){
        caixa10 = 1
    }else{caixa10 = 0}

    var com1 = tabuada1.indexOf(Nrandom)
    var com2 = tabuada2.indexOf(Nrandom)
    var com3 = tabuada3.indexOf(Nrandom)
    var com4 = tabuada4.indexOf(Nrandom)
    var com5 = tabuada5.indexOf(Nrandom)
    var com6 = tabuada6.indexOf(Nrandom)
    var com7 = tabuada7.indexOf(Nrandom)
    var com8 = tabuada8.indexOf(Nrandom)
    var com9 = tabuada9.indexOf(Nrandom)
    var com10 = tabuada10.indexOf(Nrandom)

    if(com1 > -1){
        victory2 += com1
    }
    if(com2 > -1){
        victory2 += com2
    }
    if(com3 > -1){
        victory2 += com3
    }
    if(com4 > -1){
        victory2 += com4
    }
    if(com5 > -1){
        victory2 += com5
    }
    if(com6 > -1){
        victory2 += com6
    }
    if(com7 > -1){
        victory2 += com7
    }
    if(com8 > -1){
        victory2 += com8
    }
    if(com9 > -1){
        victory2 += com9
    }
    if(com10 > -1){
        victory2 += com10
    }

    if (com1 == -1 && com2 == -1 && com3 == -1 && com4 == -1 && com5 == -1 && com6 == -1 && com7 == -1 && com8 == -1 && com9 == -1 && com10 == -1){
        return alert("Esse numero não existe nas tabuadas listadas")
    }




    if(com1 > -1 && caixa1 > 0){
        
        victory += com1
    }if(com1 > -1 && caixa1 <= 0){ 
        
    }
    if(com1 == -1 && caixa1 > 0){
        return alert("Tem coisa errada ai irmão")
    }


    if(com2 > -1 && caixa2 > 0){
        
        victory += com2
    }if(com2 > -1 && caixa2 <= 0){ 
        
    }
    if(com2 == -1 && caixa2 > 0){
        return alert("Tem coisa errada ai irmão")
    }


    if(com3 > -1 && caixa3 > 0){
        
        victory += com3
    }if(com3 > -1 && caixa3 <= 0){ 
        
    }
    if(com3 == -1 && caixa3 > 0){
        return alert("Tem coisa errada ai irmão")
    }


    if(com4 > -1 && caixa4 > 0){
        
        victory += com4
    }if(com4 > -1 && caixa4 <= 0){ 
        
    }
    if(com4 == -1 && caixa4 > 0){
        return alert("Tem coisa errada ai irmão")
    }


    if(com5 > -1 && caixa5 > 0){
        
        victory += com5
    }if(com5 > -1 && caixa5 <= 0){ 
        
    }
    if(com5 == -1 && caixa5 > 0){
        return alert("Tem coisa errada ai irmão")
    }


    if(com6 > -1 && caixa6 > 0){
        
        victory += com6
    }if(com6 > -1 && caixa6 <= 0){ 
        
    }
    if(com6 == -1 && caixa6 > 0){
        return alert("Tem coisa errada ai irmão")
    }


    if(com7 > -1 && caixa7 > 0){
        
        victory += com7
    }if(com7 > -1 && caixa7 <= 0){ 
        
    }
    if(com7 == -1 && caixa7 > 0){
        return alert("Tem coisa errada ai irmão")
    }


    if(com8 > -1 && caixa8 > 0){
        
        victory += com8
    }if(com8 > -1 && caixa8 <= 0){ 
        
    }
    if(com8 == -1 && caixa8 > 0){
        return alert("Tem coisa errada ai irmão")
    }


    if(com9 > -1 && caixa9 > 0){
        
        victory += com9
    }if(com9 > -1 && caixa9 <= 0){ 
        
    }
    if(com9 == -1 && caixa9 > 0){
        return alert("Tem coisa errada ai irmão")
    }


    if(com10 > -1 && caixa10 > 0){
        victory += com10

    }if(com10 > -1 && caixa10 <= 0){ 
        
    }
    if(com10 == -1 && caixa10 > 0){
        return alert("Tem coisa errada ai irmão")
    }


    if(victory == victory2){
        alert("PARABÉNS")
    }else{alert("Tem coisa errada ai irmão")}
    victory = 0
    victory2 = 0

}