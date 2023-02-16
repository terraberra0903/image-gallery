function imageGallery() {
  const highlight = document.querySelector(".gallery-hightlight");
  const previews = document.querySelectorAll(".room-preview img");

  previews.forEach((preview) => {
    preview.addEventListener("click", function () {
      const smallSrc = this.src;
      const bigSrc = smallSrc.replace("small", "big");
      previews.forEach((preview) => preview.classList.remove("room-active"));
      highlight.src = bigSrc;
      preview.forEach((preveiw) => preveiw.classList.remove("room-active"));
      preview.classList.add(room - active);
    });
  });
}

imageGallery();
