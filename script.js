let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

document.querySelector(".nav-responsive").addEventListener("click", () => {
    // Aquí se alterna la clase "active" en el contenedor del menú
    document.querySelector(".contenedor-header").classList.toggle("active");
  });
  

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}


//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }

    // Función para manejar la descarga del CV
document.getElementById('download-button').addEventListener('click', function() {
    // Crea un enlace invisible
    var link = document.createElement('a');
    link.href = '/doc/CV Luis Raúl Martinez .pdf'; // Reemplaza con la ruta de tu archivo
    link.download = 'CV.pdf'; // Nombre con el que se guardará el archivo

    // Simula un clic en el enlace para iniciar la descarga
    document.body.appendChild(link);
    link.click();

    // Elimina el enlace después de la descarga
    document.body.removeChild(link);
});
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 



// Inicializar EmailJS cuando el DOM esté listo

document.addEventListener("DOMContentLoaded", () => {
  // Inicializa EmailJS con tu public key
  emailjs.init("f4JxE9G_DaVeeXh7n");

  const form = document.getElementById("contact-form");

  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Detiene el envío tradicional

    // Limpiar errores
    ["name", "email", "title", "message"].forEach(id => {
      document.getElementById("error-" + id).textContent = "";
    });

    // Validar datos (ejemplo básico)
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const title = form.title.value.trim();
    const message = form.message.value.trim();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let valid = true;

    if (name.length < 2) {
      document.getElementById("error-name").textContent = "Nombre muy corto.";
      valid = false;
    }
    if (!emailRegex.test(email)) {
      document.getElementById("error-email").textContent = "Correo no válido.";
      valid = false;
    }
    if (title.length < 3) {
      document.getElementById("error-title").textContent = "Asunto muy corto.";
      valid = false;
    }
    if (message.length < 10) {
      document.getElementById("error-message").textContent = "Mensaje muy corto.";
      valid = false;
    }

    if (!valid) return; // Si no pasa validación, no envía

    // Envía con EmailJS
    emailjs.sendForm("service_pros", "template_c4s62rq", form)
      .then(() => {
        alert("Mensaje enviado correctamente.");
        form.reset();
      })
      .catch((error) => {
        alert("Error al enviar el mensaje.");
        console.error(error);
      });
  });
});




