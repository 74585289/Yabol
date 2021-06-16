//AQUI INVOCAMOS QUE EL EVENTO MOUSEOVER EMPIECE A USAR LA FUNCION "SUMAR PUNTOS" EN LA BOLITA
document.getElementById("bolita").addEventListener("mouseover",sumarPuntos);
puntos = 0;
tiempo = 60;
necesarios = 30;
//alerta incial
alert("Bienvenido Gamer")
//AQUI PROGRAMAMOS LA FUNCION PARA AUNMENTAR EL PUNTAJE
function sumarPuntos(){
    puntos++;
    document.getElementById("puntos").innerHTML = "Puntos:" + " " + puntos + "/30";
        //DEFINIMOS UN COMPORTAMIENTO ALEATORIO PARA EL MOVIMIENTO 
        /*randNum = Math.round(Math.random()*450)
        randNum2 = Math.round(Math.random()*450)
        //DEFINIMOS DONDE VAMOS A COLOCAR ESTE COMPORTAMIENTO Y MOSTRAR EN PANTALLA
        document.getElementById("bolita").style.marginTop = randNum + "px";
        document.getElementById("bolita").style.marginLeft = randNum2 + "px";    
        if(puntos == 50){
            alert("Ganaste bien jugado");
        }
}
function restarTiempo(){
    tiempo--;
    document.getElementById("tiempo").innerHTML = "Tiempo:" + " " + tiempo;
    if(tiempo == 0){
        alert("Se acabo el tiempo");
        tiempo = 0;
        puntos = 0;
    } 
}
setInterval(restarTiempo, 1000);*/
        randNum = Math.round(Math.random()*410)
        randNum2 = Math.round(Math.random()*410)
        // Definimos donde vamos a colocar este comportamiento y lo mostramos en pantalla
        document.getElementById("bolita").style.marginTop = randNum + "px";
        document.getElementById("bolita").style.marginLeft = randNum2 + "px";
        if(puntos == 30){
            alert("Felicidades eres el mejor")
            tiempo = 60;
            puntos = 0;
        }
}
function restarTiempo(){
    tiempo--
    document.getElementById("tiempo").innerHTML = "&nbsp;&nbsp;&nbsptiempo: " +tiempo;
    if(tiempo == 0){
        alert("Game Over se acabo el tiempo")
        puntos = 0;
        tiempo = 60;
    }
}
setInterval(restarTiempo, 1000);