//---- javascript code for the fade in ----- START//
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".fade-in-section");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target); // Stop observing once visible
                }
            });
        },
        { threshold: 0.3 } // Adjust threshold to control when the fade-in occurs
    );

    sections.forEach(section => {
        observer.observe(section);
    });
});
//END
//----- navbar//
document.addEventListener('DOMContentLoaded', function () {
    let lastScrollTop = 0;
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', function () {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // If scrolling down, hide the navbar
        if (scrollTop > lastScrollTop) {
            navbar.style.top = '-80px'; // Adjust if needed based on navbar height
        } else {
            navbar.style.top = '0';
        }
        lastScrollTop = scrollTop;
    });
});


//----javascript code for the carousel -----START//

let s1 = document.getElementById("s1")
//only the first slide moves, and since the first slide will move left, the rest of the slides will move as well
function left1(){s1.style.marginLeft = 0;} 
function left2(){s1.style.marginLeft = '-30%';}
function left3(){s1.style.marginLeft = '-60%';}

// addEventListener allows it so that on the event of a 'click' on 'btn_', function 'left_' will run
document.getElementById('btn1').addEventListener("click",left1)
document.getElementById('btn2').addEventListener("click",left2)
document.getElementById('btn3').addEventListener("click",left3)

//--------javascript code for the carousel END----- //


// Function to handle tab switching
function openTab(event, tabId) {
    // Hide all tab content
    var tabContents = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
        tabContents[i].classList.remove("active");
    }

    // Remove 'active' class from all tabs
    var tabLinks = document.getElementsByClassName("tab-link");
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active");
    }

    // Show the selected tab content and make tab active
    document.getElementById(tabId).style.display = "block";
    document.getElementById(tabId).classList.add("active");
    event.currentTarget.classList.add("active");
}



