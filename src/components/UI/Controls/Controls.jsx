/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { CustomSelect } from './CustomSelect.styled';

const Controls = ({ breedOptions, limitOptions, onSearch, onSlice }) => {
        const [breed, setBreed] = useState('');
        const [limit, setLimits] = useState('');

        useEffect(() => {
                const breedValue = breed?.value || '';
                onSearch(breedValue);

                // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [breed]);

        return (
                <>
                        <CustomSelect
                                options={breedOptions}
                                placeholder="All Breeds"
                                isClearable
                                isSearchable={false}
                                value={breed}
                                onChange={setBreed}
                        />
                        <CustomSelect
                                options={limitOptions}
                                placeholder="Limit Breeds"
                                isClearable
                                isSearchable={false}
                                value={limit}
                                onChange={setLimits}
                        />
                </>
        );
};

export default Controls;
