```javascript
// Simple welcome message
console.log("Welcome to Athira Mohan's portfolio!");


// Highlight navigation link when clicking

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.forEach(function(item) {
            item.style.color = "";
        });

        this.style.color = "#2563eb";

    });

});
```
