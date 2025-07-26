// Control menú responsive
let menuVisible = false;

function mostrarOcultarMenu() {
  const nav = document.getElementById("nav");
  if (menuVisible) {
    nav.classList = "";
    menuVisible = false;
  } else {
    nav.classList = "responsive";
    menuVisible = true;
  }
}

function seleccionar() {
  document.getElementById("nav").classList = "";
  menuVisible = false;
}

// Animación de habilidades al hacer scroll
function efectoHabilidades() {
  const skills = document.getElementById("skills");
  const distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 300) {
    const habilidades = document.getElementsByClassName("progreso");
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
}

// Descargar CV
document.getElementById('download-button').addEventListener('click', () => {
  const link = document.createElement('a');
  link.href = '/doc/CV Luis Raúl Martinez .pdf'; // Ajusta ruta si es necesario
  link.download = 'CV.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

// Aplicar animación habilidades al hacer scroll
window.addEventListener('scroll', efectoHabilidades);

// EmailJS: inicialización y envío de formulario
document.addEventListener("DOMContentLoaded", () => {
  emailjs.init("f4JxE9G_DaVeeXh7n"); // Tu Public Key

  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Limpiar mensajes de error
    ["name", "email", "title", "message"].forEach(id => {
      document.getElementById("error-" + id).textContent = "";
    });

    // Validación simple
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const title = form.title.value.trim();
    const message = form.message.value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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

    if (!valid) return;

    // Enviar con EmailJS (cambia serviceID y templateID a los tuyos)
    emailjs.sendForm("service_pros", "template_c4s62rq", form)
      .then(() => {
        alert("Mensaje enviado correctamente.");
        form.reset();
      })
      .catch((error) => {
        alert("Error al enviar el mensaje, intenta de nuevo.");
        console.error(error);
      });
  });
});





