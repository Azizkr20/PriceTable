const form = document.getElementById('signUpForm');
form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Check if all fields are valid
    const inputs = form.querySelectorAll('input, select');
    let valid = true;
    inputs.forEach(input => {
        if (!input.value) {
            valid = false;
            input.classList.add('is-invalid');
        } else {
            input.classList.remove('is-invalid');
        }
    });

    if (valid) {
        // Show success modal
        const modal = new bootstrap.Modal(document.getElementById('successModal'));
        modal.show();
    }
});

// Redirect to home page when clicking "Go Back Home"
document.getElementById('goHomeBtn').addEventListener('click', function () {
    window.location.href = "index.html";
});
