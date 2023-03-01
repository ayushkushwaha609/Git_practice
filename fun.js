const previewLinks = document.querySelectorAll('.preview-link');
const imageModal = document.querySelector('.image-modal');

previewLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const imageSrc = link.querySelector('img').src;
    imageModal.innerHTML = `<img src="${imageSrc}">`;
    imageModal.style.display = "flex";
    imageModal.addEventListener("click", function(){
        this.style.display = "none";
     });
     
  });
});
