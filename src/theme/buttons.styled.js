import styled from 'styled-components';
import { border, color, compose, flexbox, layout, position, space, typography, width, height } from 'styled-system';
import cat from '../image/main/pet-breeds.webp';

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
        width: 100%;
        height: 36px;
        border-radius: 10px;
        /* type */
        color: ${({ theme }) => theme.colors.primary};
        letter-spacing: ${({ theme }) => theme.letterSpacings.xl};
        line-height: ${({ theme }) => theme.lineHeights.normal};
        font-weight: bold;

        transition: ${({ theme }) => theme.transition};

        /* disable select */
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none;

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
        width: 138px;
        height: 198px;
        max-width: 138px;
        border-radius: 20px;
        z-index: 1;

        /* disable select */
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none;

        &:hover {
                border-color: white;
        }

        &:active {
                border-color: ${({ theme }) => theme.colors.secondary};
                transition: none;
        }

        img {
                max-width: 138px;
                height: 198px;
                user-drag: none;
                -webkit-user-drag: none;
                user-select: none;
                -moz-user-select: none;
                -webkit-user-select: none;
                -ms-user-select: none;
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
