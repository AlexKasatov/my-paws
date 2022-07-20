/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

export const PopupWrapper = styled.div`
        position: fixed;
        background: #00000050;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
`;

export const PopupBox = styled.div`
        position: relative;
        width: 70%;
        margin: 0 auto;
        height: auto;
        max-height: 70vh;
        margin-top: calc(100vh - 85vh - 20px);
        background: #fff;
        border-radius: 4px;
        padding: 20px;
        border: 1px solid #999;
        overflow: auto;
`;

export const ClosePoppupIcon = styled.span`
        content: 'x';
        cursor: pointer;
        position: fixed;
        right: calc(15% - 30px);
        top: calc(100vh - 85vh - 33px);
        background: #ededed;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        line-height: 20px;
        text-align: center;
        border: 1px solid #999;
        font-size: 20px;
`;

const Popup = ({ onPopup }) => (
        <PopupWrapper>
                <PopupBox>
                        <ClosePoppupIcon onClick={onPopup} />
                </PopupBox>
        </PopupWrapper>
);

export default Popup;
