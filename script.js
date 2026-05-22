function createTypewriter(element, text, options = {}) {
    const {
        typingSpeed = 100,
        deletingSpeed = 60,
        pauseAfterType = 1800,
        pauseAfterDelete = 500,
    } = options;

    let index = 0;
    let isDeleting = false;

    function type() {
        if (!isDeleting) {
            element.textContent = text.slice(0, index + 1);
            index++;

            if (index === text.length) {
                isDeleting = true;
                setTimeout(type, pauseAfterType);
                return;
            }
            setTimeout(type, typingSpeed);
        } else {
            element.textContent = text.slice(0, index - 1);
            index--;

            if (index === 0) {
                isDeleting = false;
                setTimeout(type, pauseAfterDelete);
                return;
            }
            setTimeout(type, deletingSpeed);
        }
    }

    type();
}


const typewriterEl = document.getElementById("typewriter");
const developerNameEl = document.querySelector(".developer-name");
createTypewriter(typewriterEl, "Supreme Barber");
createTypewriter(developerNameEl, "Built By Mac Ty", 
    {
    typingSpeed: 150,
    deletingSpeed: 80,
    pauseAfterType: 1000,
    pauseAfterDelete: 800
});



const hamburgerButton = document.querySelector(".hamburger-bttn");
const primaryNav = document.querySelector(".primary-navigation");

hamburgerButton.addEventListener("click", () => {
    const isOpened = hamburgerButton.getAttribute("aria-expanded");
    const visibility = primaryNav.getAttribute("data-visible");

    if (isOpened === "false" && visibility === "false") {
        hamburgerButton.setAttribute("aria-expanded", "true");
        primaryNav.setAttribute("data-visible", "true");
    }
    else {
        hamburgerButton.setAttribute("aria-expanded", "false");
        primaryNav.setAttribute("data-visible", "false");
    }
}); 


const tabs = document.querySelectorAll(".tab").forEach(
    tab => {
        tab.addEventListener("click", () => {
            document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            if (window.innerWidth <= 768) {
                hamburgerButton.setAttribute("aria-expanded", "false");
                primaryNav.setAttribute("data-visible", "false");
            }
        })
    }
)

// Pagination Code 
const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    slidesPerView: 1.3,     
    spaceBetween: 15,
    centeredSlides: true,    
    
    direction: 'horizontal',
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

});

//  Scrolling animation effect code 
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
});

document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right, .reveal-stagger"
).forEach(el => observer.observe(el)); 