export const scrollAndNavigate = (page) => {
    function createObserver() {
        let options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5
        };
        let observer = new IntersectionObserver(handleIntersect, options);
        observer.observe(page);
    }
    const handleIntersect = (entries) => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                let pageInView = entry.target.classList[1];
                let correspondingDot = document.querySelector(`#${pageInView}`);
                correspondingDot.classList.add('glow');
                let allIndicators = document.querySelectorAll('.pageIndicator');
                allIndicators.forEach((indicator) => {
                    if (indicator.id !== pageInView) {
                        indicator.classList.remove('glow');
                    }
                });
            }
        }
    };
    createObserver()
}