/* eslint-disable no-shadow */
import { Children, useState, useEffect, useMemo } from 'react';
import { FlexGapM, ImageGallery } from '../theme/layout.styled';
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

const Gallery = () => {
        const goBack = useGoBack();

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
                                        <TextIconButton upload>UPLOAD</TextIconButton>
                                </FlexGapM>

                                <ControlsGallery
                                        onLoadMoreCats={handleLoadMoreCats}
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
                                        <Spiner />
                                ) : (
                                        <ImageGallery flexDirection="column">
                                                {Children.toArray(
                                                        breeds.map(({ url }, index) => (
                                                                <ImageItem image={url} index={index} />
                                                        ))
                                                )}
                                        </ImageGallery>
                                )}
                                {!breeds.length && <HeadingBase>😿😿😿 Nothing is found 😿😿😿</HeadingBase>}
                        </Wrapper>
                </>
        );
};

export default Gallery;
