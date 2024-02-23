
function generar_numero_aleatorio()
{let numero = Math.random()
    numero = numero * 100;
    numero = Math.floor(numero);
    numero = numero +1
    return numero;
}
let mi_numero_aleatorio =generar_numero_aleatorio ()


console.log (mi_numero_aleatorio)

