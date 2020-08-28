(function(){

    var boton = document.getElementById("boton");
    var saludo = function(){
        console.log('saludo')
    }
    var saludo2 = function(e){
        //console.log('saludo2' + e.target);
        console.log('saludo2' + e.type);
    }
    
    boton.addEventListener("click", saludo );
    boton.addEventListener("click",saludo2)
    boton.removeEventListener("click", saludo)


    


}())