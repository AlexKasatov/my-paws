/* eslint-disable no-console */
import { useState, useEffect, Children } from 'react';
import useFetch from '../hooks/useFetch';
import HttpService from '../service/http.service';
import { HeadingSm } from '../theme/typography.styled';
import Spiner from '../animation/Spiner';

const Breeds = () => {
        const [breeds, setBreeds] = useState([]);

        const [fetch, isLoading, isError] = useFetch(async () => {
                const response = await HttpService.getBreeds();

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
                Children.toArray(
                        breeds.map((cat) => (
                                <div>
                                        <HeadingSm>{cat?.name}</HeadingSm>
                                        <img src={cat.image?.url} alt={cat?.name} />
                                </div>
                        ))
                )
        );
};

export default Breeds;
