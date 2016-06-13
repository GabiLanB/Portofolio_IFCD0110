function calculateIMC(){    //incepem functia
    //alert("hola");
    var height, weight, imc, estate, image, image2; //declaram variabilele
    height = parseInt(document.getElementById("height").value);//isi ia valuarea inaltimii din documentul html
    weight = parseFloat(document.getElementById("weight").value);//isi ia valuarea greutatii din documentul html
    imc = weight / Math.pow(height/100,2); //masa corporal = greutatea impartitala la inaltimea impartita si inmultita la patrat
    document.getElementById("imc").value = imc; // transcriem reuzultatul functiei in fisierul html in casuta cu id=imc
    image = document.getElementById("image");
    image2 = document.getElementById("image2");
    if (imc<16){
        document.getElementById("estate").value="to skinny";
        document.getElementById("image").src = "img/skinny.gif";
    } else if (imc >= 16 && imc < 17){
        document.getElementById("estate").value="a little skinny";
        document.getElementById("image").src = "img/skinny.gif";
    } else if (imc >= 17 && imc < 18.5){
        document.getElementById("estate").value="almoust Normal";
        document.getElementById("image").src = "img/skinny.gif";
    } else if (imc >= 18.5 && imc < 25){
        document.getElementById("estate").value="Ooo!!! A Normal Person";
        document.getElementById("image").src = "img/normal.gif";
    } else if (imc >= 25 && imc < 30){
        document.getElementById("estate").value="A little fat ;)";
        document.getElementById("image").src = "img/fat.gif";
    } else if (imc >= 30 && imc < 35){
        document.getElementById("estate").value="a fatty man!!!";
        document.getElementById("image").src = "img/fat.gif";
    } else if (imc >= 35 && imc < 40){
        document.getElementById("estate").value="way to fat";
        document.getElementById("image").src = "img/fat.gif";
        document.getElementById("image2").src = "img/skellet.png";
    } else if (imc >= 40 ){
        document.getElementById("estate").value="the fathest person in the world";
        document.getElementById("image").src = "img/fat.gif";
        document.getElementById("image2").src = "img/skellet.png";
    } else document.getElementById("estate").value="an ERROR :) ";
}
function reset(){
    //alert("hola");
    document.getElementById("height").value = document.getElementById("height").placeholder;
    document.getElementById("weight").value = document.getElementById("weight").placeholder;
    document.getElementById("imc").value = document.getElementById("imc").placeholder;
    document.getElementById("estate").value = document.getElementById("estate").placeholder;
    document.getElementById("image").src = "";
    document.getElementById("image2").src = "";
}
/*function changeImage(){
    var imc = document.getElementById("imc").value;
    var image = document.getElementById("image");
    if( imc>0 && imc < 18.5){
        document.getElementById("image").src = "img/skinny.png";
    }
    else if( imc >18.5 && imc <= 30){
        document.getElementById("image").src = "img/normal.gif";
    }
    else if( imc  > 30){
        document.getElementById("image").src = "img/fat.gif";
    } else document.getElementById("imc").value="an ERROR :) ";   
}*/