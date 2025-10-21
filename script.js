document.addEventListener('DOMContentLoaded', () => {

    // Check if we are on the landing page (index.html)
    const showLoginBtn = document.getElementById('show-login-btn');
    const loginPopupOverlay = document.getElementById('login-popup-overlay');
    const closeLoginBtn = document.getElementById('close-login-btn');
    const loginForm = document.getElementById('login-form');

    if (showLoginBtn && loginPopupOverlay && closeLoginBtn) {
        // Show login popup
        showLoginBtn.addEventListener('click', () => {
            loginPopupOverlay.style.display = 'flex';
        });

        // Hide login popup
        closeLoginBtn.addEventListener('click', () => {
            loginPopupOverlay.style.display = 'none';
        });

        // Hide login popup when clicking outside the box
        loginPopupOverlay.addEventListener('click', (event) => {
            if (event.target === loginPopupOverlay) {
                loginPopupOverlay.style.display = 'none';
            }
        });
    }

    // Login Form Validation
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent actual form submission
            
            const emailInput = document.getElementById('login-email');
            const passwordInput = document.getElementById('login-password');
            const emailError = document.getElementById('login-email-error');
            const passwordError = document.getElementById('login-password-error');

            let isValid = true;

            // Validate Email
            if (!emailInput.value.trim() || !emailInput.value.endsWith('@gmail.com')) {
                emailError.style.display = 'block';
                isValid = false;
            } else {
                emailError.style.display = 'none';
            }

            // Validate Password
            if (!passwordInput.value.trim()) {
                passwordError.style.display = 'block';
                isValid = false;
            } else {
                passwordError.style.display = 'none';
            }

            // If all valid, redirect to home page
            if (isValid) {
                alert('Login berhasil!');
                window.location.href = 'home.html';
            }
        });
    }


    // Check if we are on the signup page
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent actual form submission

            const nameInput = document.getElementById('signup-name');
            const emailInput = document.getElementById('signup-email');
            const passwordInput = document.getElementById('signup-password');
            
            const nameError = document.getElementById('signup-name-error');
            const emailError = document.getElementById('signup-email-error');
            const passwordError = document.getElementById('signup-password-error');
            
            let isValid = true;
            
            // Validate Name
            if (!nameInput.value.trim()) {
                nameError.style.display = 'block';
                isValid = false;
            } else {
                nameError.style.display = 'none';
            }

            // Validate Email
            if (!emailInput.value.trim() || !emailInput.value.endsWith('@gmail.com')) {
                emailError.style.display = 'block';
                isValid = false;
            } else {
                emailError.style.display = 'none';
            }

            // Validate Password
            if (!passwordInput.value.trim()) {
                passwordError.style.display = 'block';
                isValid = false;
            } else {
                passwordError.style.display = 'none';
            }

            // If all valid, redirect to the main page (index.html) after a short delay
            if (isValid) {
                alert('Akun berhasil dibuat! Silakan login.');
                setTimeout(() => {
                    window.location.href = 'index.html';
                    href = 'index.html';
                }, 100); // Wait 100ms before redirecting
            }
        });
    }

});

