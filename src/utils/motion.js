// Shared Framer Motion variants for the Structural/Blueprint design system.
// Two factories cover every animation on the site:
//   - `fadeUp` for a single element revealing on scroll or page load.
//   - `staggerContainer` for a parent whose mapped children (cards, rows,
//     list items) should reveal in sequence instead of all at once — pair
//     it with `fadeUp` on each child; children with no own `initial`/
//     `animate` inherit the "hidden"/"show" states from the parent.
// `revealViewport` is the shared scroll-trigger config. `amount: 0.4` (up
// from 0.2) plus a shrunk bottom margin mean a section needs real scroll
// distance behind it before it counts as "in view" — otherwise a section
// sitting just past a fold boundary could already satisfy a low threshold
// on initial page load, before the user has scrolled at all.

export const fadeUp = (delay = 0, distance = 24) => ({
    hidden: {opacity: 0, y: distance},
    show: {
        opacity: 1,
        y: 0,
        transition: {duration: 0.5, delay, ease: [0.22, 1, 0.36, 1]},
    },
});

export const staggerContainer = (staggerChildren = 0.08, delayChildren = 0) => ({
    hidden: {},
    show: {
        transition: {staggerChildren, delayChildren},
    },
});

export const revealViewport = {once: true, amount: 0.4, margin: "0px 0px -15% 0px"};
