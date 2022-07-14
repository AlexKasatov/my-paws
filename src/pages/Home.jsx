import styled from 'styled-components';
import heroImg from '../image/main/girl-and-pet.webp';
import { Flex } from '../theme/layout.styled';

export const BackgroundBox = styled.div`
        width: 540px;
        height: 600px;
        border: none;
        background-color: ${(props) => props.theme.colors.pageColor};
        border-radius: 20px;
        margin: 30px 0;
        img {
                margin-top: -80px;
                margin-left: -40px;
                /* position: absolute;
                top: -50px;
                right: -10px; */
        }
`;
const Home = () => (
        <Flex flexDirection="column" ml={5}>
                <BackgroundBox>
                        <img src={heroImg} alt="hero-img" style={{ width: '600px' }} />
                </BackgroundBox>
        </Flex>
);

export default Home;
