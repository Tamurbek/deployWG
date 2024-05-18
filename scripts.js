document.getElementById('register-btn').addEventListener('click', handleRegister);

function handleRegister() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log('Registering user:', username, email);
    // Add logic to send registration data to server here
}