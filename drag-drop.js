function onDragStart(event) {
    event
      .dataTransfer
      .setData('text/plain', event.target.id);

      event
      .currentTarget
      .style
      .backgroundColor = 'green';
  }
  function onDragOver(event) {
    event.preventDefault();
  }
  function onDrop(event) {
    const id = event
      .dataTransfer
      .getData('text');

      
  const draggableElement = document.getElementById(id);
  const dropzone = event.target;
  dropzone.appendChild(draggableElement);
  event
    .dataTransfer
    .clearData();
  }


  function validar(){
    var elements = document.querySelectorAll('#resultado *');
    
    if (elements.length > 0) {
     console.log("Existe algo aqui");
     
     var comparador= id_element;
    
     var num1 = parseInt(document.getElementById("numeroIzquierda").textContent);
    
     var num2 = parseInt(document.getElementById("numeroDerecha").textContent);
    
     console.log(num1 , num2)
    
    if  ( num1 > num2 && comparador =="mayor" ) {
        console.log(comparador);
        alert("FELICIDADES, HAS ACERTADO");
    
    
    } else  if (num2 > num1 && comparador == "menor") {
    
        alert("FELICIDADES, HAS ACERTADO");
      
    
    } else if (num1 == num2 && comparador =="igual") {
    
    alert("BIEN HECHO, LOS NUMEROS SON IGUALES")
    
    } else {
    
    alert("LO SIENTO, VUELVE A INTENTARLO");
    
    
    }
    
     
    
    } else{
    
    alert("Arrastra algun elemento");
    
    }
    
  //genera id de lo que esta contenido en el dropzone
    }
  
    function allowDrop(event) {
      event.preventDefault();
    
    }
    
    function drop(event) {
    
      event.preventDefault();
      var data = event.dataTransfer.getData("text");
      var elemento = document.getElementById(data);
    
      console.log("El Id del elemento es:" + elemento.id);
    
      id_element = elemento.id;
    
    }

 