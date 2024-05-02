const imageDescriptions = [
  ["Library", "A beautifull Library"],
  ["Peak Stars", "A night sky view above the mountain"],
];

const initSlider = () => {
  const images = document.querySelectorAll(".slider__image");
  const slider = document.querySelector(".slider__images");

  const imgTitle = document.querySelector(".img-info__name");
  const imgDescription = document.querySelector(".img-info__description");
  const imgLeft = [];

  images.forEach((image) => {
    imgLeft.push(image.getBoundingClientRect().left);
  });

  images.forEach((image) => {
    image.addEventListener("click", () => {
      images.forEach((img) => {
        if (img.classList.contains("image--focused")) {
          img.classList.remove("image--focused");
        }
      });

      image.classList.add("image--focused");
      imgTitle.innerHTML = imageDescriptions[image.id][0];
      imgDescription.innerHTML = imageDescriptions[image.id][1];

      const imgRect = image.getBoundingClientRect();
      const sliderRect = slider.getBoundingClientRect();
      const scrollAmount = window.innerWidth / 2 - imgRect.left;

      imgLeft[image.id] += scrollAmount;

      slider.style.transform = `translateX(${imgLeft[image.id]}px)`;
      console.log(imgLeft[image.id]);
    });
  });
};

window.addEventListener("load", initSlider);
