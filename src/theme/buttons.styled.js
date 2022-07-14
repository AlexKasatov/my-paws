import styled from 'styled-components';

import { border, color, compose, flexbox, layout, position, space, typography, width, height } from 'styled-system';

// MAIN BUTTON
export const Btn = styled.button`
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

        svg {
                margin-right: 10px;
        }
`;
// Btn with secondary background color
export const BtnSecondary = styled(Btn)`
        line-height: ${({ theme }) => theme.lineHeights.button};
        background-color: ${({ theme }) => theme.colors.secondary};
        &:hover {
                /* type */
                background-color: ${({ theme }) => theme.colors.primary};
                color: ${({ theme }) => theme.colors.white};
        }
        svg {
                transition: ${({ theme }) => theme.transition};
        }
`;

// MAIN NAV BUTTON
export const BtnNav = styled.button`
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

// Button (page link)

export const BtnPage = styled.button`
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

// Button with icons ( search, back, close, like)

export const BtnIcon = styled.button`
        ${border}
        ${space}
        ${layout}
        ${typography}
        ${color}
        ${width}
        ${height}
        ${position}
        ${flexbox}

        background-color: ${({ theme }) => theme.colors.pageMain};
        width: 40px;
        height: 40px;
        border-radius: 10px;
        border: none;
        cursor: pointer;

        &:hover {
                background-color: ${({ theme }) => theme.colors.primary};
        }
`;

// Btn for sort icons
export const BtnSort = styled(BtnIcon)`
        background-color: ${({ theme }) => theme.colors.body};
        &:hover {
                border: 2px solid ${({ theme }) => theme.colors.secondary};
                background-color: ${({ theme }) => theme.colors.body};
        }
`;
