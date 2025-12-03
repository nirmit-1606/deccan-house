document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("hamburgerBtn");
    const nav = document.getElementById("mobileResponsive");

    btn.addEventListener("click", () => {
        btn.classList.toggle("active");
        nav.classList.toggle("open");

        // Disable scroll when nav is open
        if (nav.classList.contains("open")) {
            document.body.classList.add("nav-menu-open");
        } else {
            document.body.classList.remove("nav-menu-open");
        }
    });
});

// animate header size on scroll using a CSS custom property --shrink (0..1)
(function () {
    const header = document.querySelector('header');
    if (!header) return;

    let ticking = false;
    const maxScroll = 180; // px of scroll after which header is fully shrunk

    function onScroll() {
        const sc = Math.max(0, window.scrollY || 0);
        const shrink = Math.min(1, sc / maxScroll);
        header.style.setProperty('--shrink', String(shrink));

        // add a pinned class when scrolled a bit for optional shadow/visual
        if (sc > 8) header.classList.add('header--pinned');
        else header.classList.remove('header--pinned');

        ticking = false;
    }

    window.addEventListener('scroll', function () {
        if (!ticking) {
            window.requestAnimationFrame(onScroll);
            ticking = true;
        }
    }, { passive: true });

    // initialize on load
    onScroll();
})();
