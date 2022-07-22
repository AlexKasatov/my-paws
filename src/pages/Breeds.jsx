/* eslint-disable no-console */
import { useState, useEffect, Children, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import HttpService from '../service/http.service';
import { FlexGapM, ImageGrid, Flex } from '../theme/layout.styled';
import { BtnPrimary } from '../theme/buttons.styled';
import ImageItem from '../components/ImageItem';
import { Wrapper } from '../components/UI/Wrappers/Wrappers.styled';
import IconButton from '../components/UI/Buttons/IconButton';
import Nav from '../components/Nav';
import SortButton from '../components/UI/Buttons/SortButton';
import Controls from '../components/UI/Controls/Controls';
import useGoBack from '../hooks/useGoBack';
import { SpinnerHypnotic } from '../animation/Spinners.styled';
import { NoUserLogs } from '../components/UserLogs';

// TODO Design limit functionality from API
// TODO Design pagination functionality from API

const Breeds = () => {
        const navigate = useNavigate();
        const goBack = useGoBack();

        const [breeds, setBreeds] = useState([]); // fetched breeds
        const [limit, setLimt] = useState(''); // limit of images per breed
        const [filtredBreeds, setFiltredBreeds] = useState(breeds); // filtred breeds

        const [fetch, isLoading, isError] = useFetch(async (limitArg) => {
                const response = await HttpService.getBreeds(limitArg);

                setBreeds(response);
        });

        // * generate list of breeds name for select
        const allBreeds = [];
        // eslint-disable-next-line no-plusplus
        for (let index = 0; index < breeds.length; index++) {
                allBreeds.push({ value: breeds[index].name, label: breeds[index].name });
        }

        // search breeds by name
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

        // * limit breeds per page
        useEffect(() => {
                const limitValue = limit?.value || '';
                fetch(limitValue);

                // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [limit]);

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
                goBack();
        };

        // open breed info page
        const handleOpenInfo = (id) => {
                navigate(`info/${id}`);
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
                                        <BtnPrimary fontSize="20px">BREEDS</BtnPrimary>

                                        {/* selects */}

                                        {/* All Breeds */}
                                        {/* Limit Breeds */}
                                        <Controls
                                                breedOptions={allBreeds}
                                                onSearch={handleSearch}
                                                setLimt={setLimt}
                                                limit={limit}
                                        />

                                        {/* sort buttons */}
                                        <FlexGapM>
                                                <SortButton onSort={handleSortUp} up />
                                                <SortButton onSort={handleSortDown} down />
                                        </FlexGapM>
                                </FlexGapM>
                                {isLoading ? (
                                        <Flex justifyContent="center" mt="10rem" mb="10rem">
                                                <SpinnerHypnotic />
                                        </Flex>
                                ) : (
                                        <ImageGrid flexDirection="column">
                                                {Children.toArray(
                                                        filtredBreeds.map(({ name, image, id }, index) => (
                                                                <ImageItem
                                                                        name={name}
                                                                        image={image}
                                                                        index={index}
                                                                        onOpenInfo={() => handleOpenInfo(id)}
                                                                />
                                                        ))
                                                )}
                                        </ImageGrid>
                                )}
                                {/* Check if no breeds were found */}
                        </Wrapper>
                </>
        );
};

export default Breeds;
