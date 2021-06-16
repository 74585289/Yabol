document.getElementById("bolita").addEventListener("mouseover",sumarPuntos);
puntos = 0;
tiempo = 55;
necesarios = 120;
//AQUI PROGRAMAMOS LA FUNCION PARA AUNMENTAR EL PUNTAJE
function sumarPuntos(){
    puntos++;
    document.getElementById("puntos").innerHTML = "Puntos:" + " " + puntos + "/120";
    randNum = Math.round(Math.random()*410)
        randNum2 = Math.round(Math.random()*410)
        // Definimos donde vamos a colocar este comportamiento y lo mostramos en pantalla
        document.getElementById("bolita").style.marginTop = randNum + "px";
        document.getElementById("bolita").style.marginLeft = randNum2 + "px";
        if(puntos == 120){
            alert("Imposible, Estas al nivel de un Dios.")
            tiempo = 55;
            puntos = 0;
        }
}
function restarTiempo(){
    tiempo--
    document.getElementById("tiempo").innerHTML = "&nbsp;&nbsp;&nbsptiempo: " +tiempo;
    if(tiempo == 0){
        alert("Todavia no estas a nivel de un Dios.")
        puntos = 0;
        tiempo = 55;
    }
}
setInterval(restarTiempo, 1000);