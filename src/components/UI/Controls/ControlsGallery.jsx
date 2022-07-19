/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { CustomSelect } from './CustomSelect.styled';
import IconButton from '../Buttons/IconButton';
import { FlexGapM } from '../../../theme/layout.styled';

import { limits as limitOptions } from '../../../data/data'; // limits options

export const ControlsWrapper = styled.div`
        background-color: ${({ theme }) => theme.colors.pageSecondary};
        width: 100%;
        padding: 20px 30px;
        border-radius: 20px;

        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
`;

const breedOptions = [
        { value: 'Abyssinian', label: 'Abyssinian' },
        { value: 'Aegean', label: 'Aegean' },
        { value: 'American Bobtail', label: 'American Bobtail' },
        { value: 'American Curl', label: 'American Curl' },
        { value: 'American Shorthair', label: 'American Shorthair' },
        { value: 'American Wirehair', label: 'American Wirehair' },
        { value: 'Arabian Mau', label: 'Arabian Mau' },
        { value: 'Australian Mist', label: 'Australian Mist' },
        { value: 'Balinese', label: 'Balinese' },
        { value: 'Bambino', label: 'Bambino' },
        { value: 'Bengal', label: 'Bengal' },
        { value: 'Birman', label: 'Birman' },
        { value: 'Bombay', label: 'Bombay' },
        { value: 'British Longhair', label: 'British Longhair' },
        { value: 'British Shorthair', label: 'British Shorthair' },
        { value: 'Burmese', label: 'Burmese' },
        { value: 'Burmilla', label: 'Burmilla' },
        { value: 'California Spangled', label: 'California Spangled' },
        { value: 'Chantilly-Tiffany', label: 'Chantilly-Tiffany' },
        { value: 'Chartreux', label: 'Chartreux' },
        { value: 'Chausie', label: 'Chausie' },
        { value: 'Cheetoh', label: 'Cheetoh' },
        { value: 'Colorpoint Shorthair', label: 'Colorpoint Shorthair' },
        { value: 'Cornish Rex', label: 'Cornish Rex' },
        { value: 'Cymric', label: 'Cymric' },
        { value: 'Cyprus', label: 'Cyprus' },
        { value: 'Devon Rex', label: 'Devon Rex' },
        { value: 'Donskoy', label: 'Donskoy' },
        { value: 'Dragon Li', label: 'Dragon Li' },
        { value: 'Egyptian Mau', label: 'Egyptian Mau' },
        { value: 'European Burmese', label: 'European Burmese' },
        { value: 'Exotic Shorthair', label: 'Exotic Shorthair' },
        { value: 'Havana Brown', label: 'Havana Brown' },
        { value: 'Himalayan', label: 'Himalayan' },
        { value: 'Japanese Bobtail', label: 'Japanese Bobtail' },
        { value: 'Javanese', label: 'Javanese' },
        { value: 'Khao Manee', label: 'Khao Manee' },
        { value: 'Korat', label: 'Korat' },
        { value: 'Kurilian', label: 'Kurilian' },
        { value: 'LaPerm', label: 'LaPerm' },
        { value: 'Maine Coon', label: 'Maine Coon' },
        { value: 'Malayan', label: 'Malayan' },
        { value: 'Manx', label: 'Manx' },
        { value: 'Munchkin', label: 'Munchkin' },
        { value: 'Nebelung', label: 'Nebelung' },
        { value: 'Norwegian Forest Cat', label: 'Norwegian Forest Cat' },
        { value: 'Ocicat', label: 'Ocicat' },
        { value: 'Oriental', label: 'Oriental' },
        { value: 'Persian', label: 'Persian' },
        { value: 'Pixie-bob', label: 'Pixie-bob' },
        { value: 'Ragamuffin', label: 'Ragamuffin' },
        { value: 'Ragdoll', label: 'Ragdoll' },
        { value: 'Russian Blue', label: 'Russian Blue' },
        { value: 'Savannah', label: 'Savannah' },
        { value: 'Scottish Fold', label: 'Scottish Fold' },
        { value: 'Selkirk Rex', label: 'Selkirk Rex' },
        { value: 'Siamese', label: 'Siamese' },
        { value: 'Siberian', label: 'Siberian' },
        { value: 'Singapura', label: 'Singapura' },
        { value: 'Snowshoe', label: 'Snowshoe' },
        { value: 'Somali', label: 'Somali' },
        { value: 'Sphynx', label: 'Sphynx' },
        { value: 'Tonkinese', label: 'Tonkinese' },
        { value: 'Toyger', label: 'Toyger' },
        { value: 'Turkish Angora', label: 'Turkish Angora' },
        { value: 'Turkish Van', label: 'Turkish Van' },
        { value: 'York Chocolate', label: 'York Chocolate' },
];

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

const ControlsGallery = ({ onLoadMoreCats, type, setType, limit, setLimit, order, setOrder, breed, setBreed }) => (
        <ControlsWrapper>
                {/* Breed Select */}
                <CustomSelect
                        options={breedOptions}
                        placeholder="Image Types"
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

export default ControlsGallery;
