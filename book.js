document.querySelector('.booking-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Show the success notification
    const notification = document.getElementById('notification');
    notification.classList.remove('hidden');
    notification.textContent = "Your booking was successful!";

    // Optionally, hide the notification after a few seconds
    setTimeout(() => {
        notification.classList.add('hidden');
    }, 3000);

    // Reset the form fields
    this.reset();
});
