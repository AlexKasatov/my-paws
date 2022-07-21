/* eslint-disable react/prop-types */
import { createContext, useState, useEffect, useMemo, useContext } from 'react';
import useFetch from '../hooks/useFetch';
import HttpService from '../service/http.service';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const ContextData = createContext();

export const useData = () => useContext(ContextData);

const DataProvider = ({ children }) => {
        const [breeds, setBreeds] = useState('');
        const [fetch, isLoading, isError] = useFetch(async (parameters) => {
                const response = await HttpService.getBreeds(parameters);
                setBreeds(response);
        });
        const [userLogs, setUserLogs] = useState([]);
        const [userLocal, setUserLocal] = useLocalStorage('logs', 'userLogs');

        useEffect(() => {
                fetch();
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
                () => ({ breeds, setBreeds, breedOptions, userLogs, setUserLogs, userLocal, setUserLocal }),
                [breeds, userLogs, userLocal, setUserLocal, setUserLogs, breedOptions]
        );

        return <ContextData.Provider value={value}>{children}</ContextData.Provider>;
};

export default DataProvider;
