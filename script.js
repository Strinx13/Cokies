document.addEventListener("DOMContentLoaded", function() {
  // Eliminar cualquier dato previo para pruebas (después de las pruebas, puedes eliminar esta línea)
  localStorage.removeItem("cookieConsent");

  // Verificar si el usuario ya aceptó las cookies
  if (!localStorage.getItem("cookieConsent")) {
    Swal.fire({
      title: "<strong><u>Aceptar Cookies</u></strong>",
      imageUrl: 'img/image-removebg-preview.png', // URL de la imagen de la galleta
      imageWidth: 100, // Ajustar el tamaño de la imagen
      imageHeight: 100,
      imageAlt: 'Galleta',
      html: `
        Acepta Nuestras Cookies, 
        para seguir navegando libremente.
      `,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: `
        <i class="fa fa-thumbs-up"></i> Aceptar
      `,
      confirmButtonAriaLabel: "Thumbs up, great!",
      cancelButtonText: `
        <i class="fa fa-thumbs-down"></i>No
      `,
      cancelButtonAriaLabel: "Thumbs down",
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
      }
    }).then((result) => {
      if (result.isConfirmed) {
        // Guardar la aceptación en localStorage
        localStorage.setItem("cookieConsent", "true");
      }
    });
  }
});
