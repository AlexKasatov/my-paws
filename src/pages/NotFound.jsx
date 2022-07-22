import AnimationWrapper from '../animation/AnimationWrapper';
import { HeadingBase } from '../theme/typography.styled';
import { Wrapper } from '../components/UI/Wrappers/Wrappers.styled';
import { FlexGapM, Flex } from '../theme/layout.styled';
import { BtnPrimary } from '../theme/buttons.styled';
import IconButton from '../components/UI/Buttons/IconButton';
import useGoBack from '../hooks/useGoBack';

const NotFound = () => {
        const goBack = useGoBack();
        const handleGoBack = () => {
                goBack();
        };
        return (
                <AnimationWrapper>
                        <Wrapper>
                                <FlexGapM alignItems="center" justifyContent="flex-start" mt={2} mb={2}>
                                        <IconButton onGoBack={handleGoBack} back />

                                        <BtnPrimary fontSize="20px" mr="46%">
                                                GO BACK
                                        </BtnPrimary>
                                </FlexGapM>
                                <Flex
                                        backgroundColor="pageSecondary"
                                        justifyContent="center"
                                        mt="10rem"
                                        borderRadius="20px"
                                >
                                        <HeadingBase fontSize="36px" p="6rem">
                                                Sorry, this page is not found
                                        </HeadingBase>
                                </Flex>
                        </Wrapper>
                </AnimationWrapper>
        );
};

export default NotFound;
