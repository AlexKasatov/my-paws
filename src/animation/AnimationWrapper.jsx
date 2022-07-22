import { motion } from 'framer-motion';
import { slideUpDown } from './page';

// eslint-disable-next-line react/prop-types
const AnimationWrapper = ({ children }) => (
        <motion.section initial="hidden" animate="enter" exit="exit" variants={slideUpDown}>
                {children}
        </motion.section>
);

export default AnimationWrapper;
