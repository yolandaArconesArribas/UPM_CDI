function loadNumberOrder() {
    cargar_Orden()
}

function loadNumberClient() {
    cargar_Cliente()
}

function cargar_Cliente() {
    let aux = obtenerdatos("db_usuarios");
    var clientes=[];
    for(var i=0; i<aux.length; i++)clientes[i]=aux[i].Nombre+" "+aux[i].Apellido;
    addOptions("inputClient", clientes);
}

// funcion para Cargar numero orden <select>
function cargar_Orden() {
    let aux = obtenerdatos("db_encargado");
    var encargado=[];
    for(var i=0; i<aux.length; i++)encargado[i]=aux[i].Nombre+" "+aux[i].Apellido;
    addOptions("inputStuff", encargado);
}

// Rutina para agregar opciones a un <select>
function addOptions(domElement, array) {
    var select = document.getElementsByName(domElement)[0];

    for (value in array) {
        var option = document.createElement("option");
        option.text = array[value];
        select.add(option);
    }
}

