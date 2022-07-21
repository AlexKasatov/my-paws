/* eslint-disable no-shadow */
import { Children, useState, useEffect, useMemo } from 'react';
import { toast } from 'react-toastify';
import { Flex, FlexGapM, ImageGallery } from '../theme/layout.styled';
import Nav from '../components/Nav';
import { Wrapper } from '../components/UI/Wrappers/Wrappers.styled';
import IconButton from '../components/UI/Buttons/IconButton';
import { BtnPrimary } from '../theme/buttons.styled';
import useGoBack from '../hooks/useGoBack';
import ControlsGallery from '../components/UI/Controls/ControlsGallery';
import useFetch from '../hooks/useFetch';
import HttpService from '../service/http.service';
import Spiner from '../animation/Spiner';
import ImageItem from '../components/ImageItem';
import TextIconButton from '../components/UI/Buttons/TextIconButton';
import { HeadingBase } from '../theme/typography.styled';
import { useToggle } from '../hooks/useToggle';
import Popup from '../components/UI/Popup/Popup';
import { useData } from '../context/DataProvider';
import favs from '../image/icons/logs/fav.svg';
import { NoUserLogs } from '../components/UserLogs';
import { SpinnerHypnotic } from '../animation/Spinners.styled';

const Gallery = () => {
        const goBack = useGoBack();
        const [popup, handlePopup] = useToggle();

        // states for query params
        const [breedId, setBreedId] = useState('acur');
        const [limit, setLimit] = useState('');
        const [order, setOrder] = useState('');
        const [type, setType] = useState('');

        // states for fetching data
        const [breeds, setBreeds] = useState([]);
        const [filtredBreeds, setFiltredBreeds] = useState([]);
        const [fetch, isLoading, isError] = useFetch(async (id, type, order, limit, breedId) => {
                const response = await HttpService.getImagesForGallery(id, type, order, limit);
                console.log(
                        '🚀 ~ file: Gallery.jsx ~ line 33 ~ const[fetch,isLoading,isError]=useFetch ~ response',
                        response
                );

                setBreeds(response);
        });

        // Add to favs
        const [fav, isFavLoading, isFavError] = useFetch(async (id) => {
                await HttpService.addFavourites(id);
        });

        // state from context to manage user logs
        const { userLogs, setUserLogs } = useData();

        // TODO fix it later ( add to fetch function )
        const handleSearch = (search, breed) => {
                let data = [...breeds];

                if (search) {
                        data = data.filter((i) => i.name.toLowerCase().includes(search.toLowerCase()));
                }

                if (breed) {
                        data = data.filter((i) => i.name.toLowerCase().includes(breed.toLowerCase()));
                }

                setFiltredBreeds(data);
        };

        // fetch data from API
        useEffect(() => {
                const typeValue = type?.value || 'gif,jpg,png';
                const limitValue = limit?.value || '10';
                const orderValue = order?.value || 'RANDOM';
                const breedIdValue = breedId?.value || '';

                fetch(breedIdValue, typeValue, orderValue, limitValue);

                // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [type, order, limit, breedId]);

        // Load more cat images
        const handleLoadMoreCats = () => {
                const typeValue = type?.value || 'gif,jpg,png';
                const limitValue = limit?.value || '10';
                const orderValue = order?.value || 'RANDOM';
                const breedIdValue = breedId?.value || '';

                fetch(breedIdValue, typeValue, orderValue, limitValue);
        };

        // Add to favs handler
        const handleFav = async (id) => {
                // ? id image_id

                await fav(id);
                toast('LOVE IT!', {
                        icon: '❤️',
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
                                                GALLERY
                                        </BtnPrimary>
                                        <TextIconButton onEvent={handlePopup} upload>
                                                UPLOAD
                                        </TextIconButton>
                                </FlexGapM>

                                <ControlsGallery
                                        onEvent={handleLoadMoreCats}
                                        type={type}
                                        setType={setType}
                                        limit={limit}
                                        setLimit={setLimit}
                                        order={order}
                                        setOrder={setOrder}
                                        breed={breedId}
                                        setBreed={setBreedId}
                                />

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
                                                                        onEvent={() => handleFav(id)}
                                                                />
                                                        ))
                                                )}
                                        </ImageGallery>
                                )}

                                {isLoading ? !breeds.length : <NoUserLogs />}

                                {popup && <Popup onEvent={handlePopup} />}
                        </Wrapper>
                </>
        );
};

export default Gallery;
