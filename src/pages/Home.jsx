import styled from 'styled-components';
import heroImg from '../image/main/girl-and-pet.webp';
import { Flex } from '../theme/layout.styled';

export const BackgroundBox = styled.div`
        width: 680px;
        height: 840px;
        border: none;
        background-color: ${(props) => props.theme.colors.pageColor};
        border-radius: 20px;
        margin: 30px 0;
        img {
                width: 895px;
                height: 1024px;
                margin-top: -110px;
                margin-left: -50px;
                /* position: absolute;
                top: -50px;
                right: -10px; */
        }
`;
const Home = () => (
        <Flex flexDirection="column" ml={5}>
                <BackgroundBox>
                        <img src={heroImg} alt="hero-img" />
                </BackgroundBox>
        </Flex>
);

export default Home;
