import styled from 'styled-components';

import { border, color, compose, flexbox, layout, position, space, typography, width, height } from 'styled-system';

// MAIN HERO HEADING
export const Heading = styled.h1`
        ${typography}
        ${space}
        color: ${({ theme }) => theme.colors.textBase};
        line-height: ${({ theme }) => theme.lineHeights.subheading};
`;

// MAIN APP SUB-HEADING
export const SubHeading = styled.h2`
        ${typography}
        color: ${({ theme }) => theme.colors.textSupport};
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
