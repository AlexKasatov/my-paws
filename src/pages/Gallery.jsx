import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { FlexGapM } from '../theme/layout.styled';
import Nav from '../components/Nav';
import { Wrapper } from '../components/UI/Wrappers/Wrappers.styled';
import IconButton from '../components/UI/Buttons/IconButton';
import { BtnPrimary } from '../theme/buttons.styled';
import useGoBack from '../hooks/useGoBack';
import ControlsGallery from '../components/UI/Controls/ControlsGallery';

const Gallery = () => {
        const navigate = useNavigate();
        const goBack = useGoBack();

        const [breeds, setBreeds] = useState([]);
        const [filtredBreeds, setFiltredBreeds] = useState([]);

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

                                <ControlsGallery />
                        </Wrapper>
                </>
        );
};

export default Gallery;
