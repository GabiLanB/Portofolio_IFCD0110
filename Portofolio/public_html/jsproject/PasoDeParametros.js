function reset(){
    //alert("hola");
    document.getElementById("height").value = document.getElementById("height").placeholder;
    document.getElementById("weight").value = document.getElementById("weight").placeholder;
    document.getElementById("imc").value = document.getElementById("imc").placeholder;
    document.getElementById("estate").value = document.getElementById("estate").placeholder;
    document.getElementById("image").src = "";
    document.getElementById("image2").src = "";
}
function calculateIMC(altura,pes){
    //alert("function calculateIMC(altura, pes)");
    var imc, altura, pes;
    imc = pes/(altura*altura);
    return imc;
}

function analisiIMC(imc){
    var opinion = [];
    if (imc<16){
        opinion[0]="to skinny";
        opinion[1] = "img/skinny.gif";
    } else if (imc >= 16 && imc < 17){
        opinion[0]="a little skinny";
        opinion[1] = "img/skinny.gif";
    } else if (imc >= 17 && imc < 18.5){
        opinion[0]="almoust Normal";
        opinion[1] ="img/skinny.gif";
    } else if (imc >= 18.5 && imc < 25){
        opinion[0]="Ooo!!! A Normal Person";
        opinion[1] ="img/normal.gif";
    } else if (imc >= 25 && imc < 30){
        opinion[0]="A little fat ;)";
        opinion[1] ="img/fat.gif";
    } else if (imc >= 30 && imc < 35){
        opinion[0]="a fatty man!!!";
        opinion[1] ="img/fat.gif";
    } else if (imc >= 35 && imc < 40){
        opinion[0]="way to fat";
        opinion[1] ="img/fat.gif";
    } else if (imc >= 40 ){
        opinion[0]="the fathest person in the world";
        opinion[1] ="img/skellet.png";
    } else opinion[0]="ERROR :) ";
    return opinion;
}

function analisiCoporal(){
    var pes = parseFloat(document.getElementById("weight").value);
    var altura = parseInt(document.getElementById("height").value);
    var opinion;
    var imc;
    
    imc = calculateIMC(altura,pes);//Calculo el IMC
    //alert("functiona");
    opinion = analisiIMC(imc);//Calculo el text y la imagen
    //Monstrar resultados
    document.getElementById("imc"). value = imc;
    document.getElementById("resultadoFinal").value = opinion[0];
    document.getElementById("image").src = opinion[1];
   
}

