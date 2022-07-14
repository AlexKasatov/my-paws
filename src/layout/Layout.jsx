import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Main from '../components/UI/Wrappers/Main';

const Layout = () => (
        <>
                <Header />
                {/* Wrapper for main needed */}
                <Main>
                        <Outlet />
                </Main>
        </>
);

export default Layout;
