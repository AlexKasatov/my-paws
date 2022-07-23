import styled from 'styled-components';

import { color, space, typography } from 'styled-system';

export const HeadingBase = styled.h1`
        ${typography}
        ${space}
        ${color}
`;

// MAIN HERO HEADING
export const Heading = styled.h1`
        ${typography}
        ${space}
        color: ${({ theme }) => theme.colors.textBase};
        line-height: ${({ theme }) => theme.lineHeights.subheading};
`;

// MAIN APP SUB-HEADING
export const SubHeading = styled.h2`
        ${space}
        color: ${({ theme }) => theme.colors.textSupport};
        ${color}
        ${typography}
        line-height: ${({ theme }) => theme.lineHeights.subheading};
`;

// MAIN APP HEADING
export const HeadingSm = styled(Heading)`
        line-height: ${({ theme }) => theme.lineHeights.button};
`;

// FOR INPUTS
export const PlaceHolder = styled(SubHeading)`
        color: ${({ theme }) => theme.colors.textSupport};
        line-height: ${({ theme }) => theme.lineHeights.input};
`;

export const TextInput = styled(PlaceHolder)`
        color: ${({ theme }) => theme.colors.textBase};
        line-height: ${({ theme }) => theme.lineHeights.input};
`;

export const Label = styled.span`
        font-family: 'Jost';
        font-style: normal;
        font-weight: 500;
        font-size: 10px;
        line-height: 18px;
        color: #8c8c8c;
        padding: 1rem;
`;
