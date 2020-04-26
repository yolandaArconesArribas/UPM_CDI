


GuardarDatos("db_usuarios",data_user);

function GuardarDatos(tbl_name, data) {
    sessionStorage.setItem(tbl_name, JSON.stringify(data));
}

/*
let text = obtenerdato();
console.log(text[0].Usuarios[1]);
var newdato = text[0].Usuarios.push (
    {
        "_id": "5ea49604d758d020b58ea19d",
        "Nombre": "Marisol",
        "Apellido": "Knox",
        "DNI": "20334366T",
        "CodigoPostal": 1685,
        "Localidad": "Atocha",
        "Telefono": "+34 (871) 443-3476",
        "Email": "marisolknox@hawkster.com",
        "TarjetaFidelizacion": "1529A",
        "PuntosAcumulados": 341
    });
console.log(text)

    var map = new Map(Object.entries(text));
    console.log(map);
    const iterator1 = map.values();
    console.log(iterator1.next());
    console.log(iterator1.next().value[1].Apellido);
*/




