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
        const [breeds, setBreeds] = useState([]); // fetched breeds
        const [filtredBreeds, setFiltredBreeds] = useState(breeds); // filtred breeds

        // const [sort, setSort] = useState('asc'); // state for control sort button

        const [fetch, isLoading, isError] = useFetch(async () => {
                const response = await HttpService.getBreeds();

                setBreeds(response);
        });

        // search breeds by name & filter asc/desc
        const handleSearch = (search) => {
                let data = [...breeds];

                if (search) {
                        data = data.filter((breed) => breed?.name.toLowerCase().includes(search?.toLowerCase()));
                }

                setFiltredBreeds(data);
                console.log(filtredBreeds);
        };

        useMemo(() => {
                handleSearch();
                // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [breeds]);

        const navigate = useNavigate();
        const handleGoBack = () => {
                navigate(-1);
        };

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
                                        {/* input select breeds, values from API */}

                                        {/* sort buttons */}
                                        <SortButton up />
                                        <SortButton down />
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
