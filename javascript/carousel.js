    /*Carousel Function*/
    let currentIndex = 0;
    const cardWidth =200;
    const cardsContainer = document.querySelector(".categories");

    function moveCarousel(direction) {
        currentIndex += direction;

        currentIndex = Math.max(0, Math.min(currentIndex, cardsContainer.children.length -1));

        const translateXValue = -currentIndex * cardWidth;
        cardsContainer.style.transform = `translateX(${translateXValue}px)`;
    }
