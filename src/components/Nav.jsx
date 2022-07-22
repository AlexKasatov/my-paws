import React from 'react';
import PageLink from './UI/Navigation/PageLink';
import { FlexGapM } from '../theme/layout.styled';
import Search from './UI/Controls/Search';
import SearchWithApi from './UI/Controls/SearchWithApi';

// eslint-disable-next-line react/prop-types
const Nav = ({ onSearch, onSearchAPI, setSearch, search, api }) => (
        <FlexGapM alignItems="center" mt="30px" mb="10px">
                {api ? (
                        <SearchWithApi onSearchAPI={onSearchAPI} setSearch={setSearch} search={search} />
                ) : (
                        <Search onSearch={onSearch} />
                )}
                <PageLink like url="/likes" />
                <PageLink fav url="/fav" />
                <PageLink dislike url="/dislike" />
        </FlexGapM>
);

export default Nav;
