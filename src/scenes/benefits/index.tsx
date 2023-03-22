import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const benefits = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "State of the Art Facilities",
        description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100's of Diverse Classes",
        description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Expert and pro trainers",
        description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
    }
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section
    id="benefits"
    className="mx-auto min-h-full 2-5/6 py-20"
    >
        <motion.div
         onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        >
            {/* HEADER */}
        <div className="md:my-5 md:w-3/5">
            <HText>MORE THAN JUST A GYM.</HText>
            <p className="my-5 text-sm">We provide world class fitness equipment, trainers and classes to get to your ultimate fitness goals with ease. We provide true care into each and every member.</p>
        </div>
        {/* BENEFITS */}
        <div className="md:flex items-center justify-between gap-8 mt-5">
            {benefits.map((benefit) => (
                <Benefit />
            ))}
        </div>
        </motion.div>
    </section>
  )
}

export default Benefits