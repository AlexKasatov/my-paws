import { useMode } from '../context/ModeProvider';
import { Button } from '../theme/buttons.styled';
import { Heading, SubHeading } from '../theme/typography.styled';
import NavButtons from '../components/UI/NavButtons';
import smile from '../image/icons/like-30.svg';
import LikeLink from '../components/UI/Nav/Like';

const Home = () => {
        const { toggleTheme } = useMode();
        return (
                <>
                        <Heading fontSize={3} fontWeight={500} lineHeight="heading" color="primary">
                                Hi intern!
                        </Heading>
                        <SubHeading fontSize={2} fontWeight={400}>
                                Welcome to MI 2022 Front-end test
                        </SubHeading>
                        <Button m={5} onClick={toggleTheme} type="button">
                                CHANGE
                        </Button>
                        <NavButtons />

                        <LikeLink dislike />
                </>
        );
};

export default Home;
