const valores = window.location.search;
console.log(valores);

//Creamos la instancia
const urlParams = new URLSearchParams(valores);

//Accedemos a los valores
var categoria = urlParams.get('cat');
console.log(categoria);