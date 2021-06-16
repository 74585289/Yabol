//AQUI INVOCAMOS QUE EL EVENTO MOUSEOVER EMPIECE A USAR LA FUNCION "SUMAR PUNTOS" EN LA BOLITA
document.getElementById("bolitaC").addEventListener("mouseover",sumarPuntos);
puntosC = 0;
tiempoC = 55;
necesariosC = 120;
//AQUI PROGRAMAMOS LA FUNCION PARA AUNMENTAR EL PUNTAJE
function sumarPuntos(){
    puntosC++;
    document.getElementById("puntosC").innerHTML = "Puntos:" + " " + puntosC + "/120";
        randNum = Math.round(Math.random()*350)
        randNum2 = Math.round(Math.random()*350)
        // Definimos donde vamos a colocar este comportamiento y lo mostramos en pantalla
        document.getElementById("bolitaC").style.marginTop = randNum + "px";
        document.getElementById("bolitaC").style.marginLeft = randNum2 + "px";
        if(puntosC == 120){
            alert("Imposible, Estas al nivel de un Dios.")
            tiempoC = 55;
            puntosC = 0;
        }
}
function restarTiempo(){
    tiempoC--
    document.getElementById("tiempoC").innerHTML = "&nbsp;&nbsp;&nbsptiempo: " + tiempoC;
    if(tiempoC == 0){
        alert("Todavia no estas a nivel de un Dios.")
        puntosC = 0;
        tiempoC = 55;
    }
}
setInterval(restarTiempo, 1000);