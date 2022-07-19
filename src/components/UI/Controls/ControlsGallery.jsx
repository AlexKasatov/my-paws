/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { CustomSelect } from './CustomSelect.styled';
import IconButton from '../Buttons/IconButton';
import { FlexGapM } from '../../../theme/layout.styled';

import { limits } from '../../../pages/Breeds'; // limits options

export const ControlsWrapper = styled.div`
        background-color: ${({ theme }) => theme.colors.pageSecondary};
        width: 100%;
        padding: 20px 30px;
        border-radius: 20px;

        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
`;

const orderOptions = [
        { value: 'RANDOM', label: 'Random' },
        { value: 'ASC', label: 'Asc' },
        { value: 'DESC', label: 'Desc' },
];

const typeOptions = [
        { value: 'gif,jpg,png', label: 'All' },
        { value: 'jpg,png', label: 'Static' },
        { value: 'gif', label: 'Animated' },
];

const ControlsGallery = ({ onLoadMoreCats, onChangeType }) => {
        const [breed, setBreed] = useState('');
        const [limit, setLimits] = useState('');
        const [order, setOrder] = useState('');
        const [type, setType] = useState('');
        console.log('🚀 ~ file: ControlsGallery.jsx ~ line 38 ~ ControlsGallery ~ type', type);

        useEffect(() => {
                const typeValue = type?.value || '';
                onChangeType(typeValue);

                // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [type]);

        return (
                <ControlsWrapper>
                        <CustomSelect />

                        {/* Type Select */}
                        <CustomSelect
                                options={typeOptions}
                                placeholder="Image Types"
                                isClearable
                                isSearchable={false}
                                value={type}
                                onChange={setType}
                        />

                        {/* Order Select */}
                        <CustomSelect
                                options={orderOptions}
                                placeholder="Order"
                                isClearable
                                isSearchable={false}
                                value={order}
                                onChange={setOrder}
                        />
                        <FlexGapM alignItems="center">
                                <CustomSelect
                                        options={limits}
                                        placeholder="Image per page"
                                        isClearable
                                        isSearchable={false}
                                        value={limit}
                                        onChange={setLimits}
                                />
                                <IconButton update onLoadMoreCats={onLoadMoreCats} />
                        </FlexGapM>
                </ControlsWrapper>
        );
};

export default ControlsGallery;
