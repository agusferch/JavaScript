let monto = parseInt(prompt('Ingresar el monto total'));
let cuotas = parseInt(prompt('Ingrese la cantida de cuotas en la que lo desea realizar'));

//
function calcular(){
    while((monto || cuotas) != 'FIN'){
        if(monto < cuotas){
            alert('Las cuotas no pueden ser mayor al monto total')
        }
        else if(monto==0 || cuotas==0){
            alert('Datos invalidos')
        }else{
            let resultado = monto / cuotas;
            alert('Debera pagar ' + resultado + ' cada cuota');
        }
        monto = prompt('Ingresar el monto total, si desea cerrar el programa escriba "FIN"')
        cuotas= prompt('Ingrese la cantida de cuotas en la que lo desea realizar, si ya cerro el programa solo presione enter')
    }
}

calcular();