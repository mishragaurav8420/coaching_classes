// load-components.js
function loadHeader() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
        });
}

// Call the function when page loads
document.addEventListener('DOMContentLoaded', loadHeader);