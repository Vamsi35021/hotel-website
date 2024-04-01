<?php
// Simulated backend fetching of bookings
// Here you would typically fetch bookings from your database

// Simulated data for demonstration
$bookings = array(
    array('name' => 'John Doe', 'email' => 'john.doe@example.com', 'room_type' => 'Single Room', 'check_in' => '2024-04-01', 'check_out' => '2024-04-05'),
    array('name' => 'Jane Smith', 'email' => 'jane.smith@example.com', 'room_type' => 'Double Room', 'check_in' => '2024-04-10', 'check_out' => '2024-04-15')
);

header('Content-Type: application/json');
echo json_encode($bookings);
?>
