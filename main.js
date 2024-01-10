const botanf=document.querySelector('.boton');

const caja1=document.querySelector('.caja1');
const caja2=document.querySelector('.caja2');
const caja3=document.querySelector('.caja3');
const caja4=document.querySelector('.caja4');

const error1=document.querySelector('.error1');
const error2=document.querySelector('.error2');
const error3=document.querySelector('.error3');
const error4=document.querySelector('.error4');

botanf.addEventListener('click',(event)=>{
    event.preventDefault();

    validarVacioUsuario(caja1.value, caja1, error1);
    validarVacioNum(caja2.value, caja2, error2);
    validarVacioEmail(caja3.value, caja3, error3);
    validarVacio1(caja4.value, caja4, error4);
})

function validarVacioUsuario(valor1, valor2, valor3){
    const user=/^[A-Za-z]{1,3}$/;
    if(user.test(valor1)==true){
        correcto(valor2, valor3);
    }else{
        incorrecto(valor2,valor3);
    }
}

function validarVacio1(valor1, valor2, valor3){
    const contra=/^[A-Za-z]+$/;
    if(contra.test(valor1)==true && valor1.length <= 3){
        correcto(valor2, valor3);
    }else{
        incorrecto(valor2,valor3);
    }

}

function validarVacioEmail(valor1, valor2, valor3){
    const cal=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    
    if(cal.test(valor1) == true){
        correcto(valor2, valor3);
    }else{
        incorrecto(valor2,valor3);
    }
}

function validarVacioNum(valor1, valor2, valor3){
    const num=/(?=\d)\d+/g;
    if(num.test(valor1) == true){
        correcto(valor2, valor3);
    }else{
        incorrecto(valor2,valor3);
    }
}
function incorrecto(valor2, valor3){
    valor2.style.border='1px solid red';
    valor3.style.display='flex';
}
function correcto(valor2,valor3){
    valor2.style.border='1px solid green';
    valor3.style.display='none';
}