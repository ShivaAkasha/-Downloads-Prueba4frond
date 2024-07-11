
document.getElementById('form-login').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const usuario = usuarios.find(usuario => usuario.email === email && usuario.password === password);

    if (usuario) {
        alert('Inicio de sesión exitoso.');
        localStorage.setItem('usuarioActual', JSON.stringify(usuario));
        window.location.href = 'server_ing.html'; // Redirige a la página server_ing.html después del login
    } else {
        alert('Email o contraseña incorrectos.');
    }
});
