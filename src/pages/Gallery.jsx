/* eslint-disable no-shadow */
import { Children, useState, useEffect } from 'react';
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
import ImageItem from '../components/ImageItem';
import TextIconButton from '../components/UI/Buttons/TextIconButton';
import { useToggle } from '../hooks/useToggle';
import Popup from '../components/UI/Popup/Popup';
import { useData } from '../context/DataProvider';
import favs from '../image/icons/logs/fav.svg';
import { SpinnerHypnotic } from '../animation/Spinners.styled';
import AnimationWrapper from '../animation/AnimationWrapper';

const Gallery = () => {
        const goBack = useGoBack();
        const [popup, handlePopup] = useToggle();

        // states for query params
        const [breedId, setBreedId] = useState('acur');
        const [limit, setLimit] = useState('');
        const [order, setOrder] = useState('');
        const [type, setType] = useState('');
        const [search, setSearch] = useState('');

        // states for fetching data
        const [breeds, setBreeds] = useState([]);
        const [fetch, isLoading, isError] = useFetch(async (id, type, order, limit) => {
                const response = await HttpService.getImagesForGallery(id, type, order, limit);
                setBreeds(response);
        });

        // Add to favs
        const [fav, isFavLoading, isFavError] = useFetch(async (id) => {
                await HttpService.addFavourites(id);
        });

        // state from context to manage user logs
        const { setUserLogs } = useData();

        const handleSearch = () => {
                const searchValue = search?.value || '';
                fetch(searchValue);
        };

        // fetch data from API when clickn on filter
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

        const handleGoBack = () => {
                goBack();
        };

        return (
                <AnimationWrapper>
                        <Nav onSearchAPI={handleSearch} search={search} setSearch={setSearch} api />
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
                                {/* POPUP FOR UPLOAD IMAGES  */}
                                {popup && <Popup onEvent={handlePopup} />}
                        </Wrapper>
                </AnimationWrapper>
        );
};

export default Gallery;
