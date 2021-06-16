document.getElementById("bolita").addEventListener("mouseover",sumarPuntos);
puntos = 0;
tiempo = 50;
necesarios = 70;
//AQUI PROGRAMAMOS LA FUNCION PARA AUNMENTAR EL PUNTAJE
function sumarPuntos(){
    puntos++;
    document.getElementById("puntos").innerHTML = "Puntos:" + " " + puntos + "/70";
    randNum = Math.round(Math.random()*410)
        randNum2 = Math.round(Math.random()*410)
        // Definimos donde vamos a colocar este comportamiento y lo mostramos en pantalla
        document.getElementById("bolita").style.marginTop = randNum + "px";
        document.getElementById("bolita").style.marginLeft = randNum2 + "px";
        if(puntos == 70){
            alert("Felicidades eres el mejor")
            tiempo = 50;
            puntos = 0;
        }
}
function restarTiempo(){
    tiempo--
    document.getElementById("tiempo").innerHTML = "&nbsp;&nbsp;&nbsptiempo: " + tiempo;
    if(tiempo == 0){
        alert("Game Over se acabo el tiempo")
        puntos = 0;
        tiempo = 50;
    }
}
setInterval(restarTiempo, 1000);