/* eslint-disable camelcase */
import { useState, useEffect, Children } from 'react';
import { toast } from 'react-toastify';
import { Wrapper } from '../components/UI/Wrappers/Wrappers.styled';
import { FlexGapM, ImageGallery, Flex } from '../theme/layout.styled';
import Nav from '../components/Nav';
import { BtnPrimary } from '../theme/buttons.styled';
import IconButton from '../components/UI/Buttons/IconButton';
import useFetch from '../hooks/useFetch';
import HttpService from '../service/http.service';
import useGoBack from '../hooks/useGoBack';
import ImageItem from '../components/ImageItem';
import { useData } from '../context/DataProvider';
import UserLogs, { NoUserLogs } from '../components/UserLogs';
import { SpinnerHypnotic } from '../animation/Spinners.styled';

const Fav = () => {
        const [fav, setFav] = useState([]);
        const [fetch, isLoading, isError] = useFetch(async () => {
                const response = await HttpService.getFavourites();

                setFav(response);
        });
        // remove img from favs
        const [remove, isRemoveLoading, isremoveError] = useFetch(async (id) => {
                const response = await HttpService.deleteFavourites(id);
        });

        const { userLogs, setUserLogs } = useData();

        useEffect(() => {
                fetch();
                // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        const handleRemoveFav = async (id) => {
                // ? used simple it, not image_id
                // send delete req to API & remove img from favs
                await remove(id);
                toast.success('Image removed from favourites', {
                        position: 'bottom-left',
                });
                // remove img from fav state
                setFav(fav.filter((item) => item.id !== id));

                // get current time
                const time = new Date();
                const currentTime = `${time.getHours()}:${time.getMinutes()}`;
                // update user logs
                setUserLogs((prev) => [...prev, { id, type: 'fav', value: 'removed from Favourites', currentTime }]);
        };

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

                                        <BtnPrimary maxWidth="192px" fontSize="20px" mr="46%">
                                                FAVOURITES
                                        </BtnPrimary>
                                </FlexGapM>
                                {isLoading ? (
                                        <Flex justifyContent="center" mt="10rem" mb="10rem">
                                                <SpinnerHypnotic />
                                        </Flex>
                                ) : (
                                        <ImageGallery flexDirection="column">
                                                {Children.toArray(
                                                        fav.map(({ image, id }, index) => (
                                                                <ImageItem
                                                                        onEvent={() => handleRemoveFav(id)}
                                                                        image={image}
                                                                        index={index}
                                                                />
                                                        ))
                                                )}
                                        </ImageGallery>
                                )}
                                {/* TODO User logs */}
                                {Children.toArray(
                                        userLogs
                                                .filter(({ type }) => type === 'fav')
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

export default Fav;
