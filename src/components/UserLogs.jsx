import styled from 'styled-components';
/* eslint-disable react/prop-types */
import { SubHeading } from '../theme/typography.styled';
import { Flex } from '../theme/layout.styled';

export const UserLogsWrapper = styled.div`
        background-color: ${({ theme }) => theme.colors.pageSecondary};
        width: 100%;
        padding: 1rem;
        height: 60px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-top: 10px;
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

export const NoUserLogs = () => (
        <UserLogsWrapper>
                <SubHeading>No item found</SubHeading>
        </UserLogsWrapper>
);

const UserLogs = ({ currentTime, id, value, icon }) => (
        <UserLogsWrapper>
                <Data>{currentTime}</Data>
                <SubHeading mr="1rem">
                        Image ID:{' '}
                        <SubHeading color="textBase" fontWeight="500" as="span">
                                {id}{' '}
                        </SubHeading>
                        was {value}
                </SubHeading>
                <img src={icon} alt="icon" />
        </UserLogsWrapper>
);

export default UserLogs;
