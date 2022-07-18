import { Children, useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { FlexGapM, ImageGrid, ImageGallery } from '../theme/layout.styled';
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
import ChoiceSection from '../components/UI/Buttons/ChoiceSection';

const Gallery = () => {
        const navigate = useNavigate();
        const goBack = useGoBack();

        const [breeds, setBreeds] = useState([]);
        const [filtredBreeds, setFiltredBreeds] = useState([]);
        const [fetch, isLoading, isError] = useFetch(async () => {
                const response = await HttpService.getImages();
                console.log(
                        '🚀 ~ file: Gallery.jsx ~ line 23 ~ const[fetch,isLoading,isError]=useFetch ~ response',
                        response
                );
                setBreeds(response);
        });

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
                fetch();
                // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        const handlerLoadMoreCats = () => {
                fetch();
                console.log('LOOOOADER MOOOORE CATZZZ');
        };

        const handleGoBack = () => {
                goBack();
        };

        return (
                <>
                        {' '}
                        <Nav onSearch={handleSearch} />
                        <Wrapper>
                                <FlexGapM alignItems="center" mt={2} mb={2}>
                                        <IconButton onGoBack={handleGoBack} back />
                                        <BtnPrimary fontSize="20px">GALLERY</BtnPrimary>
                                </FlexGapM>

                                <ControlsGallery onLoadMoreCats={handlerLoadMoreCats} />

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
                        </Wrapper>
                </>
        );
};

export default Gallery;
