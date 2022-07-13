import { useMode } from '../context/ModeProvider';
import { Button, Heading } from '../theme/elements.styled';

const Home = () => {
        const { toggleTheme } = useMode();
        return (
                <>
                        <Heading fontSize={5} lineHeight="heading">
                                THIS IS HEADING
                        </Heading>
                        <Button m={5} onClick={toggleTheme} type="button">
                                CHANGE THEME
                        </Button>
                </>
        );
};

export default Home;
