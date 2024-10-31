

let perfil= " "


if(perfil==="administrador"){
    console.log("usted tiene todos los privilegios de uso del sistema"); }

else if(perfil==="asistente"){
    console.log("usted solo tiene permiso de registrar,modificar y consultar datos" );
}
else if(perfil==="invitado"){
    console.log("usted solo tiene permiso de consultar datos");
}
else if( perfil=== " "){
    console.log("debe especificar el perfil del usuario")
}
else{console.log("debe especificar un perfil valido")
    }
                                          
     