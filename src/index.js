import './styles.css';
import { iniciar, detenerTime } from './js/componentes';
import { turno } from './js/turno';

export  const btnEnviar     = document.querySelector('#enviar');
export  const oportunidad   = document.querySelector('#intento');
        const formulario    = document.querySelector('#formulario');
        const inicio        = document.querySelector('#iniciar');
        const detener       = document.querySelector('#detener');

oportunidad.disabled = true;
btnEnviar.disabled   = true;
detener.disabled     = true;


inicio.addEventListener('click', ()=>{

iniciar();

detener.disabled = false;


});

detener.addEventListener('click', ()=>{

detenerTime();

inicio.disabled  = true;
detener.disabled = true;

oportunidad.disabled = false;
btnEnviar.disabled   = false;

});

formulario.onsubmit=(e)=>{

e.preventDefault(e);
    
let intento = oportunidad.value;

turno(intento);

    
};
