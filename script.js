window.addEventListener("load", () => {
    const previews = document.querySelectorAll(".gallery-item");

    previews.forEach((preview) => {
        const iframe = preview.querySelector("iframe");

        iframe.onload = function () {
            const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
            const canvas = iframeDocument.querySelector(".canvas");

            if (canvas) {
                const canvasImage = canvas.toDataURL("image/png");

                const img = document.createElement("img");
                img.src = canvasImage;

                const previewContainer = preview.querySelector(".preview");
                previewContainer.innerHTML = '';
                previewContainer.appendChild(img);

                img.onload = function() {
                    const imgWidth = img.naturalWidth;
                    const imgHeight = img.naturalHeight;

                    const containerWidth = previewContainer.offsetWidth;
                    const containerHeight = previewContainer.offsetHeight;

                    const scaleFactor = Math.min(containerWidth / imgWidth, containerHeight / imgHeight);

                    img.style.width = `${imgWidth * scaleFactor}px`;
                    img.style.height = `${imgHeight * scaleFactor}px`;
                };
            }
        };
    });
});
