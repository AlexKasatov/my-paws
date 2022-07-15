/* eslint-disable no-console */
import { useState, useEffect, Children } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import HttpService from '../service/http.service';
import Spiner from '../animation/Spiner';
import { Flex, FlexGapM, ImageGrid } from '../theme/layout.styled';
import { BtnPrimary } from '../theme/buttons.styled';
import ImageItem from '../components/ImageItem';
import { Wrapper } from '../components/UI/Wrappers/Wrappers.styled';
import IconButton from '../components/UI/Buttons/IconButton';
import PageLink from '../components/UI/Navigation/PageLink';
import Nav from '../components/Nav';

const Breeds = () => {
        const [breeds, setBreeds] = useState([]);

        const [fetch, isLoading, isError] = useFetch(async () => {
                const response = await HttpService.getBreeds();
                console.log(response);
                setBreeds(response);
        });

        const navigate = useNavigate();
        const handleGoBack = () => {
                navigate(-1);
        };

        useEffect(() => {
                console.log('запрос отработал');
                fetch();
                // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        return (
                <>
                        <Nav />
                        <Wrapper>
                                <FlexGapM alignItems="center" mt={2} mb={2}>
                                        <IconButton onGoBack={handleGoBack} back />
                                        <BtnPrimary>BREED</BtnPrimary>
                                </FlexGapM>
                                {isLoading ? (
                                        <Spiner />
                                ) : (
                                        <ImageGrid flexDirection="column">
                                                {Children.toArray(
                                                        breeds.map(({ name, image }, index) => (
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
