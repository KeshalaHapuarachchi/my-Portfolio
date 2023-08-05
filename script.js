document.addEventListener("DOMContentLoaded", function () {
  // ================   menu icon ==========================
  let menuIcon = document.querySelector("#menu-icon");
  let navbar = document.querySelector(".navbar");

  menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");

    navbar.classList.toggle("active");
    console.log(navbar);
    console.log(menuIcon);
  };

  let section = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("header nav a");

  // Remove the menu icon and navbar when clicking a navbar link
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuIcon.classList.remove("bx-x");
      navbar.classList.remove("active");
    });
  });

  // Sticky navbar
  let header = document.querySelector(".header");

  window.addEventListener("scroll", function () {
    section.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");

      if (top >= offset && top < offset + height) {
        navLinks.forEach((links) => {
          links.classList.remove("active");
          document
            .querySelector("header nav a[href*='" + id + "']")
            .classList.add("active");
        });
      }
    });

    header.classList.toggle("sticky", window.scrollY > 100);
  });

  // Dark mode toggle
  let darkModeIcon = document.querySelector("#darkMode-icon");
  console.log(darkModeIcon);
  darkModeIcon.onclick = () => {
    console.log("Dark mode clicked");
    if (darkModeIcon.classList.contains("bx-moon")) {
      darkModeIcon.classList.remove("bx-moon");
      darkModeIcon.classList.add("bx-sun");
    } else {
      darkModeIcon.classList.remove("bx-sun");
      darkModeIcon.classList.add("bx-moon");
    }
    document.body.classList.toggle("dark-mode");
  };

  // Swiper initialization
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  submit.addEventListener("click", (e) => {
    e.preventDefault();

    if (!submit.disabled) {
      console.log("clicked");

      // write HTML for proper format to be sent in the email
      let body = `
        <b>Name : </b>${fname.value}<br>
        <b>Email : </b>${email.value}<br>
        <b>Phone no :</b>${number.value}<br>
        <b>Subject :</b>${subject.value}<br>
        <b>Message: </b>${message.value}<br>
      `;

      // Send email code goes here

      Email.send({
        SecureToken: "9e5a8c48-738a-4638-8f1c-c12f3d160922",
        To: "nethminikeshala17@gmail.com",
        From: "nethminikeshala17@gmail.com",
        Subject: "testing email from " + email.value,
        Body: body,
      }).then((message) => alert(message));

      // Clear input fields
      fname.value = "";
      email.value = "";
      number.value = "";
      subject.value = "";
      message.value = "";

      submit.disabled = true; // Disable the submit button to prevent multiple submissions
    }
  });

  // scroll reveal=========

  ScrollReveal({
    reset: true,
    distance: "80px",
    duration: 2000,
    delay: 50,
  });

  ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
  ScrollReveal().reveal(
    ".home-img img, .services-container, .projects-box, .ediu-wrapper,.contact form",
    { origin: "bottom" }
  );
  ScrollReveal().reveal(".home-content h1, .about img", {
    origin: "left",
  });
});
