<?php
// Simulated backend authentication
$username = $_POST['username'];
$password = $_POST['password'];

// Example: Check if username and password match a predefined value (admin/password)
if ($username === 'admin' && $password === 'password') {
    // Redirect to dashboard or desired page on successful login
    header('Location: dashboard.html');
    exit();
} else {
    // Redirect back to login page with error message
    header('Location: index.html?error=invalid');
    exit();
}
?>
