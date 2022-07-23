/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
import { useState, useEffect, Children, useMemo, Suspense } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Wrapper } from '../components/UI/Wrappers/Wrappers.styled';
import { FlexGapM, ImageSimpleGrid, Flex } from '../theme/layout.styled';
import Nav from '../components/Nav';
import { BtnPrimary } from '../theme/buttons.styled';
import IconButton from '../components/UI/Buttons/IconButton';
import useFetch from '../hooks/useFetch';
import HttpService from '../service/http.service';
import useGoBack from '../hooks/useGoBack';
import Spiner from '../animation/Spiner';
import ImageItem from '../components/ImageItem';
import UserLogs, { NoUserLogs } from '../components/UserLogs';
import { useData } from '../context/DataProvider';
import { SpinnerHypnotic } from '../animation/Spinners.styled';
import AnimationWrapper from '../animation/AnimationWrapper';

const Likes = () => {
        const [search, setSearch] = useState('');
        const [likes, setLikes] = useState([]);
        const [filtredLikes, setFiltredLikes] = useState([]);
        const [likedImg, setLikedImg] = useState([]);
        // used for handling loading & erros Promise.all dislikes in useEffect
        const [isLikedImgLoading, setIsLikedImgLoading] = useState(false);
        const [isLikedImgError, setIsLikedImgError] = useState('');
        // state from context to manage user logs
        const { userLogs, userToken } = useData();
        // fetch all liked images from API
        const [fetchLike, isLikeLoading, isLikeError] = useFetch(async () => {
                const response = await HttpService.getVotes(userToken);
                setLikes(response);
        });

        const navigate = useNavigate();

        // return filtred array of liked images
        useMemo(() => {
                setFiltredLikes(likes.filter(({ value }) => value === 1));
        }, [likes]);

        // fetch vote histroy ( likes, dislikes, image_id )
        useEffect(() => {
                fetchLike();
                // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        // create Promises array of  liked images
        const likedImagesPromises = useMemo(() => {
                const likeImagePromises2 = [];
                if (filtredLikes.length > 0) {
                        for (let index = 0; index < filtredLikes.length; index++) {
                                likeImagePromises2.push(
                                        axios(`https://api.thecatapi.com/v1/images/${filtredLikes[index].image_id}`)
                                );
                        }
                }
                return likeImagePromises2;
        }, [filtredLikes]);

        // resolve Promises array of  liked images & update likedImg state
        useEffect(() => {
                Promise.all(likedImagesPromises)
                        .then((res) => {
                                setIsLikedImgLoading(true);
                                setLikedImg(res.map((i) => i.data));
                        })
                        .catch((err) => {
                                setIsLikedImgError(err);
                        })
                        .finally(() => {
                                setIsLikedImgLoading(false);
                        });
        }, [likedImagesPromises]);

        // go to search breed page
        const handleSearchBreed = () => {
                const searchValue = search?.value || '';
                navigate(`/search/${searchValue}`);
        };

        const goBack = useGoBack();
        const handleGoBack = () => {
                goBack();
        };

        return (
                <AnimationWrapper>
                        <Nav search={search} setSearch={setSearch} api onSearchAPI={handleSearchBreed} />
                        <Wrapper>
                                <FlexGapM alignItems="center" justifyContent="flex-start" mt={2} mb={2}>
                                        <IconButton onGoBack={handleGoBack} back />

                                        <BtnPrimary fontSize="20px" mr="46%">
                                                LIKES
                                        </BtnPrimary>
                                </FlexGapM>
                                {isLikeLoading ? (
                                        <Flex justifyContent="center" mt="10rem" mb="10rem">
                                                <SpinnerHypnotic />
                                        </Flex>
                                ) : (
                                        <ImageSimpleGrid flexDirection="column">
                                                {Children.toArray(
                                                        likedImg.map((image, index) => (
                                                                <ImageItem key={index} image={image} />
                                                        ))
                                                )}
                                        </ImageSimpleGrid>
                                )}
                                {/* TODO FIX THIS SPINNER */}
                                {!likedImagesPromises.length && <Spiner />}
                                {/* TODO User logs */}
                                {Children.toArray(
                                        userLogs
                                                .filter(({ type }) => type === 'like')
                                                .map(({ currentTime, id, value, icon }) => (
                                                        <UserLogs
                                                                currentTime={currentTime}
                                                                id={id}
                                                                value={value}
                                                                icon={icon}
                                                        />
                                                ))
                                )}
                                {!userLogs.length && <NoUserLogs />}
                        </Wrapper>
                </AnimationWrapper>
        );
};

export default Likes;
