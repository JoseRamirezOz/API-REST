const d = document
const xhr = new XMLHttpRequest()/*Generamos 
una nueva instancía de XMLHttpRequest();*/ 

const $xhr = document.getElementById("xhr")
const $fragment = document.createDocumentFragment() 

function apiDog(){
    xhr.addEventListener("readystatechange",(e)=>{

        if(xhr.readyState==4){
            if(xhr.status >= 200 && xhr.status < 300){
                let json = JSON.parse(xhr.responseText)
                console.trace(json)
                console.log(json[0].url)
                let requestImg = json[0].url
                
                document.querySelector(".pictureDog").setAttribute("src",requestImg)
            }else{
                console.log("Ocurrio algo :(")
            }
        }
        
        }); /* Agregamos el evento que escuchara los 
        cabmbior de respuesta y donde se desarrollara
        la logica*/
        
        xhr.open("GET","https://api.thecatapi.com/v1/images/search?size=full")/* Aperturamos y establecemos 
        el metodo mediante el cual recibiremos 
        los datos del JSON*/
        
        xhr.send()/*Enviamos esa peticion*/
}


/***
 * DELEGACION DE EVENTOS 
 */

document.addEventListener("click",(e)=>{
    if(e.target.matches(".newImage")){
        apiDog()
    }
})