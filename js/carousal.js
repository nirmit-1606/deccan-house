document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.menu-carousal');
    if (!container) return;
    const track = container.querySelector('.carousal-track');
    if (!track) return;

    // capture the initial item set once (the first visible sequence)
    const originals = Array.from(track.children);

    // ensure we don't loop forever per invocation — local safety cap
    function ensureTrackLength() {
        const containerWidth = container.clientWidth || 0;
        // if already long enough, nothing to do
        if (track.scrollWidth >= containerWidth * 2) return;

        let safety = 0;
        const maxSafety = 20; // clones-per-call cap
        while (track.scrollWidth < containerWidth * 2 && safety < maxSafety) {
            originals.forEach(node => track.appendChild(node.cloneNode(true)));
            safety++;
        }

        // give browser a moment to layout (images/SVGs) then start animation
        // requestAnimationFrame used to ensure layout pass has run
        requestAnimationFrame(() => {
            // small extra delay to let external SVGs/images settle if needed
            setTimeout(() => {
                track.style.animation = `carousal-scroll var(--scroll-duration, 40s) linear infinite`;
            }, 50);
        });
    }

    // run after full load so external assets (object/svg/img) are sized
    if (document.readyState === 'complete') {
        ensureTrackLength();
    } else {
        window.addEventListener('load', ensureTrackLength, { once: true });
        window.addEventListener('resize', ensureTrackLength);
    }

    // optional: pause animation on hover for better UX
    container.addEventListener('mouseenter', () => {
        track.style.animationPlayState = 'paused';
    });
    container.addEventListener('mouseleave', () => {
        track.style.animationPlayState = 'running';
    });
});