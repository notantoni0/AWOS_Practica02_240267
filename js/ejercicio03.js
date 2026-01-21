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

/* Existen métodos para manipular los datos del tipo STRING, como:*/
/* El método toUpperCase que convierte todas la letras en mayúsculás*/
console.log(`El usuario logeado es: ${usuarioLogeado.toUpperCase()}`);
/* Por lo contrario en método toLowerCase convierte todo el texto a minúsculas*/
console.log(`Descripción de la propiedad en venta: ${descriptionProperty.toLowerCase()}`);
/* Tambien existe la propiedad que cuenta el número cáracteres que forman el texto, llamado length (tamaño)*/
console.log(`La longitud del nombre de la propiedad es de: ${nameProperty.length}`);
/* Tenemos un método que nos permite hacer subcadenas o extraer la porción de la palabra en base a su posiscionamiento*/
let lastname = fullnameOwner.slice(8, fullnameOwner.length)
console.log(`El apellido del propietario es: ${lastname}`);

/* Otra funion útil es aquella que nos permite remplazar letras o palabras dentro del texto denominada replace() */

console.log(`Remplazo de la para MAR por RÍO, Descripción de la propiedad: ${descriptionProperty.replace("MAR", "RÍO")}`);

/* O el remplazo de todas las ocuerrencias de una letra o palabra */

console.log(`Remplazo de las letras A por el numero 4, Nombre de la Propiedad: ${nameProperty.replaceAll("a", "4")}`);

/* 5. BIGINT (Entero de Alta Precisión, o alta amplitud) */
console.warn("5. BIGINT (ENTEROS DE ALTA PRECISIÓN)");
let numeroGrande1 = 1234567890;   /* 10 dígitos */
let numeroGrande2 = 12345678901234567890;   /* 20 dígitos */
let numeroGrande3 = 123456789012345678901234567890;   /* 30 dígitos */
let numeroGrande4 = 1234567890123456789012345678901234567890;  /* 40 dígitos */

/* Imprimamos los valores de las variables y observemos que pasa: */
console.log(`Los valos y tipos de datos son:
    numeroGrande1,  valor= ${numeroGrande1}, tipo: ${typeof(numeroGrande1)}
    numeroGrande2,  valor= ${numeroGrande2}, tipo: ${typeof(numeroGrande2)}
    numeroGrande3,  valor= ${numeroGrande3}, tipo: ${typeof(numeroGrande3)}
    numeroGrande4,  valor= ${numeroGrande4}, tipo: ${typeof(numeroGrande4)}
    `)
/* Para no perder precisión en estos números JAVASCRIPT tiene un tipo de dato especial denominado BIGINT, 
para poder almacenar el valor en este tipo de dato solo basta con invocar el método de conversión en la inicialización*/

numeroGrande1= BigInt("1234567890");  /*10 dígitos */
numeroGrande2= BigInt("12345678901234567890") /*20 dígitos */
numeroGrande3= BigInt("123456789012345678901234567890") /*30 dígitos */
numeroGrande4= BigInt("1234567890123456789012345678901234567890") /*40 dígitos */

console.log(`Los valos y tipos de datos son:
    numeroGrande1,  valor= ${numeroGrande1}, tipo: ${typeof(numeroGrande1)}
    numeroGrande2,  valor= ${numeroGrande2}, tipo: ${typeof(numeroGrande2)}
    numeroGrande3,  valor= ${numeroGrande3}, tipo: ${typeof(numeroGrande3)}
    numeroGrande4,  valor= ${numeroGrande4}, tipo: ${typeof(numeroGrande4)}
    `)

    /* 6. SYMBOL*/
/* Es tipo de dato a parte de almacenar el valor, almacena la dirécción física en memoría donde se almacena el valor, logrando que todos los valores de cada variable siempre sean ÚNICOS*/

console.warn("6. SYMBOL (Símbolos)");
const numero1 = 3;
const numero2 = 3.0;
const numero3 = "3";
const numero4 = "3.0";
const numero5 = Symbol(3);
const numero6 = Symbol(3.0);
const numero7 = Symbol("3");
const numero8 = Symbol("3.0");
const numero9 = Symbol(3); 

console.log(`Imprimiedo los valores y tipos de dato: 
    numero1,  valor: ${numero1}, tipoDato: ${typeof(numero1)}
    numero2,  valor: ${numero2}, tipoDato: ${typeof(numero2)}
    numero3,  valor: ${numero3}, tipoDato: ${typeof(numero3)}
    numero4,  valor: ${numero4}, tipoDato: ${typeof(numero4)}
    numero5,  valor: ${numero5.description}, tipoDato: ${typeof(numero5)}
    numero6,  valor: ${numero6.description}, tipoDato: ${typeof(numero6)}
    numero7,  valor: ${numero7.description}, tipoDato: ${typeof(numero7)}
    numero8,  valor: ${numero8.description}, tipoDato: ${typeof(numero8)}
    `)

/* Realizando un par de validaciones*/
if(numero1 == numero2 )
    console.log("Se comparó el valor de numero1 y numero2 evaluando que son iguales en valor");
else 
    console.log("Se comparó el valor de numero1 y numero2 evaluando que son diferentes en valor");

if(numero1 == numero3 )
    console.log("Se comparó el valor de numero1 y numero3 evaluando que son iguales en valor");
else 
    console.log("Se comparó el valor de numero1 y numero3 evaluando que son diferentes en valor");

if(numero1 === numero3 )
    console.log("Se comparó el valor de numero1 y numero3 evaluando que son iguales en valor");
else 
    console.log("Se comparó el valor de numero1 y numero3 evaluando que son iguales en valor pero diferente tipo de dato");

if(numero1 == numero4 )
    console.log("Se comparó el valor de numero1 y numero4 evaluando que son iguales en valor");
else 
    console.log("Se comparó el valor de numero1 y numero4 evaluando que son iguales en valor pero diferente tipo de dato");

if(numero1 === numero4 )
    console.log("Se comparó el valor de numero1 y numero4 evaluando que son iguales en valor");
else 
    console.log("Se comparó el valor de numero1 y numero4 evaluando que son iguales en valor pero diferente tipo de dato");

if(numero1 == numero5 )
    console.log("Se comparó el valor de numero1 y numero5 evaluando que son iguales en valor");
else 
    console.log("Se comparó el valor de numero1 y numero5 evaluando que son iguales en valor pero diferente tipo de dato");

if(numero5 == numero9 )
    console.log("Se comparó el valor de numero1 y numero9 evaluando que son iguales en valor");
else 
    console.log("Se comparó el valor de numero1 y numero9 evaluando que son iguales en valor pero diferente tipo de dato");


/* 7. NULL (NULO) */
/* Este tipo de datos es similar a UNDEFINED,con la diferencia de que los usuarios o el sistema es conciente que se le asigno este valor */
console.warn("7. NULL (NULO o Vacío)")

let isPremiumUser;
let isUserLoged; 
var todayDate = new Date(); 
var lastLogin = todayDate;
let isNewUser; 

console.log(`Las variables del usuario son: 
    isPremiumuser,  valor: ${isPremiumUser},  tipo: ${typeof(isPremiumUser)}
    isUserLoged,  valor: ${isUserLoged},  tipo: ${typeof(isUserLoged)}
    isNewUser,  valor: ${isNewUser},  tipo: ${typeof(isNewUser)}
    `);

    /* Durante la navegación del usuario en la plataforma en algun punto ingresa sus credenciales y se valida en base datos*/

    /* Simulando que las credenciales fueron correctas */
 isUserLoged = true;
 isPremiumUser = null;
 if(lastLogin == todayDate)
    isNewUser = true;
else 
    isNewUser = false; 

console.log(`Las variables del usuario son: 
    isPremiumuser,  valor: ${isPremiumUser},  tipo: ${typeof(isPremiumUser)}
    isUserLoged,  valor: ${isUserLoged},  tipo: ${typeof(isUserLoged)}
    isNewUser,  valor: ${isNewUser},  tipo: ${typeof(isNewUser)}
    `);

// funciones en java script

// 1. funciones procedurales: funcionews vacías o funciones que no retornar un valor

function saludar() {
    console.log("bienvenido al sistema")
}

console.warn("1. Funciones Procedurales")
saludar()

// 1. funciones procedurales con parametros de entradas, es decir, q reciben datos para funcionar

function saludarUsuario(nombreUsuario, generoUsuario){
    if (generoUsuario=="H") {
        console.log(`Bienvenido ${nombreUsuario} al sistema de Bienes Raíces`)
    } else if (generoUsuario=="M") {
        console.log(`Bienvenida ${nombreUsuario} al sistema de Bienes Raíces`)
    } else {
        console.log(`Bienvenidx ${nombreUsuario} al sistema de Bienes Raíces`)
    }
}

console.warn("2. Funciones procedurales con parámetros de entrada")

console.log("nombreUsuario='Antonio', generoUsuario='H'")
saludarUsuario("Antonio", "H")

console.log("nombreUsuario='Lizbeth', generoUsuario='M'")
saludarUsuario("Lizbeth", "H")

console.log("nombreUsuario='QQQ', generoUsuario='null'")
saludarUsuario("QQQ", null)

//3. Funciones que retornan un valor pero que no reciben parametros (datos de entrada)

function fechaActual() {
    const fecha = new Date(); //milisegundos
    const dia = ["Domingo", "Lunes", "martes", "miercoles", "jueves", "viernes", "sabado"]
    const mes = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]

    const fecha_formatoMX = `${dia[fecha.getDay()]}, ${fecha.getDate()} de ${mes[fecha.getMonth()]} de ${fecha.getFullYear()}.`;

    return fecha_formatoMX;
}

console.log("3. Funciones que retornan un valor pero tienen parametros de entrada")
let hoy = fechaActual()
console.log(`Bienvenid@ al Sistema de Bienes Raíces, hoy es: ${hoy}`);
console.log(fechaActual);
console.log(`${typeof(fechaActual)}`);

//4. funciones que retornan un valor y reciben parametros de entrada

function login(username, password) {

    let userValidation=false;
    if (username=="admin" && password=="12345") {
        console.log("Bienvenido, usuario Admin")
        userValidation=true;
    } else if (username==="admin" && password!="12345") {
        console.log("Lo siento la contraseña es incorrectwa")
        userValidation=false;
    } else if (username!="admin" && password=="12345") {
        console.log("este nombre de usuario no existe")
        userValidation=false;
    } else if (username!="admin" && password!="12345") {
        console.log("por favor veridfica tus credenciales")
        userValidation=false;
    }

    return userValidation

}

console.warn("4. funciones que retornan un valor y reciben parametros de entrada")
var loginStatus;

// test 1, usuario y contraseña correctos
console.log("test 1, usuario='admin' y contraseña '12345'");
loginStatus = login("admin", "12345");
console.log(`${loginStatus ? 'El usuario admin se ha logeado exitosamente' : 'Hubo un error en login del usuario admin'}`);

console.log("")

// test 2,contraseña incorrecta
console.log("test 1, usuario='admin' y contraseña '123456'");
loginStatus = login("admin", "123456");
console.log(`${loginStatus ? 'El usuario admin se ha logeado exitosamente' : 'Hubo un error en login del usuario admin'}`);

console.log("")

// test 1, usuario incorrecto
console.log("test 1, usuario='admim' y contraseña '12345'");
loginStatus = login("admim", "12345");
console.log(`${loginStatus ? 'El usuario admin se ha logeado exitosamente' : 'Hubo un error en login del usuario admin'}`);

console.log("")

// test 1, usuario y contraseña correctos
console.log("test 1, usuario='antoniooo' y contraseña '061031'");
loginStatus = login("antoniooo", "061031");
console.log(`${loginStatus ? 'El usuario admin se ha logeado exitosamente' : 'Hubo un error en login del usuario admin'}`);

// 5. fhncionew anonikas sin perametros (ver extendida)

isNewUser = function(){
    const hoy = new Date();
    return (
        lastLogin.getFullYear() == hoy.getFullYear() &&
        lastLogin.getMonth() == hoy.getMonth() &&
        lastLogin.getDate() == hoy.getDate()
    );
};

console.warn("5. Funciones anónimas, sin parámetros");

console.log("test 1 - fecha de ultimo acceso es igual a la fecha de hoy");
console.log(`la fecha de tu utlimo acceso es: ${lastLogin}`);
console.log(`el usuario logeado es ${isNewUser()?"nuevo usuario":"usuario antiguo"}`);

console.log("");

lastLogin = new Date("2025-12-31");
console.log("test 1 - fecha de ultimo acceso es diferente a la fecha de hoy");
console.log(`la fecha de tu utlimo acceso es: ${lastLogin}`);
console.log(`el usuario logeado es ${isNewUser()?"nuevo usuario":"usuario antiguo"}`);

// funciones anonimas con paramertros (arrow o lambda)

const sumar = (a, b) => {
    let resultado = a+b;
    return resultado;
}

console.warn("6. funcuones anónimas con parámetros")
console.log(`El resultado de sumar de 15 + 83 es: ${sumar(15, 83)}`);

//cuandio la funcon anonima tiene solo una linea de operacion se puede usar una version simplificada q no usa (), {}, ni la palabra reservada return
const multiplicar = (a,b) => a*b;
console.log(`El resultado de multiplicar 15 por 125 es: ${multiplicar(15,125)}`);

console.warn("7. funciones anonimas callback (respuestas)")
const recoverPassword = function(email, callback)
{

    const recoveryCode= Math.floor(1000000 + Math.random()*900000)

    console.log(`

        ==============================================================================

        solicitud de recuperacion recivida
        correo del usuario sollicitante: ${email}
        generando codigo de recuperacion...
        codigo de sguridad generado: ${recoveryCode}
        enviando el correo al usuario...
        correo enviado a : ${email}, con el codigo de seguridad: ${recoveryCode}
        ========================================================================================`);

        const response ={
            status: "ok",
            message: "codigo de recuperacion enviando satisfactoriamente."
        };

        callback(response);
    };


    recoverPassword("antonioo@mail.com",
    function(systemResponse){
        console.log("Respuesta del sistema: ");
        console.log(systemResponse.message);
    });