// scanner.js

// DOM elements
const detailsContainer = document.getElementById('details');

// Function to display details
function displayDetails(decodedData) {
    const details = JSON.parse(decodedData);
    let detailsHTML = '<h2>Employee Details</h2>';
    detailsHTML += '<p><strong>Name:</strong> ' + details.employee_name + '</p>';
    detailsHTML += '<p><strong>Employee Code:</strong> ' + details.employee_code + '</p>';
    detailsHTML += '<p><strong>Company Name:</strong> ' + details.company_name + '</p>';
    // Add more details as needed
    detailsContainer.innerHTML = detailsHTML;
}

// QR code scanner
const scanner = new Instascan.Scanner({ video: document.getElementById('preview') });
scanner.addListener('scan', function(content) {
    console.log('Scanned:', content);
    displayDetails(content);
});

// Start scanning
Instascan.Camera.getCameras().then(function(cameras) {
    if (cameras.length > 0) {
        scanner.start(cameras[0]);
    } else {
        console.error('No cameras found.');
    }
}).catch(function(e) {
    console.error(e);
});
