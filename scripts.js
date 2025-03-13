document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert("¡Gracias por tu mensaje, " + name + "! Nos pondremos en contacto contigo pronto.");
    } else {
        alert("Por favor, completa todos los campos.");
    }
});
