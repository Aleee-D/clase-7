//const { sqrt } = require('math.js')
function unaPotencia(a){
    return function sumado(add){
        return function elevada(e){
            return Math.pow(e+add,a);
        }
    }
}

let alcuadrado = unaPotencia(2);
let alcubo = unaPotencia(3);

let sumado1 = alcuadrado(1);
let sumado2 = alcuadrado(2);

console.log("hola mundo");
console.log(new new unaPotencia(1)(10)(0));
console.log(alcubo(10));
console.log(sumado1(10));
console.log(sumado2(10));
