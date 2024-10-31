let traductor = "peru";
let mensajeTraductor = "";


switch (traductor) {
    case "gato":
        mensajeTraductor = "cat";

        break;
    case "puerta":
        mensajeTraductor = "Door";
        break;
    case "ventana":
        mensajeTraductor = "Window";
        break;
    case "mesa":
        mensajeTraductor = "Table";
        break;

    default:
    mensajeTraductor= "La palabra ingresada es incorrecta"
        break;
}
console.log(mensajeTraductor)
