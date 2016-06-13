document.getElementsByClassName("topnav")[0].style.background = "rgb(38,41,50)";
function navDrop() { // Mobile drop menu
    document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
}
var c1 = [ // change background color
    "rgba(0, 200, 0, 0.8)",
    "rgba(200, 0, 0, 0.8)",
    "rgba(38, 41, 50, 0.8)",
    "rgba(0, 0, 200, 0.7)"
    ];
    var c2 = [ // change text color
    "rgba(0, 200, 0, 0.3)",
    "rgba(200, 0, 0, 0.3)",
    "rgba(38, 41, 50, 0.3)",
    "rgba(0, 0, 200, 0.2)"
    ];
function changeBg(a,b){
    var x = document.getElementsByClassName("tshadow");// para text-shadow
    var y = document.getElementsByClassName("copycolor");//para el color de texto
    var z = document.getElementsByClassName("copycolor2");// para background
    var i;
    for (i = 0; i <x.length; i++) {
      x[i].style.textShadow = "1px 1px 1px " + a; 
    }
    for (i = 0; i <y.length; i++) {
      y[i].style.color = a;
    }
    for (i = 0; i <z.length; i++) {
      z[i].style.background = b;
    }
}
function startAnim(){
    // Code for Chrome, Safari, and Opera
    document.getElementById("earth").style.WebkitAnimationPlayState = "running";
    document.getElementById("seeme").style.WebkitAnimationPlayState = "running";
}
function stopAnim(){
    // Code for Chrome, Safari, and Opera
    document.getElementById("earth").style.WebkitAnimationPlayState = "paused";
    document.getElementById("seeme").style.WebkitAnimationPlayState = "paused";
}

function validar() // calculo letra DNI
   {var letras=['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T'];

    var dni=parseInt(document.formulario.dni.value);
   
    if (dni<0 || dni>99999999)
     {alert("el dni no es válido");}

  
    var calculada=dni%23;
    document.formulario.linea.value=letras[calculada];
   
   }




