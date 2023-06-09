import { useForm } from "react-hook-form";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from "@/shared/HText";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const ContactUs = ({setSelectedPage}: Props) => {
    
    const inputStyles = `w-full mb-5 rounded-lg bg-primary-300 px-5 py-3 placaholder-white`;
    const {
        register,
        trigger,
        formState: { errors }
    } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
        e.preventDefault();
    }
  }

  return <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
    <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
        {/* HEADER */}
        <motion.div
            className="md:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5}}
            transition={{ duration: 0.5}}
            variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0},
            }}
        >
            <HText>
                <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
            </HText>
            <p className="my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
        </motion.div>
        {/* FORM AND IMAGE */}
        <div className="mt-10 justify-between gap-8 md:flex">
            <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5}}
            transition={{ duration: 0.5}}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0},
            }}
            >
                <form
                    target="_blank"
                    onSubmit={onSubmit}
                    action="https://formsubmit.com/hud78d9329j8dhhd20d0dh2h2d0h"
                    method="POST"
                >
                <input 
                    type="text"
                    className={inputStyles} 
                    placeholder="NAME"
                    {...register("name", {
                        required: true,
                        maxLength: 100,
                    })}
                    />
                    {errors.name && (
                        <p className="mt-1 text-primary-500">
                            {errors.name.type === "required" && "This field is required"}
                            {errors.name.type === "maxLength" && "Max length is 100 char"}
                        </p>
                    )}

                    <input 
                    type="text"
                    className={inputStyles} 
                    placeholder="EMAIL"
                    {...register("email", {
                        required: true,
                        pattern: /^[A-Z0-0._%+_]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    })}
                    />
                    {errors.email && (
                        <p className="mt-1 text-primary-500">
                            {errors.email.type === "required" && "This field is required"}
                            {errors.email.type === "pattern" && "Invalid email address"}
                        </p>
                    )}

                <textarea 
                    className={inputStyles} 
                    rows={4}
                    cols={50}
                    placeholder="MESSAGE"
                    {...register("name", {
                        required: true,
                        maxLength: 2000,
                    })}
                    />
                    {errors.message && (
                        <p className="mt-1 text-primary-500">
                            {errors.message.type === "required" && "This field is required"}
                            {errors.message.type === "maxLength" && "Max length is 2000 char"}
                        </p>
                    )}
                    <button
                    type="submit"
                    className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
                    >
                        SUBMIT
                    </button>
                </form>
            </motion.div>
            <motion.div
                className="relative mt-16 basis-2/5 md:mt-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5}}
                transition={{ delay: 0.2, duration: 0.5}}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0},
                }}
                >
                <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
                    <img src={ContactUsPageGraphic} alt="ContactUsPageGraphic" className="w-full"/>
                </div>
            </motion.div>
        </div>
    </motion.div>
  </section>
}

export default ContactUs