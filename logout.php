<?php
// Start session to access session variables
session_start();

// Unset all session variables
session_unset();

// Destroy the session
session_destroy();

// Redirect to login page after logout
header("Location: index.html");
exit(); // Ensure no further script execution after the redirect
?>
