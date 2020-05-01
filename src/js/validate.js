function showPass() {
    var tipo = document.getElementById("validationServer055");
    var tipo2 = document.getElementById("Pass");
    if (tipo.type == "password" && tipo2.type == "password") {
        tipo.type = "text";
        tipo2.type = "text";
        $('.icon').removeClass('fa fa-eye-slash').addClass('fa fa-eye');
    } else {
        tipo.type = "password";
        tipo2.type = "password";
        $('.icon').removeClass('fa fa-eye').addClass('fa fa-eye-slash');
    }
}

(function validatepass() {
    'use strict';
    window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

$('document').ready(function()
{
    // name validation
    var nameregex = /^[a-zA-Z ]+$/;
    var passregex = /^[a-zA-Z0-9]+$/;

    $.validator.addMethod("validname", function( value, element ) {
        return this.optional( element ) || nameregex.test( value );
    });
    $.validator.addMethod("validpass", function( value, element ) {
        return this.optional( element ) || passregex.test( value );
    });


    $("#register-form").validate({

        rules:
            {
                Nombre: {
                    required: true,
                    validname: true,
                },
                Apellido: {
                    required: true,
                    validname: true,
                },

                DNI: {
                    required: true,
                    validpass: true,
                },

                Pass: {
                    required: true,
                    validpass: true,
                    minlength: 4,
                    maxlength: 15
                },
                cpassword: {
                    required: true,
                    equalTo: '#Pass'
                },
            },
        messages:
            {
                Nombre: {
                    required: "Por favor introduzca nombre",
                    validname: "El nombre debe contener espacios y letras del alfabeto",
                },
                Apellido: {
                    required:  ("Por favor introduzca apellidos"),
                    validname: "El apellido debe contener espacios y letras del alfabeto"
                },

                DNI: {
                    required: "Por favor introduzca nombre de usuario",
                    validpass: "El nombre debe contener numeros y letra del alfabeto",
                },

                Pass:{
                    required: "Por favor introduzca contraseña",
                    minlength: "Debe tener >4 y <15 caracteres",
                    validpass: "Introduzca contraseña sin espacios"
                },
                cpassword:{
                    required: "Por favor, repita contraseña",
                    equalTo: "¡ Contraseña no coincide !"
                }
            },


        errorPlacement : function(error, element) {
            $(element).closest('.form-row').find('.help-block').html(error.html());
        },
        highlight : function(element) {
            $(element).closest('.form-row').removeClass('has-success').addClass('has-error');
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).closest('.form-row').removeClass('has-error').addClass('has-success');
            $(element).closest('.form-row').find('.help-block').html('');
        },

        submitHandler: function(form) {
            form.submit();
            var _id =Math.random()*10000000000000000000000000000000000000;
            _id.toString();
            var client={};
            client[0]=_id;
            var x = $("form").serializeArray();
            var k=1;
            $.each(x, function(i, field){
                var obj= field.value ;
                if(k<5) {
                    client[k] = obj;
                    k++;
                }
            });
            var aux=addNewUser(client[0],client[1],client[2],client[3],client[4]);
            let User = obtenerdatos("db_encargado");
            User.push(aux);
            console.log(User);
            GuardarDatos("db_encargado",User);
            window.location.replace('login.html');
        }
    });
});

function userLogging() {

    let User = obtenerdatos("db_encargado");
    var inputUserName = $("#validationCustomUsername").val();
    var inputUserPass = $("#validationCustomPassword").val();

    for (var i = 0; i < User.length; i++) {
        var USERNAME = User[i].DNI;
        var PASSWORD = User[i].Pass;
        if (USERNAME === inputUserName && PASSWORD === inputUserPass) window.location.replace('MisHerramientas.html');
    }
    var elem1=document.getElementById("validationCustomUsername");
    var elem2=document.getElementById("validationCustomPassword");
    elem1.style.borderColor = "red";
    elem2.style.borderColor = "red";
    alert("Contraseña o nombre de usuario incorrecto");
}

function addNewUser(id,nom,apel,dni,con){

    var aux1={
        "_id": id.toString(),
        "Nombre": nom,
        "Apellido": apel,
        "DNI": dni,
        "Pass":con
    };
    return aux1;
}