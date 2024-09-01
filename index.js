const backToTopButton = document.getElementById("backToTop");

window.onscroll = function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

backToTopButton.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.addEventListener("DOMContentLoaded", function () {
  const heroSection = document.querySelector(".hero");
  const images = ["physio1.jpg", "physio2.jpg","physio3.jpg"]; 
  let currentIndex = 0;

  function changeBackgroundImage() {
    currentIndex = (currentIndex + 1) % images.length; 
    heroSection.style.backgroundImage = `url(${images[currentIndex]})`;
  }

  setInterval(changeBackgroundImage, 10000);
});