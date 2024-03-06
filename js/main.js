document.addEventListener('DOMContentLoaded', function() {
    var menuBar = document.querySelector('#menu_bar');
    var menuLink = document.querySelector('.nav_links');

    menuLink.style.top = '-450px';

    menuBar.onclick = function() {
        if (menuLink.style.top === '-450px') {
            menuLink.style.top = '50px';
        } else {
            menuLink.style.top = '-450px';
        }
    };

    // Get the button element
    var contactButton = document.querySelector(".btn");

    // Add click event listener to the button
    contactButton.addEventListener("click", function () {
      // Get the contact section
      var contactSection = document.getElementById("contact");

      // Scroll to the contact section smoothly
      contactSection.scrollIntoView({ behavior: "smooth" });
    });
});