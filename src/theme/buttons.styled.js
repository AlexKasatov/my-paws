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
        width: 100%;
        height: 36px;
        border-radius: 10px;
        /* type */
        color: ${({ theme }) => theme.colors.primary};
        letter-spacing: ${({ theme }) => theme.letterSpacings.xl};
        line-height: ${({ theme }) => theme.lineHeights.normal};
        font-weight: bold;

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

// BUTTON WITH PRIMARY BACKGROUND COLOR WITH NO ACTION
export const BtnPrimary = styled(Btn)`
        background-color: ${({ theme }) => theme.colors.primary};
        font-size: ${({ theme }) => theme.fontSizes[2]};
        font-weight: medium;
        max-width: 143px;
        ${width}
        ${layout}
        color: ${({ theme }) => theme.colors.white};
        cursor: auto;

        /* disable hover effects */
        pointer-events: none;
`;

export const BtnPrimaryActive = styled(BtnPrimary)`
        pointer-events: auto;
        cursor: pointer;
`;

// BUTTON FOR BREED NAME ON IMAGE
export const BtnBreed = styled(Btn)`
        width: 100%;
        max-width: 200px;
        min-width: 160px;
        letter-spacing: ${({ theme }) => theme.letterSpacings.normal};
        font-weight: regular;
`;

// Btn with secondary background color
export const BtnSecondary = styled(Btn)`
        line-height: ${({ theme }) => theme.lineHeights.button};
        min-height: 40px;
        max-width: 143px;
        background-color: ${({ theme }) => theme.colors.secondary};
        &:hover {
                /* type */
                background-color: ${({ theme }) => theme.colors.primary};
                color: ${({ theme }) => theme.colors.white};
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

// Button with icons (  close, like )
export const BtnIconPrimary = styled.button`
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
        width: 60px;
        height: 50px;

        border-radius: 10px;
        border: none;
        cursor: pointer;

        /* svg {
                padding: 2px;
        } */

        &:hover {
                background-color: ${({ theme }) => theme.colors.primary};
        }
`;

// Button for search || back
export const BtnIconSecondary = styled(BtnIconPrimary)`
        background-color: ${({ theme }) => theme.colors.secondary};
        width: 40px;
        height: 40px;
`;

// Btn for sort icons
export const BtnSort = styled(BtnIconPrimary)`
        background-color: ${({ theme }) => theme.colors.body};
        &:hover {
                border: 2px solid ${({ theme }) => theme.colors.secondary};
                background-color: ${({ theme }) => theme.colors.body};
        }
`;
