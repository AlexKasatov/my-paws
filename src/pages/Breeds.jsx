/* eslint-disable no-console */
import { useState, useEffect, Children, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import HttpService from '../service/http.service';
import Spiner from '../animation/Spiner';
import { FlexGapM, ImageGrid } from '../theme/layout.styled';
import { BtnPrimary } from '../theme/buttons.styled';
import ImageItem from '../components/ImageItem';
import { Wrapper } from '../components/UI/Wrappers/Wrappers.styled';
import IconButton from '../components/UI/Buttons/IconButton';
import Nav from '../components/Nav';
import SortButton from '../components/UI/Buttons/SortButton';

const Breeds = () => {
        const navigate = useNavigate();

        const [breeds, setBreeds] = useState([]); // fetched breeds
        const [filtredBreeds, setFiltredBreeds] = useState(breeds); // filtred breeds

        const [fetch, isLoading, isError] = useFetch(async () => {
                const response = await HttpService.getBreeds();

                setBreeds(response);
        });

        // search breeds by name
        const handleSearch = (search) => {
                let data = [...breeds];

                if (search) {
                        data = data.filter((breed) => breed.name.toLowerCase().includes(search.toLowerCase()));
                }

                setFiltredBreeds(data);
        };

        // sort Z to A
        const handleSortUp = () => {
                const data = [...filtredBreeds];
                data.sort((a, b) => (a.name > b.name ? -1 : 1));
                setFiltredBreeds(data);
        };

        // sort A to Z
        const handleSortDown = () => {
                const data = [...filtredBreeds];
                data.sort((a, b) => (a.name > b.name ? 1 : -1));
                setFiltredBreeds(data);
        };

        // invoke search handler
        useMemo(() => {
                handleSearch();
                // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [breeds]);

        // navigate to prev page
        const handleGoBack = () => {
                navigate(-1);
        };

        // fetch data from API
        useEffect(() => {
                fetch();
                // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        return (
                <>
                        <Nav onSearch={handleSearch} />
                        <Wrapper>
                                <FlexGapM alignItems="center" mt={2} mb={2}>
                                        {/* go back button */}
                                        <IconButton onGoBack={handleGoBack} back />
                                        <BtnPrimary>BREED</BtnPrimary>

                                        {/* sort buttons */}
                                        <SortButton onSort={handleSortUp} up />
                                        <SortButton onSort={handleSortDown} down />
                                </FlexGapM>
                                {isLoading ? (
                                        <Spiner />
                                ) : (
                                        <ImageGrid flexDirection="column">
                                                {Children.toArray(
                                                        filtredBreeds.map(({ name, image }, index) => (
                                                                <ImageItem name={name} image={image} index={index} />
                                                        ))
                                                )}
                                        </ImageGrid>
                                )}
                        </Wrapper>
                </>
        );
};

export default Breeds;
