import styled from 'styled-components';

import { border, color, compose, flexbox, layout, position, space, typography, width, height } from 'styled-system';

export const Button = styled('button')(
        compose(border, space, layout, typography, color, width, height, position, flexbox)
);

export const Heading = styled.h1`
        ${typography}
`;
