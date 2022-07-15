/* eslint-disable no-console */
import { useState, useEffect, Children } from 'react';
import styled from 'styled-components';
import useFetch from '../hooks/useFetch';
import HttpService from '../service/http.service';
import { HeadingSm } from '../theme/typography.styled';
import Spiner from '../animation/Spiner';
import { Flex, ImageGrid } from '../theme/layout.styled';

const Breeds = () => {
        const [breeds, setBreeds] = useState([]);

        const [fetch, isLoading, isError] = useFetch(async () => {
                const response = await HttpService.getBreeds();
                console.log(response);
                setBreeds(response);
        });

        useEffect(() => {
                console.log('запрос отработал');
                fetch();
                // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        return isLoading ? (
                <Spiner />
        ) : (
                <ImageGrid flexDirection="column">
                        {Children.toArray(
                                breeds.map((cat, index) => (
                                        <div id={`item-${index}`}>
                                                <img
                                                        style={{ objectFit: 'cover', height: '100%' }}
                                                        src={cat.image?.url}
                                                        alt={cat?.name}
                                                />
                                        </div>
                                ))
                        )}
                </ImageGrid>
        );
};

export default Breeds;
