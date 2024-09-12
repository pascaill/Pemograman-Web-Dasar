document.addEventListener('DOMContentLoaded', function() {
    const headerElement = document.querySelector('header');
    const originalColor = getComputedStyle(headerElement).backgroundColor;

    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            headerElement.style.backgroundColor = '#34495e';
        } else {
            headerElement.style.backgroundColor = originalColor;
        }
    });

    const aksiItems = document.querySelectorAll('.aksi-item');
    aksiItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });

        item.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });
});