const togglePassword = document.querySelector('.show-password');
const password = document.querySelector('.input-field[type="password"]');
togglePassword.addEventListener('click', function (e) {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    this.classList.toggle('bi-eye');
});