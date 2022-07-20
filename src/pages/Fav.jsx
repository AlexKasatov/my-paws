import { useState, useEffect, Children } from 'react';
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

const Fav = () => {
        const [fav, setFav] = useState([]);
        const [fetch, isLoading, isError] = useFetch(async () => {
                const response = await HttpService.getFavourites();
                console.log(
                        '🚀 ~ file: Fav.jsx ~ line 15 ~ const[fetch,isLoading,isError]=useFetch ~ response',
                        response
                );
                setFav(response);
        });

        useEffect(() => {
                fetch();
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
                                                FAVOURITES
                                        </BtnPrimary>
                                </FlexGapM>
                                {isLoading ? (
                                        <Spiner />
                                ) : (
                                        <ImageGallery flexDirection="column">
                                                {Children.toArray(
                                                        fav.map(({ image }, index) => (
                                                                <ImageItem image={image} index={index} />
                                                        ))
                                                )}
                                        </ImageGallery>
                                )}
                                {/* user logs  */}
                        </Wrapper>
                </>
        );
};

export default Fav;
