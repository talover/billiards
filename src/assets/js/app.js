document.addEventListener("DOMContentLoaded", function() {
    const footerHeaders = document.querySelectorAll('.footer__accordion-header');

    footerHeaders.forEach(header => {
        header.addEventListener('click', function() {
            if (window.innerWidth < 768) {
                this.classList.toggle('active');
                const body = this.nextElementSibling;
                if (body.style.maxHeight) {
                    body.style.maxHeight = null;
                } else {
                    body.style.maxHeight = body.scrollHeight + "px";
                }
            }
        });
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768) {
            footerHeaders.forEach(header => {
                const body = header.nextElementSibling;
                body.style.maxHeight = null;
                header.classList.remove('active');
            });
        } else {
            footerHeaders.forEach(header => {
                const body = header.nextElementSibling;
                if (!header.classList.contains('active')) {
                    body.style.maxHeight = null;
                }
            });
        }
    });
});
