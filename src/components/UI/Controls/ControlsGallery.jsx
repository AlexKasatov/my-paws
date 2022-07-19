/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { CustomSelect } from './CustomSelect.styled';
import IconButton from '../Buttons/IconButton';
import { FlexGapM } from '../../../theme/layout.styled';

import { limitOptions, orderOptions, typeOptions } from '../../../data/data'; // limits options
import { useData } from '../../../context/DataProvider';

export const ControlsWrapper = styled.div`
        background-color: ${({ theme }) => theme.colors.pageSecondary};
        width: 100%;
        padding: 20px 30px;
        border-radius: 20px;

        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
`;

const ControlsGallery = ({ onLoadMoreCats, type, setType, limit, setLimit, order, setOrder, breed, setBreed }) => {
        const { breedOptions } = useData();

        return (
                <ControlsWrapper>
                        {/* Breed Select */}
                        <CustomSelect
                                options={breedOptions}
                                placeholder="Breed"
                                isClearable
                                isSearchable={false}
                                value={breed}
                                onChange={setBreed}
                        />

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
                                {/* Limit Select */}
                                <CustomSelect
                                        options={limitOptions}
                                        placeholder="Image per page"
                                        isClearable
                                        isSearchable={false}
                                        value={limit}
                                        onChange={setLimit}
                                />
                                <IconButton update onLoadMoreCats={onLoadMoreCats} />
                        </FlexGapM>
                </ControlsWrapper>
        );
};

export default ControlsGallery;
