import confetti from "canvas-confetti";

const particleCount = 50 * 1;
const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

export const useConfetti = () => {
    confetti(
        Object.assign({}, defaults, {
            particleCount,
            origin: { x: randomInRange(0.1, 0.5), y: Math.random() - 0.2 },
        })
    );
    confetti(
        Object.assign({}, defaults, {
            particleCount,
            origin: { x: randomInRange(0.2, 0.6), y: Math.random() - 0.3 },
        })
    );
    confetti(
        Object.assign({}, defaults, {
            particleCount,
            origin: { x: randomInRange(0.3, 0.7), y: Math.random() - 0.4 },
        })
    );
}


