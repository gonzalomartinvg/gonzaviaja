//EXPLICACIÓN:

// Creamos objetos por cada país para poder relacionar todos los textos de esos países entre si. Luego creamos una función que recorre los objetos y reconoce a los destinos de un mismo país generando botones que permiten ir al siguiente destino relacionado. IMPORTANTE: En los HTMLS colocamos un dataset identficador de país que permite que el javascript imprima los destinos relacionados solo en las páginas de destinos pertenecientes a ese país.

//DATOS 

const brasil = {
    
    "rio-de-janeiro":[
        {
            "nombre": "Río de Janeiro (BRA)",

            "url": "rio-de-janeiro.html",
        }
    ],

    "ilha-grande":[
        {
            "nombre": "Ilha Grande (BRA)",

            "url": "ilha-grande.html",

        }
    ],

    "parati":[
        {
            "nombre": "Parati (BRA)",

            "url": "parati.html",
        }
    ],

    "arraial-do-cabo":[
        {
            "nombre": "Arraial (BRA)",

            "url": "rio-de-janeiro.html",

        }
    ],

    "Todos":[
        {
            "nombre": "Otros destinos",

            "url": "https://es.wikipedia.org/wiki/Paraty",
        }
    ]

}

//FUNCIÓN

function relacionados(a, b){

    let nombreDestino = ""
    let urlDestino = ""
    let contenedorRelacionados = document.querySelector(".contenedor-relacionados");

    if (contenedorRelacionados.dataset.identificadorpais == b){ //Validamos el país de la página actual.
    
        for (prop in a){

            if (prop != contenedorRelacionados.dataset.identificadordestino){ //Validamos el destino de  la página actual así no lo mostramos como relacionado.
            
            nombreDestino = (a[prop][0].nombre);
            urlDestino = (a[prop][0].url);

            const linkAutogenerado = document.createElement("a");
            const contenidoAutoGenerado = //Las `` siguientes se utilizan para hacer un html literal
                `
                <a class="caja-relacionados" href="${urlDestino}">
                    <p class="caja-titulo">${nombreDestino}</p>
                </a>
                `; 

            linkAutogenerado.innerHTML = contenidoAutoGenerado;

            contenedorRelacionados.append(linkAutogenerado);

            }
        }

    }
}

//EJECUCIÓN DE FUNCIONES CON DISTINTOS ARGUMENTOS. HAY QUE PASARLE DOS ARGUMENTOS, 1 ES EL OBJETO CON LOS DATOS QUE TIENE EL NOMBRE DEL PAÍS Y EL 2, ES UN STRING CON EL NOMBRE DEL IDENTIFICADOR DE PAÍS ESTABLECIDO EN EL HTML.

relacionados(brasil, "brasil");