import styled from 'styled-components';
import { motion } from 'framer-motion';
import heroImg from '../image/main/girl-and-pet.webp';
import { Flex } from '../theme/layout.styled';
import { slideRight } from '../animation/page';

export const BackgroundBox = styled.div`
        width: 680px;
        height: 840px;
        border: none;
        background-color: ${(props) => props.theme.colors.pageColor};
        border-radius: 20px;
        margin: 30px 0;
        img {
                width: 780px;
                height: 1024px;
                margin-top: -110px;
                margin-left: -50px;
                /* position: absolute;
                top: -50px;
                right: -10px; */
        }
`;
const Home = () => (
        <Flex
                flexDirection="column"
                ml={5}
                as={motion.div}
                initial="hidden"
                animate="enter"
                exit="exit"
                variants={slideRight}
        >
                <BackgroundBox>
                        <img src={heroImg} alt="hero-img" />
                </BackgroundBox>
        </Flex>
);

export default Home;
