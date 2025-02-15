document.addEventListener("DOMContentLoaded", function() {
    // Menu Toggle for Mobile View
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
    menu.onclick = () => {
        menu.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };

    // Remove Active Navbar Class on Scroll
    window.onscroll = () => {
        menu.classList.remove('bx-x');
        navbar.classList.remove('active');
    };

    // Typed.js Effect for Introduction
    const typed = new Typed('.more-text',  {
        strings: [ 'Frontend Developer', 'Web Developer',  ' Responsive Web Designer'],
        typeSpeed: 80,
        backSpeed: 80,
        backDelay: 1200,
        loop: true,
    });

    // Social Media Links - Open in New Tab
    const socialLinks = {
        linkedin: "https://www.linkedin.com/in/lovely-bharti-89323a30a",
        github: "https://github.com/LovelyBharti",
        insta: "https://www.instagram.com/", 
        snap: "https://www.snapchat.com/"
    };

    Object.keys(socialLinks).forEach(id => {
        const anchor = document.getElementById(id);
        anchor.onclick = function() {
            window.open(socialLinks[id], "_blank", "noopener noreferrer");
        };
    });

    // Download CV Button
    var cvButton = document.getElementById("btn");
    cvButton.onclick = function() {
        window.open("updatedresum.pdf", "_blank", "noopener noreferrer");
    };

    // Scroll to Sections with Smooth Scrolling
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');

    window.addEventListener('scroll', () => {
        let currentSection = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute("href").includes(currentSection)) {
                link.classList.add('active');
            }
        });
    });

    // Handle "View" Buttons for Projects
    const projectLinks = {
        Paasword: "https://lovelybharti.github.io/Random-Password-Generator/", 
        Task: "https://lovelybharti.github.io/Task-Manager-Application/", 
        Weather: "https://lovelybharti.github.io/Weather-Checking-Application/", 
        Quiz: "https://lovelybharti.github.io/Quiz-Applicatiion/" 
    };

    Object.keys(projectLinks).forEach(id => {
        const button = document.getElementById(id);
        button.onclick = function() {
            window.open(projectLinks[id], "_blank", "noopener noreferrer");
        };
    });

});

// Smooth Scrolling (CSS)
document.documentElement.style.scrollBehavior = "smooth";
