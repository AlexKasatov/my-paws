/* eslint-disable no-console */
import { useState, useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import HttpService from '../../service/http.service';

const Info = () => {
        const [breed, setBreed] = useState('');
        const [fetch, isLoading, isError] = useFetch(async () => {
                const res = await HttpService.getImageById('abys', 5);
                console.log('🚀 ~ file: Info.jsx ~ line 9 ~ const[fetch,isLoading,isError]=useFetch ~ res', res);

                setBreed(res);
        });

        useEffect(() => {
                fetch();
        }, []);

        return <div>Info Page</div>;
};

export default Info;
