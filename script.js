










// contact us section 


document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission
  
  const form = event.target;
  const formData = new FormData(form); // Collect form data
  
  // Add debugging statement
  console.log("Form is being submitted...");

  fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
          'Accept': 'application/json'
      }
  }).then(response => response.json()).then(result => {
      console.log("Response received:", result); // Debugging: Log the result
      if (result.success) {
          document.getElementById('result').textContent = "Thank you! Your message has been sent successfully.";
          setTimeout(function(){
            document.getElementById('result').textContent = ""
    },3000)
          form.reset(); // Reset the form after successful submission
      } else {
          document.getElementById('result').textContent = "Oops! Something went wrong. Please try again.";
      }
  }).catch(error => {
      console.log("Error occurred:", error); // Debugging: Log the error
      document.getElementById('result').textContent = "Oops! There was an error submitting the form.";
  });
});

















// booking section
document.addEventListener("DOMContentLoaded", () => {
    const bookingForm = document.querySelector(".booking-form");
    const notification = document.getElementById("notification");
  
    bookingForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent the default form submission
  
      // Get form values
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const date = document.getElementById("date").value;
      const timeSlot = document.getElementById("time-slot").value;
      const workoutType = document.getElementById("workout-type").value;
  
      // Validate form inputs
      if (!name || !email || !date || !timeSlot || !workoutType) {
        alert("Please fill in all the fields.");
        return;
      }
  
      // Show notification
      showNotification("Your booking was successful!");
  
      // Clear form after submission
      bookingForm.reset();
    });
  
    function showNotification(message) {
      notification.textContent = message;
      notification.classList.remove("hidden");
  
      // Hide notification after 3 seconds
      setTimeout(() => {
        notification.classList.add("hidden");
      }, 3000);
    }
  });
  