document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que la página se recargue

    const name = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const form = document.getElementById('contactForm');
    const success = document.getElementById('successMessage');

    if (name === "" || email === "") {
        alert("Por favor, rellena los campos obligatorios.");
        return;
    }

    // Simulación de envío
    console.log("Enviando datos...", { name, email });
    
    form.style.display = 'none';
    success.classList.remove('hidden');
});