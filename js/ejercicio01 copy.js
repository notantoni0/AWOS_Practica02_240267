// Personalización de salidas a Consola
const bg= "linear-gradient(45deg, rgba(52, 152, 219, 1) 0%, rgba(26, 188, 156, 1) 50%)";
const style_console = `background: ${bg}; color:white; border-radius: 6px; padding:4px; font-size:1.0rem; font-weight:bold`
console.log("%c1.- Ejercicio 01: Declaración de Variables ",style_console);

// 1. declaracion de variables - VAR

var miNombre = "Antonio";
var misApellidos;

// funcion console.log para imprimir valor en la variable
console.log("El valor de la varibale miNombre es:", miNombre)
console.log("El valor de la varibale misApellidos es:", misApellidos)

// en este momento la variable ya tiene valor
misApellidos = "Ricaño Reyes"
console.log("El valor de la varibale misApellidos es:", misApellidos)

// e
miNombre = "José Antonio";
console.log("Hola", miNombre, misApellidos)

// 2. Declaración de Variables utilizando el prefijo CONST
console.warn("-- Declaración de Variables utilizando el prefijo CONST -- ");

/* La palabra reservada CONST nos permite a nivel memoria reservar espacio para almacenar datos de una constante que a diferencia de una VARIABLE esta no puede camibar su valor durante la ejecución del programa, de igual manera no se pueden declarar constantes sin obligatoriamente inicializarlas, es decir asignarles un valor específico, por ejemplo:*/

const miMatricula = "240267";

// Imprimir el valor de una constante
console.log("El valor actual de la constante miMatricula es: ", miMatricula);

//const miEdad; //   -- Esto ocasiona un error por que la constante no fue inicializada

//miMatricula = "25XXXXX";  //   -- Ocasiona un error por que el valor de una CONSTANTE no puede cambiar una vez a sido asignado.


// 3. Declaración de Variables utilizando el prefijo LET

/* La palabra reservada LET en JavaScript nos permite declarar variables de una manrera muy similar a VAR, con la diferencia del alcance (SCOPE) de la misma, es decir aquellas variables declaradas con var tienen un alange global durante la ejecución y la let se limitan a funciones, ciclos o bloques de código , eliminando los valores almacenado una vez cumplen su función */

var miFechaNacimiento = new Date("2006-10-31");

function calcularEdad(fechaNacimiento)
{
    //Para calcular la edad requerimos de la fecha del día de hoy
    let fechaHoy = new Date();

    // Dado que los datos de fecha son almacenados en milisegundos por default en JavaScript, necesitamos una variable que nos permite saber el numero de milisegundos por día
    let milisegundosPorDia = 24*60*60*1000;

    //Ya que tenemos los miliseguntos por día tenemo que restar a la fecha de hoy, la fecha en que nacimos para calcular los milisegundos que hemos vivido.
    let diasVividos = (fechaHoy - fechaNacimiento)/milisegundosPorDia;

    // invocamos el método matemático de la función piso (FLOOR)
     let edad = diasVividos /365.25
     edad = Math.floor(edad);

     return edad;
}

console.warn("-- Declaración de Variables utilizando LET --")
console.log("El valor dela variable miFechaNacimiento es: ", miFechaNacimiento);
var miEdad = calcularEdad(miFechaNacimiento);
console.log("Después de ejecutar la función calcularEdad(), puedo saber que tienes: ",
    miEdad, " años. ");   
    
    
if(miEdad >= 18)
    {
        var esMayordeEdad = true;
        var esMenordeEdad = false;
    }   
    else
    {
        esMayordeEdad= false;
        esMenordeEdad = true;
    }

console.log("En base a tu edad puedo deducir que el valor de esMayordeEdad es: ", esMayordeEdad, "y el valor de esMenorDeEdad es:", esMenordeEdad);


// interpolacion de datos

/* para interpolar datos en javascript, es decir mezclar información estatíca, que no cambia con datos dinamicos que pueden cambiar durante la ejecución del programa se requiere comenzar la cadena con un backtic (`) y los datos que son dinamicos estrán encerrados en llaver curvas {} antecedidas por un signo de dolar $*/

console.warn("-- Interpolación de Datos --");
console.log(`Hola, ${miNombre} ${misApellidos} se que tienes: ${miEdad} años; por lo que eres: ${esMayordeEdad?' mayor de edad': ' menor de edad'}.`);

// tipos de datos en java script

// personalización de salidas a consola

// 1. undefined - valor por defecto asignado a variables declaradas pero no inicializadas, no es igual a null.

console.warn("1.- UNDEFINED (No definido)")
let usuarioLogeado;
var rolUsuario;
const ultimoAcceso = undefined;

console.log("Valores actuales de las variables");
console.log(`usuarioLogeado = ${usuarioLogeado}`);
console.log(`rolUsuario = ${rolUsuario}`);
console.log(`ultimoAcceso = ${ultimoAcceso}`);

// en java script existe el método typeof() que nos devuelvebel tipo de dato de una variable perficamente declarada.

console.log("Tipo de dato de las variables declaradas");
console.log(`usuarioLogeado = ${typeof(usuarioLogeado)}`);
console.log(`rolUsuario = ${typeof(rolUsuario)}`);
console.log(`ultimoAcceso = ${typeof(ultimoAcceso)}`);

// supongamos que un usuario denominado Antonioo se ha logeado exitosamente, el valor de la variable deberá actualizarse a su username

usuarioLogeado = "Antonioo";

// pero no solo cambiara su valor, tmbn cambiara su tipo

console.log(`El valor de la variable usuarioLogeado es : ${usuarioLogeado} y su nuevo tipo es: ${typeof(usuarioLogeado)}`)

console.warn("2.- BOOLEAN (TRUE/FALSE)")
var hayUsuarioLogeado;

// supongamos q nuestra app tendrá un menu específico para los usuarios registrados, en el podrán visualizar sus mensajes o estado de las publicaciones de renta o venta de propiedades, a diferencia de un usuario q entra de manera incógnita a vincular sus propiedades.

function validarUsuarioLogeado(){
    console.log(`El valor de la variable hayUsuarioLogeado es ${hayUsuarioLogeado}, qu es de tipo ${typeof(hayUsuarioLogeado)}`);

    if (hayUsuarioLogeado === true) {
        console.log("Dado que se ha logeado un usuario la app mostrará el menú de usuario")
    } else if (!hayUsuarioLogeado) {
        console.log("Dado que no hay un usuario logeado la app no mostrará el menú de usuario")
    } else {
        console.log("No puedo propcesar este tipo de dato")
    }
}

// test 1 : hay usuario logeado
console.log("Test 1")
hayUsuarioLogeado = true;
validarUsuarioLogeado();

// test 1 : hay usuario logeado
console.log("Test 2")
hayUsuarioLogeado = false;
validarUsuarioLogeado();

// test 1 : hay usuario logeado
console.log("Test 3")
hayUsuarioLogeado = 387;
validarUsuarioLogeado();

// 3. NUMBER (Numéricos)
console.warn("3.- NUMBER (NUMÉRICOS)")
/* Es importante saber que Java Script a diferencia de otros lenguajes no diferencia los datos de tipo númerico, lo que para otros leguajes de programación lo que un ENTERO (INT), FLOTANTE (FLOAT), DECIMAL , DOBLE (DOUBLE), para el solo son números (NUMBER)*/

let userID_Owner = 225
let priceProperty = 125000.50
let latGPS = 20.240508
let longGPS =-97.952881
let altGPS = 1180

console.log(`Los valores de las variables declaradas para los datos de la propiedad son:
                    ID del Usuario propietario: ${userID_Owner} 
                    Precio de la propiedad: ${priceProperty}
                    Latitud (GPS) : ${latGPS}
                    Longitud (GPS) : ${longGPS}
                    Altitud (GPS) : ${altGPS}`);

console.log(`Los tipos de datos de las variables declaradas para los datos de la propiedad son:
                    ID del Usuario propietario: ${typeof(userID_Owner)} 
                    Precio de la propiedad: ${typeof(priceProperty)}
                    Latitud (GPS) : ${typeof(latGPS)}
                    Longitud (GPS) : ${typeof(longGPS)}
                    Altitud (GPS) : ${typeof(altGPS)}`);


//4.- STRING (Cadena de Caractéres)

var fullnameOwner = "Antonio Ricaño Reyes";
let nameProperty = "Hermosa Casa en la Playa de Puerto Vallarta";
let descriptionProperty = "Casa de 2 pisos, 4 habitaciones, 2 baños completos y estacionamiento para 2 automoviles a orilla del mar.";
var statusProperty = "Disponible";
const typeProperty="C";
var addressProperty;

/* Los tipos de datos STRING son un palabras , valores cualitativos de las entidades de nuestra aplicación,  que no tienen un tamaño máximo  y que estan conformadas por carácteres alfabéticos , caracteres especiales como acentos o símbolos de algun idioma*/

console.warn("4. STRING (CADENA DE CARÁCTERES , PALABRAS");

console.log(`El usuario: ${fullnameOwner},
     esta vendiendo o rentando: ${nameProperty}
     que consiste en: ${descriptionProperty}
     actualmente esta en estado: ${statusProperty} y es del tipo: ${typeProperty}`);
console.log(`Las variables declaradas son del tipo:
                fullnameOwner :  ${typeof(fullnameOwner)}
                nameProperty :  ${typeof(nameProperty)}
                descriptionProperty:  ${typeof(descriptionProperty)}
                statusProperty :  ${typeof(statusProperty)}
                typeProperty :  ${typeof(typeProperty)}`);