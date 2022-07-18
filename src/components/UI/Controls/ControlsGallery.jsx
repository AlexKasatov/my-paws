/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { CustomSelect } from './CustomSelect.styled';
import IconButton from '../Buttons/IconButton';
import { FlexGapM } from '../../../theme/layout.styled';

export const ControlsWrapper = styled.div`
        background-color: ${({ theme }) => theme.colors.pageSecondary};
        width: 100%;
        padding: 20px 30px;
        border-radius: 20px;

        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
`;

const ControlsGallery = ({ onLoadMoreCats }) => {
        const [breed, setBreed] = useState('');
        const [limit, setLimits] = useState('');
        const [order, setOrder] = useState('');
        const [type, setType] = useState('');

        return (
                <ControlsWrapper>
                        <CustomSelect />
                        <CustomSelect />
                        <CustomSelect />
                        <FlexGapM alignItems="center">
                                <CustomSelect />
                                <IconButton update onLoadMoreCats={onLoadMoreCats} />
                        </FlexGapM>
                </ControlsWrapper>
        );
};

export default ControlsGallery;
