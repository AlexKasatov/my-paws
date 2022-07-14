import styled from 'styled-components';

import React from 'react';

const SpinerStyled = styled.div`
        /*? 16px maybe */
        display: inline-block;
        margin-right: 0.5rem;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: conic-gradient(#0000 10%, #eeeeee);
        -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 2.8px), #000 0);
        animation: spinner-zp9dbg 1s infinite linear;

        @keyframes spinner-zp9dbg {
                to {
                        transform: rotate(1turn);
                }
        }
`;

const Spiner = () => <SpinerStyled />;

export default Spiner;
