// src/utils/smoothScroll.ts

export const scrollToSection = (e: React.MouseEvent, duration: number = 1000) => {
    e.preventDefault();
    
    const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
    const targetElement = document.querySelector(targetId!);

    if (targetElement) {
        const targetHtmlElement = targetElement as HTMLElement;

        const startPosition = window.pageYOffset;
        const targetPosition = targetHtmlElement.offsetTop;
        const distance = targetPosition - startPosition;
        let startTime: number | null = null;

        const animation = (currentTime: number) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };

        const ease = (t: number, b: number, c: number, d: number) => {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };

        requestAnimationFrame(animation);
    }
};