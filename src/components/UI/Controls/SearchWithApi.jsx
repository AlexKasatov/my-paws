/* eslint-disable no-console */
import styled from 'styled-components';
import IconButton from '../Buttons/IconButton';
import { CustomSelectSearch } from './CustomSelect.styled';
import { useData } from '../../../context/DataProvider';

export const InputWrapper = styled.label`
        display: flex;
        width: 100%;
        padding: 1.5rem 1rem 1.5rem 1.5rem;
        height: 60px;
        border-radius: 20px;
        align-items: center;
        background-color: ${({ theme }) => theme.colors.pageMain};

        cursor: pointer;
        &:hover {
                border: 2px solid #fbe0dc;
        }
        &:focus-within {
                border: 2px solid #ff868e;
        }
`;
export const InputSearch = styled.input.attrs({
        type: 'search',
        placeholder: 'Search for breeds by name',
})`
        width: 100%;
        border: none;
        font-weight: normal;
        font-size: 20px;
        background-color: ${({ theme }) => theme.colors.pageMain};
        color: ${({ theme }) => theme.colors.textSupport};
`;
// eslint-disable-next-line react/prop-types
const SearchWithApi = ({ onSearchAPI, setSearch, search }) => {
        const { breedOptions } = useData();

        return (
                <InputWrapper>
                        <CustomSelectSearch
                                placeholder="Search for breeds by name"
                                isSearchable
                                options={breedOptions}
                                onChange={setSearch}
                                value={search}
                                isClearable
                        />
                        <IconButton onEvent={onSearchAPI} search />
                </InputWrapper>
        );
};
export default SearchWithApi;
