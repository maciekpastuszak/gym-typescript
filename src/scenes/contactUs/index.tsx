import { useForm } from "react-hook-form";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from "@/shared/HText";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const ContactUs = ({setSelectedPage}: Props) => {
  return <section>
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
    </motion.div>
  </section>
}

export default ContactUs