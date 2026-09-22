import {useRef, useState} from "react";
import {motion} from "framer-motion";
import EmailJS from "@emailjs/browser";

import {styles} from "../styles";
import {SectionWrapper} from "../hoc";
import {fadeIn} from "../utils/motion";
import {contact} from "../constants";

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const {target} = e;
        const {name, value} = target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        EmailJS
            .send(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    to_name: "Roshan Jose",
                    from_email: form.email,
                    to_email: contact.email,
                    message: form.message,
                },
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    setLoading(false);
                    alert("Thank you. I will get back to you as soon as possible.");

                    setForm({
                        name: "",
                        email: "",
                        message: "",
                    });
                },
                (error) => {
                    setLoading(false);
                    console.error(error);

                    alert("Ahh, something went wrong. Please try again.");
                }
            );
    };

    return (
        <motion.div
            variants={fadeIn("up", "tween", 0.2, 1)}
            className='w-full max-w-3xl mx-auto bg-black-100 p-8 rounded-2xl'
        >
            <p className={styles.sectionSubText}>Get in touch</p>
            <h3 className={styles.sectionHeadText}>Contact.</h3>

            <div className='flex gap-4 mt-6'>
                <a
                    href={contact.github.href}
                    target='_blank'
                    rel='noreferrer'
                    className='flex items-center gap-2 bg-black-200 px-4 py-2 rounded-full text-secondary hover:text-white transition-colors'
                >
                    <img src={contact.github.icon} alt='GitHub' className='w-5 h-5 object-contain'/>
                    GitHub
                </a>
                <a
                    href={contact.linkedin.href}
                    target='_blank'
                    rel='noreferrer'
                    className='flex items-center gap-2 bg-black-200 px-4 py-2 rounded-full text-secondary hover:text-white transition-colors'
                >
                    <img src={contact.linkedin.icon} alt='LinkedIn' className='w-5 h-5 object-contain'/>
                    LinkedIn
                </a>
            </div>

            <p className='mt-4 text-secondary text-[14px]'>
                Email: <a href={`mailto:${contact.email}`} className='text-white hover:underline'>{contact.email}</a>
            </p>

            <form
                ref={formRef}
                onSubmit={handleSubmit}
                className='mt-8 flex flex-col gap-8'
            >
                <label className='flex flex-col'>
                    <span className='text-white font-medium mb-4'>Your Name</span>
                    <input
                        type='text'
                        name='name'
                        value={form.name}
                        onChange={handleChange}
                        placeholder="What's your good name?"
                        className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                    />
                </label>
                <label className='flex flex-col'>
                    <span className='text-white font-medium mb-4'>Your email</span>
                    <input
                        type='email'
                        name='email'
                        value={form.email}
                        onChange={handleChange}
                        placeholder="What's your web address?"
                        className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                    />
                </label>

                <label className='flex flex-col'>
                    <span className='text-white font-medium mb-4'>Your Message</span>
                    <textarea
                        rows={7}
                        name='message'
                        value={form.message}
                        onChange={handleChange}
                        placeholder='What you want to say?'
                        className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                    />
                </label>

                <button
                    type='submit'
                    className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
                >
                    {loading ? "Sending..." : "Send"}
                </button>
            </form>
        </motion.div>
    );
};

export default SectionWrapper(Contact, "contact");
