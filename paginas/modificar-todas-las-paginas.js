//SECTION AUTOGENERADA 0 (MENÚ) - Generamos un div con un menú que se modifica desde acá en todas las páginas.

let sectionAutogenerada0 = document.querySelector(".section-autogenerador-0"); //Seleccionamos el div donde vamos a introducir

const divCreado0 = document.createElement("div"); //Creamos el div a introducir

divCreado0.classList.add("contenedor-menu"); //Le agregamos la clase necesaria
            
const contenidoAutoGenerado0 = //Genermoas el contenido del div. Las `` siguientes se utilizan para hacer un html literal
                `
                <div class="menu">
                    <a class="elemento-menu" href="https://www.instagram.com/destino_playas/"><i class="fa-solid fa-house"></i></a>
                    <a class="elemento-menu" href="https://www.instagram.com/destino_playas/"><i class="fa-brands fa-instagram"></i></a>
                </div>
                `; 

divCreado0.innerHTML = contenidoAutoGenerado0; //Le atribuimos el html al div.

sectionAutogenerada0.append(divCreado0); //Se lo adjudicamos a la sección autogenerada 0