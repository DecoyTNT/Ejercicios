// Utilice localStorage para guardar el valor del contador,
// en la función count convierto en número el valor de c que esta almacenado en localStorage
// a ese valor le incremento 1 y lo vuelvo a guardar en localStorage y por ultimo retorno el valor de c

localStorage.setItem('c', 0)
const count = () => {

    let c = Number.parseInt(localStorage.getItem('c'));

    c = c + 1;

    localStorage.setItem('c', c);

    return c;

}

console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());
