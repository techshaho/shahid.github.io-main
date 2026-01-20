function toggleMenu() {
  const navList = document.getElementById("nav-list");
  navList.classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for navigation links
  document.querySelectorAll("nav ul li a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      const targetSection = document.querySelector(this.getAttribute("href"));
      window.scrollTo({
        top: targetSection.offsetTop - 50, // Adjust offset for sticky nav
        behavior: "smooth"
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    // Select all progress elements
    const progressBars = document.querySelectorAll(".progress");

    // Iterate over each progress bar and apply the assigned width
    progressBars.forEach(progress => {
      // Get the width from the style attribute
      const width = progress.style.width;

      // Set the width to 0 first, so the animation starts from 0
      progress.style.width = "0%";

      // Use a setTimeout to apply the actual width after a brief delay
      setTimeout(() => {
        progress.style.width = width;
      }, 200); // 200ms delay before starting animation
    });
  });

  // Typing effect for the home section
  const text = "Hi, I'm Mohammed Shahiduddin Shaikh";
  const speed = 100; // Typing speed in milliseconds
  const eraseSpeed = 50; // Speed of erasing
  const delay = 1000; // Delay before erasing
  const backDelay = 1000; // Delay before retyping

  function typeWriter(index = 0, isErasing = false) {
    const element = document.querySelector(".animate-text");

    if (element) {
      if (isErasing) {
        if (index > 0) {
          element.innerHTML = text.substring(0, index - 1);
          setTimeout(() => typeWriter(index - 1, true), eraseSpeed);
        } else {
          setTimeout(() => typeWriter(0, false), backDelay); // Delay before starting to type again
        }
      } else {
        if (index < text.length) {
          element.innerHTML = text.substring(0, index + 1);
          setTimeout(() => typeWriter(index + 1, false), speed);
        } else {
          setTimeout(() => typeWriter(index, true), delay); // Delay before starting to erase
        }
      }
    } else {
      console.error("Element with class 'animate-text' not found.");
    }
  }

  window.onload = () => typeWriter(); // Start the typing effect on window load

  // Update the active link in the navigation
  const navLinks = document.querySelectorAll("nav ul li a");
  const sections = Array.from(navLinks).map(link =>
    document.querySelector(link.getAttribute("href"))
  );

  function updateActiveLink() {
    let index = sections.length;

    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

    navLinks.forEach((link, i) => {
      link.classList.toggle("active", i === index);
    });
  }

  window.addEventListener("scroll", updateActiveLink);
  updateActiveLink(); // Call initially to set the correct active link
});
