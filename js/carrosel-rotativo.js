let time = 5000,
    currentImageIndex = 0,
    images = document
                .querySelectorAll("#slider-2 img")
    max = images.length;

function nextImage() {

    images[currentImageIndex]
        .classList.remove("selected1")

    currentImageIndex++

    if(currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex]
        .classList.add("selected1")
}

function start() {
    setInterval(() => {
        // troca de image
        nextImage()
    }, time)
}

window.addEventListener("load", start)