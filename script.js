document.addEventListener("DOMContentLoaded", function() {
    console.log("✅ DOM Loaded Successfully");

    // Menu Toggle for Mobile View
    let menu = document.querySelector("#menu-icon");
    let navbar = document.querySelector(".navbar");

    if (menu) {
        menu.onclick = () => {
            menu.classList.toggle("bx-x");
            navbar.classList.toggle("active");
        };
    }

    // Remove Active Navbar Class on Scroll
    window.onscroll = () => {
        if (menu && navbar) {
            menu.classList.remove("bx-x");
            navbar.classList.remove("active");
        }
    };

    // Typed.js Effect for Introduction
    if (document.querySelector(".more-text")) {
        new Typed(".more-text", {
            strings: ["Frontend Developer", "Web Developer", "Responsive Web Designer"],
            typeSpeed: 80,
            backSpeed: 80,
            backDelay: 1200,
            loop: true,
        });
    }

    // Social Media Links - Open in New Tab
    const socialLinks = {
        linkedin: "https://www.linkedin.com/in/lovely-bharti-89323a30a",
        github: "https://github.com/LovelyBharti",
        insta: "https://www.instagram.com/",
        snap: "https://www.snapchat.com/"
    };

    Object.keys(socialLinks).forEach(id => {
        const anchor = document.getElementById(id);
        if (anchor) {
            anchor.onclick = function() {
                console.log(`🔗 Opening ${id}`);
                window.open(socialLinks[id], "_blank", "noopener noreferrer");
            };
        } else {
            console.warn(` Social link ID '${id}' not found`);
        }
    });

    // Download CV Button
    var cvButton = document.getElementById("btn");
    if (cvButton) {
        cvButton.onclick = function() {
            console.log("📄 Downloading CV");
            window.open("updatedresum.pdf", "_blank", "noopener noreferrer");
        };
    } else {
        console.warn(" CV Button not found");
    }

    // Scroll to Sections with Smooth Scrolling
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar a");

    window.addEventListener("scroll", () => {
        let currentSection = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(currentSection)) {
                link.classList.add("active");
            }
        });
    });

    // Buttons for Projects
    const projectLinks = {
        Movie: "https://lovelybharti.github.io/Movie-Hub/",
        Smart Notes App : "https://lovelybharti.github.io/Note-Tracking-App/",
        Weather: "https://lovelybharti.github.io/Weather-Checking-Application/",
        Quiz: "https://lovelybharti.github.io/Quiz-Applicatiion/"
    };

    Object.keys(projectLinks).forEach(id => {
        const button = document.getElementById(id);
        if (button) {
            console.log(`✅ Project button found: ${id}`);
            button.onclick = function() {
                console.log(` Opening project: ${projectLinks[id]}`);
                window.open(projectLinks[id], "_blank", "noopener noreferrer");
            };
        } else {
            console.warn(` Project button with ID '${id}' not found`);
        }
    });

});

document.documentElement.style.scrollBehavior = "smooth";
