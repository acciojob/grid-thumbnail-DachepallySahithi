//your JS code here. If required.
const thumbnails = document.querySelectorAll('.thumbnail');
        const fullsizeImage = document.getElementById('fullsize');
        let expanded = false;

        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', () => {
                if (!expanded) {
                    fullsizeImage.src = thumbnail.src;
                    fullsizeImage.style.display = 'block';
                    thumbnails.forEach(other => {
                        if (other !== thumbnail) {
                            other.style.display = 'none';
                        }
                    });
                    expanded = true;
                } else {
                    fullsizeImage.style.display = 'none';
                    thumbnails.forEach(other => {
                        other.style.display = 'block';
                    });
                    expanded = false;
                }
            });
        });