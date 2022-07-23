/* eslint-disable no-console */
import { useState, useEffect, Children } from 'react';
import { useParams } from 'react-router-dom';
import { Wrapper } from '../../components/UI/Wrappers/Wrappers.styled';
import useFetch from '../../hooks/useFetch';
import HttpService from '../../service/http.service';
import { BtnPrimary, BtnPagination } from '../../theme/buttons.styled';
import IconButton from '../../components/UI/Buttons/IconButton';
import { FlexGapM, Flex } from '../../theme/layout.styled';
import useGoBack from '../../hooks/useGoBack';
import PageLink from '../../components/UI/Navigation/PageLink';
import ImageCard from '../../components/UI/Cards/ImageCard';
import InfoDesc from '../../components/UI/Cards/InfoDesc';
import { SpinnerHypnotic } from '../../animation/Spinners.styled';
import AnimationWrapper from '../../animation/AnimationWrapper';

const Info = () => {
        const goBack = useGoBack();
        const [breed, setBreed] = useState('');
        const [currentImg, setCurrentImg] = useState(0);

        const { id } = useParams(); // need to get chosen breed
        const [fetch, isLoading, isError] = useFetch(async () => {
                const res = await HttpService.getImageByBreedId(id, 5);
                setBreed(res);
        });

        useEffect(() => {
                fetch();
                // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);
        const handleGoBack = () => goBack();

        // slider handlers
        const handleImgRigth = () => {
                if (currentImg < breed.length - 1) {
                        setCurrentImg((prev) => prev + 1);
                }
        };

        const handleImgLeft = () => {
                if (currentImg > 0) {
                        setCurrentImg((prev) => prev - 1);
                }
        };

        return (
                <AnimationWrapper>
                        {/* NAV */}
                        <FlexGapM alignItems="center" mt="30px" mb="10px">
                                <PageLink like url="/likes" />
                                <PageLink fav url="/fav" />
                                <PageLink dislike url="/dislike" />
                        </FlexGapM>
                        <Wrapper>
                                <FlexGapM alignItems="center" mt={2} mb={2}>
                                        {/* go back button */}
                                        <IconButton back onGoBack={handleGoBack} />
                                        <BtnPrimary fontSize="20px">BREEDS</BtnPrimary>
                                        {breed && (
                                                <BtnPrimary fontSize="20px">
                                                        {breed[0].breeds[0].id.toUpperCase()}
                                                </BtnPrimary>
                                        )}
                                        <IconButton back onEvent={handleImgLeft} />
                                        <IconButton forward onEvent={handleImgRigth} />
                                </FlexGapM>

                                {isLoading ? (
                                        <Flex justifyContent="center" mt="10rem" mb="10rem">
                                                <SpinnerHypnotic />
                                        </Flex>
                                ) : (
                                        <div>
                                                {breed && <ImageCard url={breed[currentImg]?.url} />}

                                                {breed && (
                                                        <FlexGapM
                                                                backgroundColor="pageMain"
                                                                border="none"
                                                                margin="0 auto"
                                                                position="absolute"
                                                                top="59%"
                                                                left="calc(60vw + 30px)"
                                                                // right="45vw"
                                                                width="90px"
                                                                py="1rem"
                                                                px="3.2rem"
                                                                borderRadius="20px"
                                                                alignItems="center"
                                                                justifyContent="center"
                                                                mt="2rem"
                                                                mb="2rem"
                                                        >
                                                                {Children.toArray(
                                                                        breed.map((item, index) => (
                                                                                <BtnPagination
                                                                                        backgroundColor={
                                                                                                index === currentImg
                                                                                                        ? 'primary'
                                                                                                        : 'secondary'
                                                                                        }
                                                                                        type="button"
                                                                                        onClick={() =>
                                                                                                setCurrentImg(index)
                                                                                        }
                                                                                />
                                                                        ))
                                                                )}
                                                        </FlexGapM>
                                                )}
                                        </div>
                                )}

                                {/* Image Pagination buttons */}
                                {/* Old code for test */}
                                {/* <button disabled={!currentImg} onClick={handleImgLeft} type="button">
                                        left
                                </button>
                                <button
                                        disabled={currentImg === breed.length - 1}
                                        onClick={handleImgRigth}
                                        type="button"
                                >
                                        right
                                </button> */}
                                {breed && <InfoDesc data={breed[0].breeds[0]} />}
                        </Wrapper>
                </AnimationWrapper>
        );
};

export default Info;
