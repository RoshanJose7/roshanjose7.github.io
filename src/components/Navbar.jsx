import {useEffect, useState} from "react";

import {navLinks} from "../constants";
import {CloseIcon, CrosshairMark, HamburgerIcon} from "./blueprint/Icons";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    // Close the mobile menu on Escape for keyboard users.
    useEffect(() => {
        if (!toggle) return undefined;
        const handleKey = (event) => {
            if (event.key === "Escape") setToggle(false);
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [toggle]);

    return (
        <nav className="sticky top-0 z-20 h-16 xl:h-[92px] flex-shrink-0 box-border px-3 xl:pl-10 xl:pr-6 2xl:pl-[100px] 2xl:pr-[60px] flex items-center justify-between border-b-[3px] border-ink bg-panel">
            <a
                href="#"
                className="flex items-center gap-2.5 xl:gap-3 text-ink flex-shrink-0"
                onClick={() => window.scrollTo(0, 0)}
            >
                <CrosshairMark size={24} className="xl:w-7 xl:h-7 2xl:w-[30px] 2xl:h-[30px]" />
                <span className="upper text-[15px] xl:text-[16px] 2xl:text-[18px] font-black whitespace-nowrap">
                    <span className="xl:hidden">Roshan Jose</span>
                    <span className="hidden xl:inline">Roshan Jose — SWE</span>
                </span>
            </a>

            {/* Nav only collapses to inline links at xl (1280px+): 8 sections
                (5 in the reference design + Education/Volunteer/Publications)
                need tighter spacing than the mockup's 5-link bar to fit. */}
            <div className="hidden xl:flex items-center gap-3 2xl:gap-9 min-w-0">
                <ul className="list-none flex flex-row gap-2.5 2xl:gap-7">
                    {navLinks.map((nav) => (
                        <li key={nav.id}>
                            <a
                                href={`#${nav.id}`}
                                className="upper text-[10.5px] 2xl:text-[13px] font-bold text-ink hover:text-accent transition-colors whitespace-nowrap"
                            >
                                {nav.title}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="upper flex items-center gap-2 2xl:gap-2.5 border-l border-ink py-1 pl-3 2xl:pl-6 text-[9px] 2xl:text-[11px] font-bold whitespace-nowrap flex-shrink-0">
                    <span className="w-[7px] h-[7px] 2xl:w-[9px] 2xl:h-[9px] bg-accent inline-block flex-shrink-0" />
                    <span className="hidden 2xl:inline">Status: open to roles</span>
                    <span className="2xl:hidden">Open to roles</span>
                </div>
            </div>

            <button
                type="button"
                aria-label={toggle ? "Close menu" : "Open menu"}
                aria-expanded={toggle}
                onClick={() => setToggle((value) => !value)}
                className="xl:hidden w-11 h-11 border-2 border-ink bg-panel flex items-center justify-center flex-shrink-0"
            >
                {toggle ? <CloseIcon /> : <HamburgerIcon />}
            </button>

            {toggle && (
                <div className="xl:hidden absolute top-16 left-0 right-0 border-b-[3px] border-ink bg-panel z-10">
                    <ul className="list-none flex flex-col">
                        {navLinks.map((nav) => (
                            <li key={nav.id} className="border-t border-ink">
                                <a
                                    href={`#${nav.id}`}
                                    onClick={() => setToggle(false)}
                                    className="upper flex items-center justify-between px-6 py-4 text-[13px] font-bold text-ink"
                                >
                                    {nav.sheet} / {nav.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
