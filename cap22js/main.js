(function(){

    var formulario = document.getElementsByName("formulario")[0];
    var elementos = formulario.elements;
    var boton = document.getElementById('btn');

    var validarnombre = function(ele){
      if(formulario.nombre.value == 0){
        console.log('tag', 'completa')
        ele.preventDefault();
        
      }
    }
    var validaradio= function(e){
      if(formulario.sexo[0].checked == true || formulario.sexo[1].checked == true){

      }else{
        alert("complete el sexo");
        e.preventDefault()
      }
    }
    var validaCheck= function(e){
      if(formulario.terminos.checked == false){
        alert("acepta los terminos");
        e.preventDefault();
      }
    }

    var validar = function(ele){
      validarnombre(ele);
      validaradio(ele)
      validaCheck(ele)
    }

  formulario.addEventListener('submit',validar)
      
  
  
  }())