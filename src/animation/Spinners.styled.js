import styled from 'styled-components';
import { border, color, flexbox, layout, position, space, typography, width, height } from 'styled-system';

export const SpinnerHypnotic = styled.div`
        --R: 28px;
        --g1: ${({ theme }) => theme.colors.primary} 96%, #0000;
        --g2: ${({ theme }) => theme.colors.secondary} 96%, #0000;
        width: calc(2 * var(--R));
        height: calc(2 * var(--R));
        border-radius: 50%;
        display: grid;
        -webkit-mask: linear-gradient(#000 0 0);
        animation: spinner-maxc6n 1.2s infinite linear;

        &::before,
        &::after {
                content: '';
                grid-area: 1/1;
                width: 50%;
                background: radial-gradient(farthest-side, var(--g1)) calc(var(--R) + 0.866 * var(--R) - var(--R))
                                calc(var(--R) - 0.5 * var(--R) - var(--R)),
                        radial-gradient(farthest-side, var(--g1)) calc(var(--R) + 0.866 * var(--R) - var(--R))
                                calc(var(--R) - 0.5 * var(--R) - var(--R)),
                        radial-gradient(farthest-side, var(--g2)) calc(var(--R) + 0.5 * var(--R) - var(--R))
                                calc(var(--R) - 0.866 * var(--R) - var(--R)),
                        radial-gradient(farthest-side, var(--g1)) 0 calc(-1 * var(--R)),
                        radial-gradient(farthest-side, var(--g2)) calc(var(--R) - 0.5 * var(--R) - var(--R))
                                calc(var(--R) - 0.866 * var(--R) - var(--R)),
                        radial-gradient(farthest-side, var(--g1)) calc(var(--R) - 0.866 * var(--R) - var(--R))
                                calc(var(--R) - 0.5 * var(--R) - var(--R)),
                        radial-gradient(farthest-side, var(--g2)) calc(-1 * var(--R)) 0,
                        radial-gradient(farthest-side, var(--g1)) calc(var(--R) - 0.866 * var(--R) - var(--R))
                                calc(var(--R) + 0.5 * var(--R) - var(--R));
                background-size: calc(2 * var(--R)) calc(2 * var(--R));
                background-repeat: no-repeat;
        }

        &::after {
                transform: rotate(180deg);
                transform-origin: right;
        }

        @keyframes spinner-maxc6n {
                100% {
                        transform: rotate(-1turn);
                }
        }
        ${border}
        ${space}
        ${layout}
        ${typography}
        ${color}
        ${width}
        ${height}
        ${position}
        ${flexbox}
`;
