// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(function(btn) {
    btn.addEventListener('click', function() {
        const item = btn.closest('.faq-item');
        const isOpen = item.classList.contains('open');
        // بستن همه
        document.querySelectorAll('.faq-item.open').forEach(function(openItem) {
            openItem.classList.remove('open');
            const openBtn = openItem.querySelector('.faq-question');
            if(openBtn) openBtn.setAttribute('aria-expanded', 'false');
        });
        // باز یا بسته کردن فعلی
        if(!isOpen) {
            item.classList.add('open');
            btn.setAttribute('aria-expanded', 'true');
        } else {
            item.classList.remove('open');
            btn.setAttribute('aria-expanded', 'false');
        }
    });
});

