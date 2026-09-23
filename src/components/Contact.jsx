import {useRef, useState} from "react";
import EmailJS from "@emailjs/browser";
import {motion} from "framer-motion";

import {contact, SHEET_TOTAL} from "../constants";
import {ArrowRight, CornerMark, GitHubIcon, LinkedInIcon, MailIcon} from "./blueprint/Icons";
import {RegistrationCorners, SheetEyebrow} from "./blueprint/Primitives";
import Sheet from "./blueprint/Sheet";

const ChannelRow = ({href, external, Icon, label, value, last}) => (
    <motion.a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        whileHover={{x: 4}}
        transition={{duration: 0.15}}
        className={`flex items-center gap-4 sm:gap-5 px-4 sm:px-[22px] py-4 sm:py-[18px] text-ink ${
            last ? "" : "border-b border-ink"
        }`}
    >
        <Icon />
        <span className="upper w-20 sm:w-24 flex-shrink-0 text-[10px] sm:text-[11px] font-bold">
            {label}
        </span>
        <span className="flex-grow min-w-0 text-[14px] sm:text-[17px] font-semibold truncate">
            {value}
        </span>
        <ArrowRight size={18} stroke="#1B4DFF" />
    </motion.a>
);

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({name: "", email: "", message: ""});
    const [loading, setLoading] = useState(false);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setForm((prev) => ({...prev, [name]: value}));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);

        EmailJS.send(
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            {
                from_name: form.name,
                to_name: "Roshan Jose",
                from_email: form.email,
                to_email: contact.email,
                message: form.message,
            },
            {publicKey: import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY}
        ).then(
            () => {
                setLoading(false);
                alert("Thank you. I will get back to you as soon as possible.");
                setForm({name: "", email: "", message: ""});
            },
            (error) => {
                setLoading(false);
                console.error(error);
                alert("Ahh, something went wrong. Please try again.");
            }
        );
    };

    return (
        <Sheet id="contact" noBorder grow>
            <RegistrationCorners Icon={CornerMark} />

            <SheetEyebrow sheet="10" name="Contact" withRule meta="Melbourne, AU · SWE / AI roles" />

            <div className="flex flex-col lg:flex-row gap-10 lg:gap-[60px] items-start">
                <div className="flex-1 min-w-0 w-full">
                    <h2 className="m-0 mb-5 text-[36px] sm:text-[48px] lg:text-[60px] leading-[0.98] font-black tracking-[-0.01em]">
                        ALWAYS HAPPY<br />TO CONNECT.
                    </h2>
                    <p className="m-0 mb-8 lg:mb-9 text-[16px] sm:text-[19px] leading-[1.55] font-medium max-w-[520px]">
                        Looking for Software Engineer and AI Engineer roles in Melbourne.
                    </p>

                    <div className="border-[3px] border-ink bg-panel">
                        <ChannelRow
                            href={`mailto:${contact.email}`}
                            Icon={MailIcon}
                            label="Email"
                            value={contact.email}
                        />
                        <ChannelRow
                            href={contact.linkedin.href}
                            external
                            Icon={LinkedInIcon}
                            label="LinkedIn"
                            value={contact.linkedin.label}
                        />
                        <ChannelRow
                            href={contact.github.href}
                            external
                            Icon={GitHubIcon}
                            label="GitHub"
                            value={contact.github.label}
                            last
                        />
                    </div>
                </div>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="w-full lg:w-[520px] flex-shrink-0 m-0 border-[3px] border-ink bg-panel"
                >
                    <div className="hatch h-[30px] sm:h-[34px] border-b-[3px] border-ink flex items-center px-3">
                        <span className="upper bg-panel px-2 py-0.5 text-[10px] sm:text-[11px] font-bold border border-ink">
                            Fig. 06 — Message sheet
                        </span>
                    </div>
                    <div className="p-5 sm:p-[26px] flex flex-col gap-5">
                        <label className="flex flex-col gap-2">
                            <span className="upper text-[11px] font-bold">Name</span>
                            <input
                                type="text"
                                name="name"
                                autoComplete="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="h-12 box-border border-2 border-ink px-3.5 text-[16px] bg-panel text-ink"
                            />
                        </label>
                        <label className="flex flex-col gap-2">
                            <span className="upper text-[11px] font-bold">Email</span>
                            <input
                                type="email"
                                name="email"
                                autoComplete="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="h-12 box-border border-2 border-ink px-3.5 text-[16px] bg-panel text-ink"
                            />
                        </label>
                        <label className="flex flex-col gap-2">
                            <span className="upper text-[11px] font-bold">Message</span>
                            <textarea
                                name="message"
                                rows={5}
                                value={form.message}
                                onChange={handleChange}
                                required
                                className="h-[140px] box-border border-2 border-ink px-3.5 py-3 text-[16px] bg-panel text-ink resize-y"
                            />
                        </label>
                        <motion.button
                            type="submit"
                            disabled={loading}
                            whileHover={{y: -2}}
                            whileTap={{scale: 0.98}}
                            transition={{duration: 0.15}}
                            className="upper flex items-center justify-between h-14 px-5 bg-ink text-canvas text-[14px] font-bold tracking-[0.08em] disabled:opacity-60"
                        >
                            {loading ? "Sending..." : "Send message"}
                            <ArrowRight />
                        </motion.button>
                    </div>
                </form>
            </div>

            <div className="hidden lg:flex items-center gap-5 mt-11 pt-6 border-t border-ink">
                <div className="upper text-[11px] font-bold whitespace-nowrap">
                    Portfolio — Rev. 2026
                </div>
                <div aria-hidden="true" className="flex-grow h-px bg-ink" />
                <div className="upper text-[11px] font-bold text-accent whitespace-nowrap">
                    End of document
                </div>
            </div>
        </Sheet>
    );
};

export default Contact;
