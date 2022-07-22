import React from 'react';
import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import { Container } from '../components/UI/Wrappers/Container.styled';
import Main from '../components/UI/Wrappers/Main';
import { FlexGapXL } from '../theme/layout.styled';
import { pageTransition } from '../animation/page';

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
