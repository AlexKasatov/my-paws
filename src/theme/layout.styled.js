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

export const ImageGrid = styled.div`
        display: grid;

        grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-columns: 1fr 1fr 1fr;

        gap: 16px;
        height: 100%;

        img {
                width: 100%;
                object-fit: fill;
        }

        img:hover {
                cursor: pointer;
                opacity: 0.5;
        }
        * {
                border-radius: 20px;
        }

        #item-0 {
                background-color: ${(props) => props.theme.colors.primary};
                grid-row-start: 1;
                grid-column-start: 1;

                grid-row-end: 3;
                grid-column-end: 2;
        }
        #item-1 {
                background-color: ${(props) => props.theme.colors.primary};
                grid-row-start: 1;
                grid-column-start: 2;

                grid-row-end: 2;
                grid-column-end: 3;
        }
        #item-2 {
                background-color: ${(props) => props.theme.colors.primary};
                grid-row-start: 1;
                grid-column-start: 3;

                grid-row-end: 2;
                grid-column-end: 4;
        }
        #item-3 {
                background-color: ${(props) => props.theme.colors.primary};
                grid-row-start: 2;
                grid-column-start: 2;

                grid-row-end: 4;
                grid-column-end: 4;
        }
        #item-4 {
                background-color: ${(props) => props.theme.colors.primary};
                grid-row-start: 3;
                grid-column-start: 1;

                grid-row-end: 4;
                grid-column-end: 2;
        }
        #item-5 {
                background-color: ${(props) => props.theme.colors.primary};
                grid-row-start: 4;
                grid-column-start: 1;

                grid-row-end: 5;
                grid-column-end: 2;
        }
        #item-6 {
                background-color: ${(props) => props.theme.colors.primary};
                grid-row-start: 4;
                grid-column-start: 2;

                grid-row-end: 5;
                grid-column-end: 3;
        }
        #item-7 {
                background-color: ${(props) => props.theme.colors.primary};
                grid-row-start: 4;
                grid-column-start: 3;

                grid-row-end: 6;
                grid-column-end: 4;
        }
        #item-8 {
                background-color: ${(props) => props.theme.colors.primary};
                grid-row-start: 5;
                grid-column-start: 1;

                grid-row-end: 7;
                grid-column-end: 3;
        }
        #item-9 {
                background-color: ${(props) => props.theme.colors.primary};
                grid-row-start: 6;
                grid-column-start: 3;

                grid-row-end: 7;
                grid-column-end: 4;
        }
        #item-10 {
                background-color: ${(props) => props.theme.colors.primary};
                grid-row-start: 7;
                grid-column-start: 1;

                grid-row-end: 9;
                grid-column-end: 2;
        }
        #item-11 {
                background-color: ${(props) => props.theme.colors.primary};
                grid-row-start: 7;
                grid-column-start: 2;

                grid-row-end: 8;
                grid-column-end: 3;
        }
        #item-12 {
                background-color: ${(props) => props.theme.colors.primary};
                grid-row-start: 7;
                grid-column-start: 3;

                grid-row-end: 8;
                grid-column-end: 4;
        }
        #item-13 {
                background-color: ${(props) => props.theme.colors.primary};
                grid-row-start: 8;
                grid-column-start: 2;

                grid-row-end: 10;
                grid-column-end: 4;
        }
        #item-14 {
                background-color: ${(props) => props.theme.colors.primary};
                grid-row-start: 9;
                grid-column-start: 1;

                grid-row-end: 10;
                grid-column-end: 2;
        }
        #item-15 {
                background-color: ${(props) => props.theme.colors.primary};
                grid-row-start: 10;
                grid-column-start: 1;

                grid-row-end: 12;
                grid-column-end: 2;
        }
        #item-16 {
                background-color: ${(props) => props.theme.colors.primary};
                grid-row-start: 10;
                grid-column-start: 2;

                grid-row-end: 11;
                grid-column-end: 3;
        }
        #item-17 {
                background-color: ${(props) => props.theme.colors.primary};
                grid-row-start: 10;
                grid-column-start: 3;

                grid-row-end: 11;
                grid-column-end: 4;
        }
        #item-18 {
                background-color: ${(props) => props.theme.colors.primary};
                grid-row-start: 11;
                grid-column-start: 2;

                grid-row-end: 13;
                grid-column-end: 4;
        }
        #item-19 {
                background-color: ${(props) => props.theme.colors.primary};
                grid-row-start: 12;
                grid-column-start: 1;

                grid-row-end: 13;
                grid-column-end: 2;
        }
`;
