document.addEventListener('DOMContentLoaded', function() {
    var navbar = document.getElementById('navbar');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    var productItems = document.querySelectorAll('.product-item');
    productItems.forEach(function(item) {
        item.addEventListener('click', function() {
            if (this.getAttribute('data-stock') === 'in-stock') {
                this.setAttribute('data-stock', 'out-of-stock');
                this.classList.add('out-of-stock');
                this.querySelector('h3').innerText += ' (Out of Stock)';
                alert(this.querySelector('h3').innerText + ' has been marked as out of stock.');
            }
        });
    });
});

function isInView(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function checkInView() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (isInView(section)) {
            section.classList.add('in-view');
        } else {
            section.classList.remove('in-view');
        }
    });
}

window.addEventListener('scroll', checkInView);
window.addEventListener('load', checkInView);