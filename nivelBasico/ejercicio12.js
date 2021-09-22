//Condicionales - Switch
//Funcionan similar a las condicionales, pero que a diferencia de la
//condicion normal
//La condicion switch solo puede validar una sola condicion entre varias

let nombre = prompt("Ingresa tu nombre ");
let edad = prompt ("Ingresa tu edad ");

switch (edad) {
    case "18":
        alert("Tienes acceso al catalogo de peliculas violentas")
        
        break;

        case "25":
            alert("Tienes acceso al catalogo de peliculas violentas")
        
        break;

        case "35":
            alert("Tienes acceso al catalogo de peliculas violentas")
        
        break;

    default:
        alert("Debes ser mayor de 18 años para acceder al catalogo")
        break;

}