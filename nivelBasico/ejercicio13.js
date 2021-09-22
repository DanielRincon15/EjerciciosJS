//ejemplo 2

let nombre =prompt("Ingresa tu nombre");
let color = prompt( nombre + " Ingresa tu color favorito");

switch (color){
    case "amarillo":
        alert("Eres una persona alegre");
        break;

        case "azul":
            alert("Eres una persona tranquila");
            break;

            case "verde":
                alert("Eres una persona saludable");
                break;
    
    default:
        alert("Por favor ingresa un color");
        break;
                
}
