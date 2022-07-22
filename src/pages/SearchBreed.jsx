/* eslint-disable no-shadow */
import { useParams, useNavigate } from 'react-router-dom';
import { Children, useState, useEffect, useMemo } from 'react';
import { toast } from 'react-toastify';
import HttpService from '../service/http.service';
import useGoBack from '../hooks/useGoBack';
import useFetch from '../hooks/useFetch';
import { Flex, FlexGapM, ImageGallery } from '../theme/layout.styled';
import Nav from '../components/Nav';
import { Wrapper } from '../components/UI/Wrappers/Wrappers.styled';
import IconButton from '../components/UI/Buttons/IconButton';
import { BtnPrimary } from '../theme/buttons.styled';
import { SpinnerHypnotic } from '../animation/Spinners.styled';
import ImageItem from '../components/ImageItem';
import { useData } from '../context/DataProvider';
import favs from '../image/icons/logs/fav.svg';
import AnimationWrapper from '../animation/AnimationWrapper';

const SearchBreed = () => {
        const goBack = useGoBack();
        const navigate = useNavigate();
        // states for fetching data
        const { id } = useParams();
        const [search, setSearch] = useState('');
        const [breeds, setBreeds] = useState([]);
        // hook for fetch breeds
        const [fetch, isLoading, isError] = useFetch(async () => {
                const response = await HttpService.getImagesForGallery(id);
                console.log(
                        '🚀 ~ file: SearchBreed.jsx ~ line 24 ~ const[fetch,isLoading,isError]=useFetch ~ response',
                        response
                );
                setBreeds(response);
        });

        // state from context to manage user logs
        const { setUserLogs } = useData();

        // Add to favs
        const [fav, isFavLoading, isFavError] = useFetch(async (id) => {
                await HttpService.addFavourites(id);
        });

        // fetch all breeds
        useEffect(() => {
                fetch();
                // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        // Add to favs handler
        const handleFav = async (id) => {
                // ? id image_id

                await fav(id);
                toast('LOVE IT!', {
                        icon: '❤️',
                        position: 'bottom-left',
                });

                // get current time
                const time = new Date();
                const currentTime = `${time.getHours()}:${time.getMinutes()}`;
                // update user logs
                setUserLogs((prev) => [
                        ...prev,
                        { id, type: 'fav', value: 'added to Favourites', currentTime, icon: favs },
                ]);
        };

        // go to search breed page
        const handleSearchBreed = () => {
                const searchValue = search?.value || '';
                navigate(`/search/${searchValue}`);
        };

        const handleGoBack = () => {
                goBack();
        };
        return (
                <AnimationWrapper>
                        {' '}
                        <Nav onSearchAPI={handleSearchBreed} search={search} setSearch={setSearch} api />
                        <Wrapper>
                                <FlexGapM alignItems="center" justifyContent="flex-start" mt={2} mb={2}>
                                        <IconButton onGoBack={handleGoBack} back />

                                        <BtnPrimary fontSize="20px" mr="46%">
                                                SEARCH
                                        </BtnPrimary>
                                </FlexGapM>
                                {/* IMAGE GRID */}
                                {isLoading ? (
                                        <Flex justifyContent="center" mt="10rem" mb="10rem">
                                                <SpinnerHypnotic />
                                        </Flex>
                                ) : (
                                        <ImageGallery flexDirection="column">
                                                {Children.toArray(
                                                        breeds.map(({ url, id }, index) => (
                                                                <ImageItem
                                                                        image={url}
                                                                        index={index}
                                                                        deleteItem
                                                                        onEvent={() => handleFav(id)}
                                                                />
                                                        ))
                                                )}
                                        </ImageGallery>
                                )}
                        </Wrapper>
                </AnimationWrapper>
        );
};

export default SearchBreed;
