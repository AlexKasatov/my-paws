/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { createContext, useState, useEffect, useMemo, useContext } from 'react';
import uuid from 'react-uuid';
import useFetch from '../hooks/useFetch';
import HttpService from '../service/http.service';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const ContextData = createContext();

export const useData = () => useContext(ContextData);

const DataProvider = ({ children }) => {
        const [breeds, setBreeds] = useState('');
        const [fetch] = useFetch(async (parameters) => {
                const response = await HttpService.getBreeds(parameters);
                setBreeds(response);
        });
        const [userToken, setUserToken] = useLocalStorage('userToken', '');
        const [userLogs, setUserLogs] = useLocalStorage('logs', []);

        useEffect(() => {
                fetch();
                setUserToken(uuid());
                // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        // create array of breeds ids & name for select controller
        const breedOptions = useMemo(() => {
                const breedsIdOptions = [];

                if (breeds) {
                        // eslint-disable-next-line no-plusplus
                        for (let i = 0; i < breeds.length; i++) {
                                breedsIdOptions.push({ value: breeds[i].id, label: breeds[i].name });
                        }
                }

                return breedsIdOptions;
        }, [breeds]);

        // eslint-disable-next-line react-hooks/exhaustive-deps
        const value = useMemo(
                () => ({ breeds, userToken, setBreeds, breedOptions, userLogs, setUserLogs }),
                [breeds, userLogs, setUserLogs, breedOptions]
        );

        return <ContextData.Provider value={value}>{children}</ContextData.Provider>;
};

export default DataProvider;
