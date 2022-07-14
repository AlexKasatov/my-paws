import React from 'react';
import styled from 'styled-components';
import Logo from './UI/Navigation/Logo';
import { Heading, HeadingSm, SubHeading } from '../theme/typography.styled';
import ThemeSwitcher from './UI/Buttons/ThemeSwitcher';
import { Flex, Separator } from '../theme/layout.styled';
import { ContainerMenu } from './UI/Wrappers/Container.styled';
import NavButtons from './UI/Navigation/NavButtons';

export const HeaderStyled = styled.header`
        position: sticky;
        position: -webkit-sticky;
        top: 0;
        width: 40%;
        height: 25vh;
`;

const Header = () => (
        <HeaderStyled>
                <ContainerMenu>
                        {/* Logo & Theme Switcher */}
                        <Flex marginY={3} justifyContent="space-between" alignItems="center">
                                <Logo />
                                <ThemeSwitcher />
                        </Flex>

                        {/* Main Headings */}
                        <Separator mt={6} mb={5}>
                                <Heading fontSize={3} fontWeight={500} lineHeight="heading" color="primary">
                                        Hi intern!
                                </Heading>
                                <SubHeading fontSize={2} fontWeight={400}>
                                        Welcome to MI 2022 Front-end test
                                </SubHeading>
                        </Separator>

                        {/* Page Navigation */}
                        <HeadingSm mb={3} fontWeight="500">
                                Lets start using The Cat API
                        </HeadingSm>
                        <Flex>
                                <NavButtons />
                        </Flex>
                </ContainerMenu>
        </HeaderStyled>
);

export default Header;
