const bar = document.getElementById("bar");
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

function showLink() {
    var link = document.getElementById("hiddenLink");
    link.classList.toggle("hidden");
}




//dropdown button
document.addEventListener('DOMContentLoaded', function() {
  const dropdowns = document.querySelectorAll('.dropdown .dropbtn');
  
  dropdowns.forEach(dropdown => {
      dropdown.addEventListener('click', function(event) {
          event.preventDefault(); // Prevent default action for links
          const dropdownContent = this.nextElementSibling;
          dropdownContent.classList.toggle('show');
      });
  });
});




//for my blogs
// Optional: Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
    });
});