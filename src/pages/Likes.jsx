/* eslint-disable camelcase */
import { useState, useEffect, Children, useMemo } from 'react';
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

const Likes = () => {
        const [likes, setLikes] = useState([]);
        const [filtredLikes, setFiltredLikes] = useState([]);
        const [fetchLike, isLikeLoading, isLikeError] = useFetch(async () => {
                const response = await HttpService.getVotes();
                console.log(
                        '🚀 ~ file: Likes.jsx ~ line 19 ~ const[fetchLike,isLikeLoading,isLikeError]=useFetch ~ response',
                        response
                );

                setLikes(response);
        });

        const [fetchImgs, isImgsLoading, isImgsError] = useFetch(async (id) => {
                const response = await HttpService.getImagesById(id);
                console.log(
                        '🚀 ~ file: Fav.jsx ~ line 15 ~ const[fetch,isLoading,isError]=useFetch ~ response',
                        response
                );
                setLikes(response);
        });

        // return filtred array of liked images

        useMemo(() => {
                setFiltredLikes(likes.filter(({ value }) => value === 1));
        }, [likes]);

        useEffect(() => {
                fetchLike();
                // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        useEffect(() => {
                const ID = 'C_tOfzlXz';
                fetchImgs(ID);
                // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

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
                                                LIKES
                                        </BtnPrimary>
                                </FlexGapM>
                                {/* {isLoading ? (
                                        <Spiner />
                                ) : (
                                        // <ImageGallery flexDirection="column">
                                        //         {Children.toArray(
                                        //                 likes.map(
                                        //                         ({ image, value }, index) => value && console.log(image)
                                        //                 )
                                        //         )}
                                        // </ImageGallery>
                                )} */}
                                {/* user logs  */}
                        </Wrapper>
                </>
        );
};

export default Likes;
