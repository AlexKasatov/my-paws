import { useMode } from '../context/ModeProvider';
import { Button, NavButton } from '../theme/buttons.styled';
import { Heading, SubHeading } from '../theme/typography.styled';
import vote from '../image/main/vote-table.webp';
import NavButtons from '../components/UI/NavButtons';

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
                </>
        );
};

export default Home;
