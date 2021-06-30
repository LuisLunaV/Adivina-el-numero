import { numeroAleatorio, numeros } from "./componentes";
import { oportunidad, btnEnviar } from "../index";

const lista = document.querySelector('#lista');
let intentos = [];  

export const turno = (elemnt) =>{

if(intentos.length <= 10 && numeroAleatorio != elemnt){

intentos.push(elemnt);

if(numeroAleatorio > elemnt){

numeros.innerText = 'El numero es mayor';
oportunidad.value = '';

}if(numeroAleatorio < elemnt){

numeros.innerText = 'El numero es menor';
oportunidad.value = '';

}
            
}else{

if(numeroAleatorio == elemnt){
    
numeros.innerText = '¡FELICIDADES GANASTE!';
oportunidad.value = '';

oportunidad.disabled = true;
btnEnviar.disabled   = true;

}else{
    
numeros.innerText = 'Numero de intentos terminados';
           
let newLista = intentos.map((elemnto) => { return `<li>${elemnto}</li>` });

lista.innerHTML=newLista.join('');

oportunidad.value = '';

oportunidad.disabled = true;
btnEnviar.disabled   = true;

}
    
}





};
