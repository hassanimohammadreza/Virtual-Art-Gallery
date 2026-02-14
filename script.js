document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.getElementById("gallery");

    const artworks = [
        { title: "Mondrian 1", page: "./Piet Mondrian/1/pietmondrian.html", width: 750, height: 550 },
        { title: "Mondrian 2", page: "./Piet Mondrian/2/pietmondrian.html", width: 600, height: 600 },
        { title: "Mondrian 3", page: "./Piet Mondrian/3/pietmondrian.html", width: 500, height: 650 },
        { title: "Mondrian 4", page: "./Piet Mondrian/4/pietmondrian.html", width: 600, height: 600 },
        { title: "Mondrian 5", page: "./Piet Mondrian/5/pietmondrian.html", width: 450, height: 650 }
    ];

    artworks.forEach(art => {
        const item = document.createElement("div");
        item.classList.add("gallery-item");

        item.innerHTML = `
            <a href="${art.page}" target="_blank">
                <div class="preview" style="position:relative; width:100%; overflow:hidden;">
                    <iframe src="${art.page}" frameborder="0"
                        style="position:absolute; top:0; left:0; border:none;"></iframe>
                </div>
                <p>${art.title}</p>
            </a>
        `;

        gallery.appendChild(item);

        const preview = item.querySelector('.preview');
        const iframe = preview.querySelector('iframe');

        function scaleIframe() {
            const containerWidth = preview.offsetWidth;
            const scaleX = containerWidth / art.width;
            const scaleY = containerWidth / art.width * (art.height / art.width);

            const scale = scaleX;

            const scaledHeight = art.height * scale;

            preview.style.height = `${scaledHeight}px`;
            iframe.style.width = `${art.width}px`;
            iframe.style.height = `${art.height}px`;
            iframe.style.transform = `scale(${scale})`;
            iframe.style.transformOrigin = 'top left';
        }

        scaleIframe();
        window.addEventListener('resize', scaleIframe);
    });
});
