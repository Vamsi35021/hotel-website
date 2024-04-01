document.addEventListener('DOMContentLoaded', function() {
    // Fetch and display bookings from the server
    fetchBookings();

    // Handle form submission to make a new booking
    document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault();

        let formData = new FormData(this);

        fetch('process_booking.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Booking successful!');
                fetchBookings(); // Fetch and update bookings after successful booking
            } else {
                alert('Booking failed. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        });
    });
});

function fetchBookings() {
    fetch('get_bookings.php')
    .then(response => response.json())
    .then(data => {
        const bookingTable = document.getElementById('bookingTable');
        bookingTable.innerHTML = '';

        if (data.length > 0) {
            let tableHTML = '<table border="1"><tr><th>Name</th><th>Email</th><th>Room Type</th><th>Check-In</th><th>Check-Out</th></tr>';

            data.forEach(booking => {
                tableHTML += `<tr><td>${booking.name}</td><td>${booking.email}</td><td>${booking.room_type}</td><td>${booking.check_in}</td><td>${booking.check_out}</td></tr>`;
            });

            tableHTML += '</table>';
            bookingTable.innerHTML = tableHTML;
        } else {
            bookingTable.innerHTML = 'No bookings found.';
        }
    })
    .catch(error => console.error('Error:', error));
}
