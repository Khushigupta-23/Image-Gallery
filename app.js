// Select all images inside the gallery
const images = document.querySelectorAll(".gallery img");

// Create a lightbox container
const lightbox = document.createElement("div");
lightbox.classList.add("lightbox");
document.body.appendChild(lightbox);

// Create an image inside the lightbox
const lightboxImage = document.createElement("img");
lightbox.appendChild(lightboxImage);

// Show lightbox when an image is clicked
images.forEach(image => {
    image.addEventListener("click", () => {
        lightbox.classList.add("active");
        lightboxImage.src = image.src;
    });
});

// Hide lightbox when clicked
lightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
});
