const thumbnails = document.querySelectorAll('.thumbnail');
const fullsizeImage = document.getElementById('fullsize');
const gridContainer = document.getElementById('grid-container');
let expanded = false;

// Add click event to each thumbnail
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        if (!expanded) {
            // Show full-size image
            fullsizeImage.src = thumbnail.src;
            fullsizeImage.style.display = 'block';
            gridContainer.style.gridTemplateColumns = '1fr';
            
            // Hide other images
            thumbnails.forEach(other => {
                if (other !== thumbnail) {
                    other.style.display = 'none';
                }
            });
            expanded = true;
        } else {
            // Collapse full-size image
            fullsizeImage.style.display = 'none';
            gridContainer.style.gridTemplateColumns = 'repeat(3, 1fr)';
            
            // Show thumbnails again
            thumbnails.forEach(other => {
                other.style.display = 'block';
            });
            expanded = false;
        }
    });
});
