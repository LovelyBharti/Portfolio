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
        linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7266307755978731520/",
        github: "https://github.com/LovelyBharti",
        insta: "https://github.com/LovelyBharti", // Update with Instagram Link
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
});

// Smooth Scrolling (CSS)
document.documentElement.style.scrollBehavior = "smooth";

