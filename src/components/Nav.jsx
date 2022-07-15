import React from 'react';
import { Wrapper } from './UI/Wrappers/Wrappers.styled';
import PageLink from './UI/Navigation/PageLink';
import { FlexGapM, FlexGapXL } from '../theme/layout.styled';

const Nav = () => (
        <Wrapper>
                {' '}
                <FlexGapM alignItems="center">
                        {/* search input */}
                        <PageLink like url="/likes" />
                        <PageLink fav url="/fav" />
                        <PageLink dislike url="/dislike" />
                </FlexGapM>
        </Wrapper>
);

export default Nav;
