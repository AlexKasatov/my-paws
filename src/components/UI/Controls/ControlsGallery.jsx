/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { CustomSelect } from './CustomSelect.styled';
import IconButton from '../Buttons/IconButton';
import { FlexGapM } from '../../../theme/layout.styled';
import { limitOptions2, orderOptions, typeOptions } from '../../../data/data'; // limits options
import { useData } from '../../../context/DataProvider';

import { Label } from '../../../theme/typography.styled';

export const ControlsWrapper = styled.div`
        background-color: ${({ theme }) => theme.colors.pageSecondary};
        width: 100%;
        padding: 20px 30px;
        border-radius: 20px;
        margin: 20px auto;

        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
`;

const ControlsGallery = ({ onLoadMoreCats, type, setType, limit, setLimit, order, setOrder, breed, setBreed }) => {
        const { breedOptions } = useData();

        return (
                <ControlsWrapper>
                        {/* Breed Select */}
                        <div>
                                <Label>BREED</Label>
                                <CustomSelect
                                        color="primary"
                                        width="20px"
                                        marginRigjt="1rem"
                                        options={breedOptions}
                                        placeholder="None"
                                        isClearable
                                        isSearchable={false}
                                        value={breed}
                                        onChange={setBreed}
                                />
                        </div>
                        {/* Type Select */}
                        <div>
                                <Label>TYPE</Label>
                                <CustomSelect
                                        options={typeOptions}
                                        placeholder="None"
                                        isClearable
                                        isSearchable={false}
                                        value={type}
                                        onChange={setType}
                                />
                        </div>
                        {/* Order Select */}
                        <div>
                                <Label>ORDER</Label>
                                <CustomSelect
                                        options={orderOptions}
                                        placeholder="None"
                                        isClearable
                                        isSearchable={false}
                                        value={order}
                                        onChange={setOrder}
                                />
                        </div>
                        {/* Limit Select */}
                        <div>
                                <Label>LIMIT</Label>
                                <FlexGapM alignItems="center">
                                        {/* Limit Select */}
                                        <CustomSelect
                                                options={limitOptions2}
                                                placeholder="None"
                                                isClearable
                                                isSearchable={false}
                                                value={limit}
                                                onChange={setLimit}
                                        />
                                        <IconButton update onLoadMoreCats={onLoadMoreCats} />
                                </FlexGapM>
                        </div>
                </ControlsWrapper>
        );
};

export default ControlsGallery;
