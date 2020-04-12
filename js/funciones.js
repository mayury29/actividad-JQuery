
$("#ventana").dialog({
    
    width: 400,
    height: 300
   
});
$("#ventana").dialog('open');



function guardar(){
    var nombre;
    var apellido;
   
    nombre = document.getElementById('nombre').value;
    apellido = document.getElementById('apellido').value;
  
    if(nombre.length==0 || apellido.length==0){
        alert("Debe Completar todos los campos");
    }else{
    
    var nav = document.getElementById("nombresyapellidos");
   nav.innerHTML = nav.innerHTML+nombre +  ' ' + apellido; 
    
    $("#ventana").dialog('close');
    alert(' Bienvenido(a) ' + nombre +  ' ' + apellido +' Usted ha sido agregado con exito!!! ');
    }


    
}