import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import { Container } from '../components/UI/Wrappers/Container.styled';
import Main from '../components/UI/Wrappers/Main';
import { FlexGapXL } from '../theme/layout.styled';

const Layout = () => (
        <Container>
                <FlexGapXL justifyContent="space-between">
                        <Header />
                        {/* Wrapper for main needed */}
                        <Main>
                                <Outlet />
                        </Main>
                </FlexGapXL>
        </Container>
);

export default Layout;
