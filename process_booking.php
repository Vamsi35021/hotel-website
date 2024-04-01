<?php
// Simulated backend processing
// Here you would typically save the booking to your database

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $roomType = $_POST['room_type'];
    $checkIn = $_POST['check_in'];
    $checkOut = $_POST['check_out'];

    // Perform validation and database operations as needed

    // Simulate successful booking
    $response = array('success' => true);
    echo json_encode($response);
} else {
    // Invalid request
    http_response_code(400);
    exit('Invalid request');
}
?>
