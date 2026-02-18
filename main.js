document.addEventListener("DOMContentLoaded", () => {

    //dark mode (fitur 1)
    const button = document.getElementById("toggle-mode");
    button.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        if(document.body.classList.contains("dark")){
            button.textContent = "Toggle white mode";
        } else button.textContent = "Toggle dark mode";
    });

    //carousel fitur 2
    //slide utk carousel
    const slides = document.querySelector(".slide");
    const totalSlides = 4;
    let index = 0;
    //carousel button
    const nextBtn = document.getElementById("next");
    const prevBtn = document.getElementById("prev");

    //func utk slide
    function updateSlide() {
        slides.style.transform = `translateX(-${index * 800}px)`;
    }
    function nextSlide() {
        index = (index + 1) % totalSlides;
        updateSlide();
    }
    function prevSlide() {
        index = (index - 1 + totalSlides) % totalSlides;
        updateSlide();
    }

    //otomatis
    let auto = setInterval(nextSlide, 3000); //setiap 3dtk
    //reset kalau klik
    function resetInterval() {
        clearInterval(auto);
        auto = setInterval(nextSlide, 3000);
    }

    //click next
    nextBtn.addEventListener("click", () => {
        nextSlide();
        resetInterval();
    });
    //click prev
    prevBtn.addEventListener("click", () => {
        prevSlide();
        resetInterval();
    })
})