import '../css/componentes.css';

export const numeros=document.querySelector('#numero');

let min = 0;
let max = 200;
let aleatorio;

export let numeroAleatorio;


const tiempo = () =>{

numeroAleatorio = Math.floor ( Math.random() * max - min + 1) + min;

numeros.innerText = numeroAleatorio;

};

export const iniciar = () =>{

aleatorio = setInterval(tiempo, 30);
    

};

export const detenerTime = () =>{

numeros.innerText='¿Adivina el numero?';

clearInterval(aleatorio);
    
 
};





