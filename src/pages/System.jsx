import { useMode } from '../context/ModeProvider';
import { Btn } from '../theme/buttons.styled';
import { Heading, SubHeading } from '../theme/typography.styled';
import NavButtons from '../components/UI/Navigation/NavButtons';
import PageLink from '../components/UI/Navigation/PageLink';
import IconButton from '../components/UI/Buttons/IconButton';
import TextIconButton from '../components/UI/Buttons/TextIconButton';
import Spiner from '../animation/Spiner';
import SortButton from '../components/UI/Buttons/SortButton';
import ThemeSwitcher from '../components/UI/Buttons/ThemeSwitcher';
import ChoiceSection from '../components/UI/Buttons/ChoiceSection';

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
                        <Btn m={5} onClick={toggleTheme} type="button">
                                CHANGE
                        </Btn>
                        <NavButtons />
                        <PageLink dislike />
                        <IconButton search />
                        <IconButton back />
                        <IconButton close />
                        <IconButton likeOut />
                        <IconButton likeFill />
                        <IconButton update />
                        <TextIconButton loading>UPLOAD</TextIconButton>
                        <Spiner />
                        <SortButton up />
                        <SortButton down />
                        <ThemeSwitcher />
                        <ChoiceSection />
                </>
        );
};

export default Home;