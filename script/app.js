const  myBody= document.querySelector("body")
const  myContenedor= document.querySelector("#container");
const myBtn = document.querySelector("#btn")



 /**funcion  que  realiza el click  para toda la logica*/
 myBtn.addEventListener("click", ingresarValores)

  function ingresarValores(){
  
   
      anchoYLargo()
      creacionDiv()
    
     let creaTDis=document.createElement("DIV")
     creaTDis.setAttribute("class","misDis")
     creaTDis.style.width=cantidadCuaderos+"px";
     creaTDis.style.height=cantidadCuaderos+"px";
     creaTDis.style.backgroundColor="red"
}
  /**funcion  que leda  el largo a  el div */

 function  anchoYLargo(){
    myContenedor.style.maxHeight= "100%";

 }
 /**funcion  crea los div */
  function creacionDiv(){
   let  cantidadCuaderos= Number(parseInt(prompt("ingrese el numero de las cuadriculas")))

   

    for(let i=0 ; i < cantidadCuaderos; i++){
      if(cantidadCuaderos > 100){
         break
      }

        
        let creaTDis=document.createElement("DIV")
        creaTDis.setAttribute("class","misDis")
        creaTDis.style.width=cantidadCuaderos+"px";
        creaTDis.style.height=cantidadCuaderos+"px";
        creaTDis.style.backgroundColor="red"
        myContenedor.appendChild(creaTDis)

        creaTDis.addEventListener("mouseenter",function(){
             creaTDis.style.backgroundColor="yellow"
        })
        //funcion remueve  los div

        myBtn.addEventListener("click",function(){
         if( myContenedor){
           myContenedor.removeChild(creaTDis)
         }
   })

        
        
     }

  }
   



