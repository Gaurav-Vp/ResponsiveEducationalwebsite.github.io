var Page = window.location.pathname.split("/").pop().split(".")[0];
console.log("Page : ", Page);

// change navbar style on scroll
window.addEventListener("scroll", function () {
    var navbar = document.querySelector("nav");
    navbar.classList.toggle('window-scroll', window.scrollY > 0);
});

// show/hide FAQs answers
var faqs = document.querySelectorAll(".faq");
faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("open");
    });
});

// show/hide nav menu
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", () => {
    menu.style.display = "flex";  // flex
    closeBtn.style.display = "inline-block";  // block
    menuBtn.style.display = "none";  // none
});

// Hide nav
const closeNav = () => {
    menu.style.display = "none";  // none
    closeBtn.style.display = "none";  // none
    menuBtn.style.display = "inline-block";  // block
}

closeBtn.addEventListener("click", closeNav);




// courses.html page - generate courses
function generateCourses(numTimes) {
    let html = '';
    for (let i = 1; i <= numTimes; i++) {
        html += `
                        <article class="course">
                            <div class="course__image">
                                <img src="./images/course${i}.jpg">
                            </div>
                            <div class="course__info">
                                <h4>{courseTitle}</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Totam, fugit aliquid. Itaque repellendus laborum fuga harum.
                                </p>
                                <a href="./courses.html" class="btn btn-primary">Learn More</a>
                            </div>
                        </article>
                    `;
    }

    return html;
}
// Usage:
const numTimes = 18; // Change this value to generate the HTML code multiple times
const generatedHTML = generateCourses(numTimes);
if (Page == "courses") {
    const container = document.querySelector("#generateCourses"); // Replace "#" with the actual ID of the element
    container.innerHTML = generatedHTML;
}



