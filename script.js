document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Simulate backend validation
    if (username === 'admin' && password === 'password') {
        // Redirect to dashboard or desired page on successful login
        window.location.href = 'dashboard.html';
    } else {
        document.getElementById('loginError').textContent = 'Invalid username or password';
    }
});
