/*INPUTS*/
var ContenedorNombre = document.getElementById('ContenedorNombre');
var ContenedorTags = document.getElementById('ContenedorTags');
var Nombre = document.getElementById('Nombre');
var Tags = document.getElementById('Tags');
var InputNombre = document.getElementById('InputNombre');
var InputTags = document.getElementById('InputTags');
var btnBorrar = document.getElementById('icon-bin');
var BtnCancelar = document.getElementById('icon-cross');
var Lista = document.getElementById('Lista');

Nombre.addEventListener("click", function () {
    Nombre.setAttribute("style", "font-size: 1em; transition: 0.5s all ease;");
    InputNombre.setAttribute("style", "display: block; transition: 0.5s all ease;");
})

InputNombre.addEventListener("focus", function () {
    ContenedorNombre.className = "ContenedorInputs ContenedorFocus";
})

InputNombre.addEventListener("blur", function () {
    ContenedorNombre.className = "ContenedorInputs";

    if (InputNombre.value == 0) {
        Nombre.setAttribute("style", "font-size: 1.5em; transition: 0.5s all ease;");
        InputNombre.setAttribute("style", "display: none; transition: 0.5s all ease;");
    }
})

Tags.addEventListener("click", function () {
    Tags.setAttribute("style", "font-size: 1em; transition: 0.5s all ease;");
    InputTags.setAttribute("style", "display: block; transition: 0.5s all ease;");
})

InputTags.addEventListener("focus", function () {
    ContenedorTags.className = "ContenedorInputs ContenedorFocus";
})

InputTags.addEventListener("blur", function () {
    ContenedorTags.className = "ContenedorInputs";

    if (InputTags.value == 0) {
        Tags.setAttribute("style", "font-size: 1.5em; transition: 0.5s all ease;");
        InputTags.setAttribute("style", "display: none; transition: 0.5s all ease;");
    }
})

/*TEXTAREA*/
var TipoLetra = document.getElementById('TipoLetra');
var TamañoLetra = document.getElementById('TamañoLetra');
var ColorLetra = document.getElementById('ColorLetra');
var Text = document.getElementById('Text');

TipoLetra.addEventListener("change", function () {
    if (TipoLetra.value == "Cursive") {
        Text.setAttribute("style", "font-family: cursive;")
    } else if (TipoLetra.value == "Arial") {
        Text.setAttribute("style", "font-family: Arial;")
    } else if (TipoLetra.value == "Fantasy") {
        Text.setAttribute("style", "font-family: Fantasy;")
    } else if (TipoLetra.value == "Verdana") {
        Text.setAttribute("style", "font-family: Verdana;")
    }
})

TamañoLetra.addEventListener("change", function () {
    if (TamañoLetra.value == "1") {
        Text.setAttribute("style", "font-size: 0.8em;")
    } else if (TamañoLetra.value == "3") {
        Text.setAttribute("style", "font-size: 1em;")
    } else if (TamañoLetra.value == "5") {
        Text.setAttribute("style", "font-size: 1.4em;")
    } else if (TamañoLetra.value == "8") {
        Text.setAttribute("style", "font-size: 1.8em;")
    }
})

ColorLetra.addEventListener("change", function () {
    if (ColorLetra.value == "Negro") {
        Text.setAttribute("style", "color: #000;")
    } else if (ColorLetra.value == "Azul") {
        Text.setAttribute("style", "color: darkblue;")
    } else if (ColorLetra.value == "Gris") {
        Text.setAttribute("style", "color: gray;")
    } else if (ColorLetra.value == "Rojo") {
        Text.setAttribute("style", "color: darkred;")
    }
})

//GUARDAR NOTAS
BtnGuardar.addEventListener("click", function () {
    //alert("EL titulo es: " + InputNombre.value + " y el contenido es: " + Text.value);

    var BtnGuardar = document.getElementById('BtnGuardar'),
        Nota = document.createElement('li'),
        TituloNota = document.createElement('h4'),
        ContenidoNota = document.createElement('p'),
        CheckBox = document.createElement('input');

    var GuardarNota = function () {
        Nota.className = "Notas";
        Nota.appendChild(TituloNota);
        Nota.appendChild(ContenidoNota);
        TituloNota.appendChild(document.createTextNode(InputNombre.value))
        ContenidoNota.appendChild(document.createTextNode(Text.value))
        Lista.appendChild(Nota);

        if (Text.value.length >= 30) {}

        /*Funciones*/
        var EliminarNota = function () {
            this.parentNode.removeChild(this);
            ListaCount();
        }


        var Borrar = function () {
            CheckBox.setAttribute("type", "checkbox");
            CheckBox.setAttribute("name", "Borrar");
            CheckBox.setAttribute("class", "BorrarNotas");
            Nota.className = "Notas SelectNoteDel";
            Nota.appendChild(CheckBox);
            BtnCancelar.className = "icon-cross icon-crossCancelar";
            
            for (var i = 0; i <= Lista.children.length - 1; i++) {
                Lista.children[i].addEventListener("click", EliminarNota)
            }  
            ListaCount();
        }
        
        var ListaCount = function(){
            if(Lista.children.length == 1){
                BtnCancelar.className = "icon-cross";
            }
        }

        var Cancelar = function () {
            BtnCancelar.className = "icon-cross";
            Nota.removeChild(CheckBox);
        }

        btnBorrar.addEventListener("click", Borrar);

        BtnCancelar.addEventListener("click", Cancelar);
    }

    if (InputNombre.value == 0) {
        ContenedorNombre.className = "ContenedorInputs ContenedorFocus";
    } else {
        document.getElementById('Msj').setAttribute("style", "display: none;");
        btnBorrar.setAttribute("style", "display: block;")
        BtnCancelar.className = "icon-cross";
        GuardarNota();
    }
})
