$('document').ready(function()
{
    $('#buttonRegisterOrder').on('click', function(e) {
        var fechaC=document.getElementById("reservationDate").value,
            fechaDC=document.getElementById("deliveryDate").value,
            stuffC=document.getElementById("selectStuff").value,
            clientC=document.getElementById("selectClient").value,
            prendaP=document.getElementById("selectPrenda").value,
            serviceC=document.getElementById("selectService").value;

            e.preventDefault();
            var order = {};
            var y = $("form").serializeArray();
            $.each(y, function (i, field) {
                order[i] = field.value;
            });
            let history = obtenerdatos("HistorialPedidos");
            var isChecked = document.getElementById('cbox2').checked;
            if (isChecked) {
                order[11] = "si"
            } else order[11] = "no";
            var aux = addNewOrder(history.length++, order[0], order[1], order[3], order[11]);
            if(fechaC==="" || fechaDC==="" || stuffC==="" ||  clientC===""|| prendaP===""|| serviceC==="") alert("error,faltan campos por rellenear");
            else{
                $("#myModal").modal({show:true});
                history.push(aux);
                GuardarDatos("HistorialPedidos",history);
                console.log(history);
            }

    })
});
function addNewOrder(nP,fechEnt,fechEntrga,est, exp){

    var aux1={
        "NumeroPedido": nP,
        "Fentrada": fechEnt,
        "Cliente": "Denegado",
        "Express": exp,
        "Fentrega": fechEntrga,
        "Puntos": 0,
        "Estado": est,
        "EnvioAvsios": "no"
    };
    return aux1;
}

$(function () {

    // INITIALIZE DATEPICKER PLUGIN
    $('.datepicker').datepicker({
        clearBtn: true,
        format: "dd/mm/yyyy",
        autoclose: true,

    });
    // FOR DEMO PURPOSE
    $('#reservationDate').on('change', function () {
        var pickedDate = $('input').val();
        $('#pickedDate').html(pickedDate);
    });
});
var selectAnt1=0;
$(function() { $('#precio').val(0);   });
$(".needs-validation-select-1").change(function (e) {
    var newPrice = parseFloat($(this).children(':selected').data('price'));
    var total=parseFloat($('#precio').val())-selectAnt1;
    total+=newPrice;
    selectAnt1=newPrice;
    $('#precio').val(total);
});
var selectAnt2=0;
$(function() { $('#precio').val(0);   });
$(".needs-validation-select-2").change(function (e) {
    var newPrice = parseFloat($(this).children(':selected').data('price'));
    var total=parseFloat($('#precio').val())-selectAnt2;
    total+=newPrice;
    selectAnt2=newPrice;
    $('#precio').val(total);
});
var selectAnt3=0;
$(function() { $('#precio').val(0);   });
$(".needs-validation-select-3").change(function (e) {
    var newPrice = parseFloat($(this).children(':selected').data('price'));
    var total=parseFloat($('#precio').val())-selectAnt3;
    total+=newPrice;
    selectAnt3=newPrice;
    $('#precio').val(total);
});
$(function() { $('#precio').val(0);   });
var selectAnt4=0;
$(".needs-validation-select-4").change(function (e) {
    var newPrice = parseFloat($(this).children(':selected').data('price'));
    var total=parseFloat($('#precio').val())-selectAnt4;
    total+=newPrice;
    selectAnt4=newPrice;
    $('#precio').val(total);
});

var total=0;

function sumar() {
    total = 7.5;
    var newPrice = parseFloat( $('#precio').val());
    newPrice+=total;
    $('#precio').val(newPrice);
}

function restar(valor) {
    total = 7.5;
    var newPrice = parseFloat( $('#precio').val());
    newPrice-=total;
    $('#precio').val(newPrice);
}