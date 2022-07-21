/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
import { useState, useEffect, Children, useMemo } from 'react';
import axios from 'axios';
import { Wrapper } from '../components/UI/Wrappers/Wrappers.styled';
import { FlexGapM, ImageGallery } from '../theme/layout.styled';
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

const Likes = () => {
        // state  for query dislikes
        const [dislikes, setDisLikes] = useState([]);
        const [filtredDisikes, setFiltredDisikes] = useState([]);
        const [dislikedImg, setDisikedImg] = useState([]);
        const [isDisikedImgLoading, setIsDislikedImgLoading] = useState(false);
        const [isDisikedImgError, setIsDislikedImgError] = useState('');
        // hook for fetch vote history
        const [fetchDisLike, isDislikeLoading, isDisLikeError] = useFetch(async () => {
                const response = await HttpService.getVotes();
                console.log(
                        '🚀 ~ file: Likes.jsx ~ line 19 ~ const[fetchLike,isLikeLoading,isLikeError]=useFetch ~ response',
                        response
                );

                setDisLikes(response);
        });
        // state from context to manage user logs
        const { userLogs, setUserLogs } = useData();

        // return filtred array of liked images
        useMemo(() => {
                setFiltredDisikes(dislikes.filter(({ value }) => value === 0));
        }, [dislikes]);

        // fetch vote histroy ( likes, dislikes, image_id )
        useEffect(() => {
                fetchDisLike();
                // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        // create Promises array of disliked images
        const dislikedImagesPromises = useMemo(() => {
                const promises = [];
                if (filtredDisikes.length > 0) {
                        for (let index = 0; index < filtredDisikes.length; index++) {
                                promises.push(
                                        axios(`https://api.thecatapi.com/v1/images/${filtredDisikes[index].image_id}`)
                                );
                        }
                }
                return promises;
        }, [filtredDisikes]);

        // resolve Promises array of  liked images & update likedImg state
        useEffect(() => {
                Promise.all(dislikedImagesPromises)
                        .then((res) => {
                                setIsDislikedImgLoading(true);
                                setDisikedImg(res.map((i) => i.data));
                        })
                        .catch((err) => {
                                setIsDislikedImgError(err);
                        })
                        .finally(() => {
                                setIsDislikedImgLoading(false);
                        });
        }, [dislikedImagesPromises]);

        // TODO fix it later ( add to fetch function )
        const handleSearch = (search, breed) => {};
        // ==========================================================

        const goBack = useGoBack();
        const handleGoBack = () => {
                goBack();
        };

        return (
                <>
                        <Nav onSearch={handleSearch} />
                        <Wrapper>
                                <FlexGapM alignItems="center" justifyContent="flex-start" mt={2} mb={2}>
                                        <IconButton onGoBack={handleGoBack} back />

                                        <BtnPrimary fontSize="20px" mr="46%">
                                                DISLIKES
                                        </BtnPrimary>
                                </FlexGapM>
                                {isDisikedImgLoading ? (
                                        <Spiner />
                                ) : (
                                        <ImageGallery flexDirection="column">
                                                {Children.toArray(
                                                        dislikedImg.map((image, index) => (
                                                                <ImageItem key={index} image={image} />
                                                        ))
                                                )}
                                        </ImageGallery>
                                )}
                                {!dislikedImagesPromises.length && <Spiner />}
                                {/* TODO User logs */}
                                {Children.toArray(
                                        userLogs
                                                .filter(({ type }) => type === 'dislike')
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
                </>
        );
};

export default Likes;
