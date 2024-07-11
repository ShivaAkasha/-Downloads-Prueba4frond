document.getElementById('form-registro').addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    if (usuarios.some(usuario => usuario.email === email)) {
        alert('El email ya está registrado.');
        return;
    }

    const nuevoUsuario = {
        id: Date.now(),
        nombre,
        email,
        password
    };

    usuarios.push(nuevoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    alert('Registro exitoso. Ahora puedes iniciar sesión.');
    window.location.href = 'login.html';
});


