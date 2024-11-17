// Función para registrar usuarios
function registerUser(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const genero = document.getElementById('genero').value;
    
    const user = {
        nombre,
        apellido,
        email,
        password,
        genero
    };
    
    localStorage.setItem(email, JSON.stringify(user));
    alert('Usuario registrado exitosamente');
    window.location.href = 'iniciar_sesion.html';
}

// Función para iniciar sesión
function loginUser(event) {
    event.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    const storedUser = localStorage.getItem(email);
    if (storedUser) {
        const user = JSON.parse(storedUser);
        if (user.password === password) {
            sessionStorage.setItem('loggedUser', JSON.stringify(user));
            alert('Inicio de sesión exitoso');
            window.location.href = 'inicio.html';
        } else {
            alert('Contraseña incorrecta');
        }
    } else {
        alert('Usuario no registrado');
    }
}

// Función para mostrar el nombre del usuario y cerrar sesión
function displayUser() {
    const loggedUser = JSON.parse(sessionStorage.getItem('loggedUser'));
    if (loggedUser) {
        document.getElementById('user-name').textContent = loggedUser.nombre;
        document.getElementById('logout').style.display = 'inline';
    }
}

function logout() {
    sessionStorage.removeItem('loggedUser');
    window.location.href = 'inicio.html';
}

window.onload = function() {
    displayUser();
};
