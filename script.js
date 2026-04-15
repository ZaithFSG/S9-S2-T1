document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Capturar elementos
    const form = document.getElementById('contactForm');
    const success = document.getElementById('successMessage');    
    //
    form.classList.add('hidden');
    success.classList.remove('hidden');

    // redirecciona
    setTimeout(() => {
        window.location.href = "index.html";
    }, 2500);
});