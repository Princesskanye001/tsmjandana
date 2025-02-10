// document.addEventListener("DOMContentLoaded", function () {
//   const navLinks = document.querySelectorAll("nav ul li a");
//   const sections = document.querySelectorAll("section");

//   navLinks.forEach(link => {
//       link.addEventListener("click", function (e) {
//           e.preventDefault(); // Prevent default anchor behavior
          
//           let targetId = this.getAttribute("href").substring(1); // Remove #
//           let targetSection = document.getElementById(targetId);

//           if (targetSection) {
//               // Hide all sections
//               sections.forEach(section => section.classList.remove("active"));

//               // Show the target section
//               targetSection.classList.add("active");
//           }
//       });
//   });
// });
