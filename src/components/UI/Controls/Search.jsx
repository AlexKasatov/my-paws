/* eslint-disable no-console */
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import IconButton from '../Buttons/IconButton';

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
const Search = ({ onSearch }) => {
        const [search, setSearch] = useState('');

        useEffect(() => {
                onSearch(search);
                // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [search]);

        return (
                <InputWrapper>
                        <InputSearch onChange={(e) => setSearch(e.target.value)} value={search} />
                        <IconButton search />
                </InputWrapper>
        );
};

export default Search;
