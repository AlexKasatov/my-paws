/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { CustomSelect } from './CustomSelect.styled';
import { limitOptions } from '../../../data/data';

const Controls = ({ breedOptions, onSearch, setLimt, limit }) => {
        const [breed, setBreed] = useState('');

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
                                onChange={setLimt}
                        />
                </>
        );
};

export default Controls;
