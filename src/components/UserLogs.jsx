import React from 'react';
import styled from 'styled-components';
import { SubHeading } from '../theme/typography.styled';

export const LogsWrapper = styled.div`
        background-color: ${({ theme }) => theme.colors.pageSecondary};
        width: 100%;
        padding: 1rem;
        height: 60px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-top: 6rem;
        border-radius: 10px;
`;

export const Data = styled.div`
        padding: 3px 10px;
        margin-right: 1rem;
        background-color: ${({ theme }) => theme.colors.pageMain};
        color: ${({ theme }) => theme.colors.textBase};
        border-radius: 5px;
        font-family: 'Jost';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
`;

const UserLogs = () => (
        <LogsWrapper>
                <Data>20:30</Data>
                <SubHeading mr="1rem">
                        Image:{' '}
                        <SubHeading color="textBase" fontWeight="500" as="span">
                                ZKLSD333{' '}
                        </SubHeading>
                        was 'data from state'
                </SubHeading>
                <img src="src" alt="icon" />
        </LogsWrapper>
);

export default UserLogs;
