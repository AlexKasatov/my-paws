import styled from 'styled-components';

import { border, color, compose, flexbox, layout, position, space, typography, width, height } from 'styled-system';

// MAIN BUTTON
export const Button = styled.button`
        ${border}
        ${space}
        ${layout}
        ${typography}
        ${color}
        ${width}
        ${height}
        ${position}
        ${flexbox}

        cursor: pointer;
        background-color: ${({ theme }) => theme.colors.pageMain};
        border: none;
        width: clamp(138px, 148px, 156px);
        height: 36px;
        border-radius: 10px;
        /* type */
        color: ${({ theme }) => theme.colors.primary};
        letter-spacing: ${({ theme }) => theme.letterSpacings.xl};
        font-size: 0.75rem;
        line-height: ${({ theme }) => theme.lineHeights.normal};
        font-weight: bold;

        transition: ${({ theme }) => theme.transition};

        &:hover {
                /* type */
                background-color: ${({ theme }) => theme.colors.secondary};
                color: ${({ theme }) => theme.colors.primary};
        }

        &:active {
                /* type */
                background-color: ${({ theme }) => theme.colors.primary};
                color: ${({ theme }) => theme.colors.white};
                transition: none;
        }
`;

// MAIN NAV BUTTON
export const NavButton = styled.button`
        ${border}
        ${space}
        ${layout}
        ${typography}
        ${color}
        ${width}
        ${height}
        ${position}
        ${flexbox}
        transition: ${({ theme }) => theme.transition};
        cursor: pointer;
        height: 198px;
        width: 138px;
        border-radius: 20px;
        /* style border with inline style */

        &:hover {
                border-color: white;
        }

        &:active {
                border-color: ${({ theme }) => theme.colors.secondary};
                transition: none;
        }

        img {
                width: 130px;
                height: 100%;
                /* vertical-align: center; */
        }
`;

// Button nav link

export const NavBtnLink = styled.button`
        background-color: ${({ theme }) => theme.colors.pageMain};
        width: 60px;
        height: 60px;
        border-radius: 20px;
        border: none;
        cursor: pointer;

        &:hover {
                background-color: ${({ theme }) => theme.colors.secondary};
        }

        &:active {
                background-color: ${({ theme }) => theme.colors.primary};
        }
`;
