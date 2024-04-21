const initSlider = () => {
  const images = document.querySelectorAll(".slider__image");
  const slider = document.querySelector(".slider__images");

  images.forEach((image) => {
    image.addEventListener("click", () => {
      images.forEach((img) => {
        if (img.classList.contains("image--focused")) {
          img.classList.remove("image--focused");
        }
      });

      image.classList.add("image--focused");

      const imgRect = image.getBoundingClientRect();
      const sliderRect = slider.getBoundingClientRect();
      const scrollAmount = window.innerWidth / 2 - imgRect.left;
      const scale = sliderRect.left;

      slider.style.transform = "scaleX()";
    });
  });
};

window.addEventListener("load", initSlider);
