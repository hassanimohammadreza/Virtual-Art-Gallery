document.addEventListener("DOMContentLoaded", function () {
  const galleryItems = document.querySelectorAll('.gallery-item');

  galleryItems.forEach(item => {
    const img = item.querySelector('img');
    
    img.onload = function () {
      const aspectRatio = img.naturalWidth / img.naturalHeight;
      const itemWidth = item.offsetWidth;
      const itemHeight = itemWidth / aspectRatio;

      item.style.height = `${itemHeight + 50}px`;
    }

    if (img.complete) {
      img.onload();
    }
  });

  const footer = document.querySelector('footer');
  if (document.body.scrollHeight <= window.innerHeight) {
    footer.style.position = 'absolute';
    footer.style.bottom = '0';
    footer.style.width = '100%';
  }
});

