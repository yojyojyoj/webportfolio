document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        this.style.display = 'none'; // Hide the form
        document.getElementById('successMessage').style.display = 'block'; // Show the message
    });