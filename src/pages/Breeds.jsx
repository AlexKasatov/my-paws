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
import Controls from '../components/UI/Controls/Controls';

const limits = [
        { value: 5, label: 'Limit: 5' },
        { value: 10, label: 'Limit: 10' },
        { value: 15, label: 'Limit: 15' },
        { value: 20, label: 'Limit: 20' },
];

const Breeds = () => {
        const navigate = useNavigate();

        const [breeds, setBreeds] = useState([]); // fetched breeds
        console.log('🚀 ~ file: Breeds.jsx ~ line 27 ~ Breeds ~ breeds', breeds);
        const [filtredBreeds, setFiltredBreeds] = useState(breeds); // filtred breeds

        const [selectedBreeds, setSelectedBreeds] = useState(''); // selected breed
        const [limitBreeds, setLimitBreeds] = useState(''); // limit breeds

        const [fetch, isLoading, isError] = useFetch(async () => {
                const response = await HttpService.getBreeds();

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
        // const handleSlice = (limit) => {
        //         let data = [...breeds];
        //         data = data.slice(0, limit);
        //         setFiltredBreeds(data);

        //         if (limit === null) {
        //                 setFiltredBreeds(breeds);
        //         }
        // };

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

                                        {/* selects */}

                                        {/* All Breeds */}
                                        {/* <CustomSelect
                                                options={allBreeds}
                                                placeholder="All Breeds"
                                                isClearable
                                                isSearchable={false}
                                                value={selectedBreeds}
                                                onChange={setFiltredBreeds}
                                        /> */}
                                        <Controls
                                                breedOptions={allBreeds}
                                                limitOptions={limits}
                                                onSearch={handleSearch}
                                        />

                                        {/* Limit Breeds */}
                                        {/* <CustomSelect
                                                options={limits}
                                                placeholder="Limit Breeds"
                                                isClearable
                                                isSearchable={false}
                                                value={limitBreeds}
                                                onChange={setLimitBreeds}
                                        /> */}
                                        {/* sort buttons */}
                                        <SortButton onSort={handleSortUp} up />
                                        <SortButton onSort={handleSortDown} down />
                                </FlexGapM>
                                {isLoading ? (
                                        <Spiner />
                                ) : (
                                        <ImageGrid flexDirection="column">
                                                {Children.toArray(
                                                        filtredBreeds.map(({ name, image, id }, index) => (
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
