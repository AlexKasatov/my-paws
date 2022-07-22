// use it for smoth transition bettwen page with a lot of elements
export const pageTransition = {
        hidden: { opacity: 0 },
        enter: { opacity: 1 },
        exit: { opacity: 0 },
};

// use it for smoth transition bettwen page with a single element like login
export const pageTransitionSingle = {
        hidden: { y: -100, opacity: 0 },
        enter: { y: 0, opacity: 1, transition: { delay: 0.5, type: 'spring', stiffness: 100 } },
        exit: { opacity: 0 },
};

export const pageTransitionSlide = {
        hidden: { x: -100, opacity: 0 },
        enter: { x: 0, opacity: 1, transition: { delay: 0.5, type: 'spring', stiffness: 100 } },
        exit: { x: -100, opacity: 0, transition: { delay: 2, type: 'spring', stiffness: 100 } },
};

export const boxScale = {
        hidden: { opacity: 0 },
        enter: { opacity: 1, scale: [0.5, 1], transition: { delay: 1, type: 'spring', stiffness: 100 } },
        exit: { opacity: 0 },
};

export const slideUpDown = {
        hidden: { y: -50, opacity: 0, transition: { delay: 0.1, type: 'spring', stiffness: 100 } },
        enter: { y: 0, opacity: 1, transition: { delay: 0.1, type: 'spring', stiffness: 100 } },
        exit: { y: 50, opacity: 0, transition: { type: 'linear' } },
};

export const slideRight = {
        hidden: { x: 50, opacity: 0, transition: { delay: 0.1, type: 'spring', stiffness: 100 } },
        enter: { x: 0, opacity: 1, transition: { delay: 0.5, type: 'spring', stiffness: 100 } },
        exit: { x: 50, opacity: 0, transition: { type: 'linear' } },
};
