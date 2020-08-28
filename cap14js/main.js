// 
var elementosP = document.getElementsByTagName("p");
    //elementosP[0].innerHTML="hola mundo"
var segundoParrafo = document.getElementById('segundo');


//1- Crear elemento
    var element = document.createElement("h2"); 

//2- Crear un nodo texto al alemento
    var contenido = document.createTextNode("este es el titular N° 2");
//3- añadir el nodo texto al elemento
    element.appendChild(contenido);

//4- agregar atributos al elemento
    element.setAttribute("align", "center");

//5- agregar el elemento al documento  

    document.getElementById('subtitulo').appendChild(element);
    //document.body.appendChild(element);