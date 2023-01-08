// 1) DATOS DE LOS CONTINENTES

const america = {
    
    "brasil":[
        {
            "nombre": "Brasil",

            "url": "",

            "imagenBandera": "images/brasil-bandera-02.png",
            
            "imagenDestino": "images/brasil-02.jpg",
        }
    ],

    "mexico":[
        {
            "nombre": "México",

            "url": "",

            "imagenBandera": "images/mexico-bandera-02.png",
            
            "imagenDestino": "images/mexico-02.jpg",
        }
    ],

    "colombia":[
        {
            "nombre": "Colombia",

            "url": "",

            "imagenBandera": "images/colombia-bandera-02.png",
            
            "imagenDestino": "images/colombia-02.jpg",
        }
    ],

    "argentina":[
        {
            "nombre": "Argentina",

            "url": "",

            "imagenBandera": "images/argentina-bandera-02.png",
            
            "imagenDestino": "images/argentina-02.jpg",
        }
    ],

    "uruguay":[
        {
            "nombre": "Uruguay",

            "url": "",

            "imagenBandera": "images/uruguay-bandera-02.png",
            
            "imagenDestino": "images/uruguay-02.jpg",
        }
    ],

    "panama":[
        {
            "nombre": "Panamá",

            "url": "",

            "imagenBandera": "images/panama-bandera-02.png",
            
            "imagenDestino": "images/panama-02.jpg",
        }
    ],

}

const asia = {
    
    "maldivas":[
        {
            "nombre": "Maldivas",

            "url": "",

            "imagenBandera": "images/maldivas-bandera-02.png",
            
            "imagenDestino": "images/maldivas-02.jpg",
        }
    ],

    "tailandia":[
        {
            "nombre": "Tailandia",

            "url": "",

            "imagenBandera": "images/tailandia-bandera-02.png",
            
            "imagenDestino": "images/tailandia-02.jpg",
        }
    ],

    "malasia":[
        {
            "nombre": "Malasia",

            "url": "",

            "imagenBandera": "images/malasia-bandera-02.png",
            
            "imagenDestino": "images/malasia-02.jpg",
        }
    ],


}

// 2) FUNCIÓN QUE MUESTRA LOS PAÍSES (Esta función se ejecuta para que aparezca la información al iniciar la página. Luego, la función "clicnEnBotonContinente" permite el filtrado por continente).

function mostrarPaisesDelContinenteElegido(a){

    //Función que muestra los países del continente seleccionado

    let imagenBandera = "";
    let imagenDestino = "";
    let urlPaginaPais = "";
    let nombrePais = "";

    let bloquerAutogenerador = document.querySelector(".bloque-autogenerador");

    for (prop in a){

        let imagenBandera = (a[prop][0].imagenBandera);
        let imagenDestino = (a[prop][0].imagenDestino);
        let urlPaginaPais = (a[prop][0].url);
        let nombrePais = (a[prop][0].nombre);

        const elementoAutoGenerado = document.createElement("a");

        const contenidoAutoGenerado = //Las `` siguientes se utilizan para hacer un html literal
                `
                <a href="${urlPaginaPais}" class="contenedor-autogenerado" style="background-image: url(${imagenDestino})">
      
                    <img class="bandera" src=${imagenBandera} alt="Bandera país">
                    <p class="nombre-pais">${nombrePais}</p>
                    <span class="barra-pais"></span>

                </a>

                `; 

        elementoAutoGenerado.innerHTML = contenidoAutoGenerado;

        bloquerAutogenerador.append(elementoAutoGenerado);

            }

 }

 //Ejecutamos la función con todos los continentes (los comentados son porque todavía no los visité)

 mostrarPaisesDelContinenteElegido(america);
 mostrarPaisesDelContinenteElegido(asia)
//  mostrarPaisesDelContinenteElegido(europa);
//  mostrarPaisesDelContinenteElegido(africa)
//  mostrarPaisesDelContinenteElegido(oceania);


// 3) FUNCIÓN QUE PERMITE FILTRAR POR CONTINENTE (A la función le pasamos el parámetro "a" y luego la ejecutamos con todos los continentes. Esto es para que sea reutilizable la función). Los botones permiten el filtrado, es decir, muestra solamente los que corresponden al continente elegido.

function clickEnBotonContinente (a) {

    let continenteElegido = document.querySelector(a);

    continenteElegido.addEventListener("click", function() {

        let bloquerAutogenerador = document.querySelector(".bloque-autogenerador"); //Seleccionas el bloque donde se genera el HTML de los países.
        bloquerAutogenerador.innerHTML=""; //Limpiamos la información preexistente del bloque. (Esto es para que no se repita información).

        //Los dataset.nombrecontinente están en el HTML

        if (continenteElegido.dataset.nombrecontinente == "america"){
            mostrarPaisesDelContinenteElegido(america)
        }

        if (continenteElegido.dataset.nombrecontinente == "europa"){
            mostrarPaisesDelContinenteElegido(europa)
        }

        if (continenteElegido.dataset.nombrecontinente == "asia"){
            mostrarPaisesDelContinenteElegido(asia)
        }

        //Los continentes de abajo todavía no los visité, para activarlos, hay que generar un objeto con la info igual que los otros continentes y a su vez, hay que habilitar para que se vean los botones mediante el css "styles-tips.css" cambiando el display:none de las clases "africa" y "oceania".

        if (continenteElegido.dataset.nombrecontinente == "africa"){
            mostrarPaisesDelContinenteElegido(europa)
        }

        if (continenteElegido.dataset.nombrecontinente == "oceania"){
            mostrarPaisesDelContinenteElegido(asia)
        }

    });

}

//Ejecutamos la función con todos los continentes

clickEnBotonContinente(".america")
clickEnBotonContinente(".asia")
clickEnBotonContinente(".europa")
clickEnBotonContinente(".africa")
clickEnBotonContinente(".oceania")