import HText from '@/shared/HText';
import { SelectedPage } from '@/shared/types'
import image1 from '@assets/image1.png';
import image2 from '@assets/image2.png';
import image3 from '@assets/image3.png';
import image4 from '@assets/image4.png';
import image5 from '@assets/image5.png';
import image6 from '@assets/image6.png';
import { motion } from 'framer-motion';

type Props = {
    setSelectedPage:(value: SelectedPage) => void;
}

const OurClasses = ({ setSelectedPage } : Props) => {
  return <section id="ourclasses" className="w-full bg-primary-100 py-40 ">
    <motion.div
    onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
    >
        <motion.div
        className="mx-auto w-5/6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5}}
        transition={{ duration: 0.5}}
        variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0},
        }}
        >
        <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">Mauris rutrum metus vitae quam sodales aliquam. Nunc gravida nisi eu massa semper, fringilla porttitor leo suscipit. Vestibulum quis felis ullamcorper, bibendum dolor sed, tristique nibh. Nunc mattis turpis eget quam sagittis, ut ultricies ante accumsan. Donec vulputate, ligula blandit pharetra dignissim, velit tortor luctus augue, ornare commodo arcu lectus vel lorem.</p>
        </div>
        </motion.div>
        
    </motion.div>
    </section>;
};

export default OurClasses;