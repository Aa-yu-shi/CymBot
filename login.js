document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    // Get form values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    

    // Send data to the Python backend
    const response = await fetch('https://localhost:8443/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });

    // Get response message
    const result = await response.json();
    document.getElementById('message').innerText = result.message;

    // If login is successful, redirect to the dashboard page
    if (result.message.startsWith("Welcome")) {
        setTimeout(() => {
            window.location.href = "index.html";  // Redirect to dashboard.html
        }, 1000); // 1-second delay before redirecting
    }
});