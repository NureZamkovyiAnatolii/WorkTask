// Smooth scroll to the banner section when clicking on the logo text
document.querySelector('.logotext').addEventListener('click', function () {
    document.querySelector('.banner').scrollIntoView({
        behavior: 'smooth'
    });
});

// Toggle the menu visibility and update the UI when the menu button is clicked
document.getElementById('menu-toggle').addEventListener('click', function () {
    this.classList.toggle('active'); 
    document.querySelector('.menu-content').classList.toggle('show'); 
    updateUI(); 
});

// Add event listeners to all mobile menu links to close the menu after a click
document.querySelectorAll('.a-mobile').forEach(function (link) {
    link.addEventListener('click', function () {
        const menuToggle = document.querySelector('.menu-toggle');
        menuToggle.classList.toggle('active'); 
        updateUI(); 
    });
});

// Toggle the active state of the main navigation when the menu toggle is clicked
document.querySelector('.menu-toggle').addEventListener('click', function () {
    document.querySelector('nav').classList.toggle('active'); 
});

// Function to update UI elements when the menu state changes
function updateUI() {
    const menuContent = document.querySelector('.menu-content');
    menuContent.classList.toggle('active'); 

    const banner = document.querySelector('.banner');
    if (menuContent.classList.contains('show')) {
        banner.style.marginTop = menuContent.offsetHeight + 'px'; 
    } else {
        banner.style.marginTop = '0'; 
    }
}
