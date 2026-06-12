document.addEventListener('DOMContentLoaded', function() {
    
    // File upload file name indicator update
    const fileInput = document.getElementById('prescription');
    const fileChosen = document.getElementById('file-chosen');

    fileInput.addEventListener('change', function() {
        if (this.files && this.files.length > 0) {
            fileChosen.textContent = this.files[0].name;
            fileChosen.style.color = "#008080"; // Turn text teal when file is selected
        } else {
            fileChosen.textContent = "No file chosen";
            fileChosen.style.color = "#666";
        }
    });

    // Form submission processing setup
    const form = document.getElementById('pharmacyForm');
    const statusMessage = document.getElementById('formStatus');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Stop page refresh

        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;

        // Basic front-end verification
        if(name.trim() === "" || phone.trim() === "") {
            showStatus("Please enter your name and contact details.", "error");
            return;
        }

        // Simulating backend network response delivery request
        showStatus("Processing your order order request...", "info");

        setTimeout(() => {
            showStatus(`Thank you, ${name}! Your request has been sent successfully. Nandi Medicals team will call you shortly.`, "success");
            form.reset();
            fileChosen.textContent = "No file chosen";
            fileChosen.style.color = "#666";
        }, 1500);
    });

    // Utility helper function for messaging statuses
    function showStatus(msg, type) {
        statusMessage.style.display = "block";
        statusMessage.textContent = msg;
        
        if (type === "success") {
            statusMessage.style.backgroundColor = "#e6f4ea";
            statusMessage.style.color = "#137333";
        } else if (type === "info") {
            statusMessage.style.backgroundColor = "#e8f0fe";
            statusMessage.style.color = "#1a73e8";
        } else {
            statusMessage.style.backgroundColor = "#fce8e6";
            statusMessage.style.color = "#c5221f";
        }
    }
});