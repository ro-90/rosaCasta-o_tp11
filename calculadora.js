
let operador= "suma"

let num1=2;

let num2=2;


let resultado=""

switch (operador) {
    case  "suma":
        resultado="el resultado de sumar"+ num1+ "+"+num2+ "es"+(resultado=num1+num2);
        
        break;
        case"resta":
        resultado="el resultado de "+num1+"-"+num2+" "+"es"+(resultado=num1-num2);
        break;

         case"multiplicar":
         resultado="el resultado de "+num1+"*"+num2+" "+"es"+(resultado=num1*num2);
         break;

         case"dividir":
         resultado="el resultado de"+num1+"/"+num2+" "+"es"+(resultado=num1/num2);
         break;


    default:
        resultado="las operaciones aceptadas son :sumar-restar-multiplicar-dividir"
        break;
}
console.log(resultado)