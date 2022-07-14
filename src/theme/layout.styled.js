import styled from 'styled-components';
import { border, color, compose, flexbox, layout, position, space, typography, width, height } from 'styled-system';

export const Flex = styled.div`
        ${flexbox}
        ${layout}
        ${space}
        display: flex;
`;

export const FlexGapM = styled(Flex)`
        gap: 0.5rem;
`;

export const FlexGapL = styled(Flex)`
        display: flex;
        gap: 1.5rem;
`;

export const FlexGapXL = styled(Flex)`
        gap: 8.5rem;
`;

export const Separator = styled.div`
        ${layout}
        ${space}
        ${flexbox}
`;
