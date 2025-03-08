$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});


function showTab(event, tabId) {
    // Remove active class from all tabs
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-pane').forEach(content => content.classList.remove('active'));

    // Add active class to the clicked tab and corresponding content
    event.currentTarget.classList.add('active');
    document.getElementById(tabId).classList.add('active');
}


document.addEventListener("DOMContentLoaded", function () {
    const projectTitles = document.querySelectorAll(".project-title");

    projectTitles.forEach(title => {
        title.addEventListener("click", function () {
            const parent = this.parentElement;
            parent.classList.toggle("active");
        });
    });
});


const track = document.querySelector('.gallery-track');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let index = 0;
const slides = document.querySelectorAll('.gallery-slide');
const totalSlides = slides.length;

function updateSlide() {
    track.style.transition = "transform 0.5s ease-in-out";
    track.style.transform = `translateX(-${index * 100}%)`;
}

// Next Button
nextButton.addEventListener('click', () => {
    if (index >= totalSlides - 1) {
        index = 0; // Loop back to the first slide
    } else {
        index++;
    }
    updateSlide();
});

// Previous Button
prevButton.addEventListener('click', () => {
    if (index <= 0) {
        index = totalSlides - 1; // Loop back to the last slide
    } else {
        index--;
    }
    updateSlide();
});
