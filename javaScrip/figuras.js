// Funciones que encapsulan las funcionalidades de cuadrado
function perimetroCuadrado(lado) {
    var lado=Number(document.getElementById('cuadrado').value);
    var respuest = lado * 4;
    document.getElementById('respuest').value = respuest;
}

function areaCuadrado(lado) {
    var lado=Number(document.getElementById('AreaCuadrado').value);
    var res = lado * lado;
    document.getElementById('res').value = res;
}

// Funciones que encapsulan las funcionalidades de triángulo
function perimetroTriangulo() { 
    var lado1=Number(document.getElementById('PerimetroTriangulo1').value);
    var lado2=Number(document.getElementById('PerimetroTriangulo2').value);
    var lado3=Number(document.getElementById('PerimetroTriangulo3').value);
    var respuesta = lado1 + lado2 + lado3; 
    document.getElementById('respuesta').value = respuesta;
}

function areaTriangulo() { 
    var base=Number(document.getElementById('AreaTriangulo1').value);
    var altura=Number(document.getElementById('AreaTriangulo2').value);
    var res=(base * altura)/2;
    document.getElementById('res1').value = res;
    
}


// Funciones perque encapsulan las funcionalidades de círculo
function diametroCirculo(radio) {
    var radio=Number(document.getElementById('Dcirculo').value);
    var resp = radio * 2;
   document.getElementById('resp').value = resp;
}

function perimetroCirculo(radio) {
    var radio =Number(document.getElementById('radi').value);
    var igual = Math.PI * radio ;
    document.getElementById('respt').value = igual;
}

function AreaCirculo() {
    var radio =Number(document.getElementById('areaCirculo').value);
    var r = (radio * radio) * Math.PI;
    document.getElementById('resultado').value = r;
}
function areaRombo(){
    var distansia1 =Number(document.getElementById('areaRombo1').value); 
    var distansia2 =Number(document.getElementById('areaRombo2').value);
    var resultado1 = (distansia1 *distansia2)/2;
    document.getElementById('resultado1').value = resultado1; 
}

//coneccion
//perimetro-cuadrado
function calcularPerimetroCuadrado(){
 const input =  document.getElementById("cuadrado") ;
 const value = input.value;

 const perimetro = perimetroCuadrado(value);
 alert(perimetro);
}
//area cuadrado
function CalcularAreaCuadrado(){
    const input =  document.getElementById("AreaCuadrado") ;
    const value = input.value;
   
    const area =areaCuadrado (value);
    alert(area);
}
//perimetro triangulo

function CalcularPerimetroTriangulo(){
    const input =  document.getElementById("PerimetroTriangulo");
    const value = input.value;
   
    const PeriTriangulo = perimetroTriangulo(value);
    alert(PeriTriangulo);
}
// area del triangulo
function CalcularAreaTriangulo(){
    const input =  document.getElementById("AreaTriangulo");
    const value = input.value;
   
    const area_Triangulo =areaTriangulo (value);
    alert(area_Triangulo);
}


//descuento
const precioOriginal = 100;
const descuento = 15;
const porcentaPrecioConDescuento = 100 - descuento;
const precioConDescuento = (precioOriginal * porcentaPrecioConDescuento)/100;

console.log({
    precioOriginal,
    descuento,
    porcentaPrecioConDescuento,
    precioConDescuento,
});


function calcularPrecioConDescuento(precio,descuento){
    const porcentaPrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentaPrecioConDescuento)/100;

    return precioConDescuento;
}

//conexion

function onClickPriceDiscount(){
    const InputPrice = document.getElementById("inputPrice");
    const priceValue = InputPrice.value;

    const InputDiscount = document.getElementById("inputDiscount");
    const discountValue = InputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultPrice = document.getElementById("resultPrice");
    resultPrice.innerText = "El precio final con descuento es de bs " + precioConDescuento;
}