console.log("JavaScript is linked and working!");
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".category-item img");

    images.forEach((img) => {
        const description = img.getAttribute("data-description");
        const tooltip = document.createElement("div");
        tooltip.classList.add("tooltip");
        tooltip.textContent = description;

        img.parentElement.appendChild(tooltip); // Add tooltip to the parent of the image
    });
});


// Add event listeners to each image
const images = document.querySelectorAll('.category-item img');
images.forEach((image, index) => {
    image.addEventListener('mouseenter', playSound); // Play sound on hover
});

// Check if the user is on a mobile device
function isMobile() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

if (isMobile()) {
    // Redirect to a page or show a message
    window.location.href = "https://example.com/not-available"; // Redirect to a page (create a custom page to inform users)
    // OR
    // alert("This website is only accessible on a computer.");
}
function isMobile() {
    return /Mobi|Android/i.test(navigator.userAgent); // Check if the device is mobile
}

if (isMobile()) {
    document.getElementById("desktop-message").style.display = "block"; // Show the message for mobile users
    document.body.style.display = "none"; // Optionally hide the entire site content

    // If you don't want to hide content, you can comment out the line above and only show the message
}
window.onload = function() {
    function isMobile() {
        return /Mobi|Android/i.test(navigator.userAgent); // Check if the device is mobile
    }

    if (isMobile()) {
        // Display the mobile message
        document.getElementById("desktop-message").style.display = "block";
        
        // Optionally, hide the content of the page
        document.body.style.display = "none"; // Hide all content
    }
};
