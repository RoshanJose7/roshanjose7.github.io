import {SHEET_TOTAL} from "../constants";

const Footer = () => (
    <footer className="upper h-16 lg:h-16 lg:flex-shrink-0 border-t-[3px] border-ink bg-panel grid grid-cols-1 sm:grid-cols-3 text-[11px] sm:text-[12px] font-bold">
        <div className="flex items-center px-6 lg:px-[100px] py-3 sm:py-0 border-b sm:border-b-0 sm:border-r-[3px] border-ink">
            Roshan Jose — Portfolio
        </div>
        <div className="flex items-center px-6 py-3 sm:py-0 border-b sm:border-b-0 sm:border-r-[3px] border-ink">
            Melbourne, AU
        </div>
        <div className="flex items-center justify-between px-6 py-3 sm:py-0">
            Sheet {SHEET_TOTAL} / {SHEET_TOTAL}
            <span className="w-3 h-3 bg-accent inline-block" />
        </div>
    </footer>
);

export default Footer;
