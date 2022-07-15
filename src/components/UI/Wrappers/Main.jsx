/* eslint-disable react/prop-types */
import styled from 'styled-components';

export const MainWrapper = styled.main`
        max-width: 680px;
`;

// HOC FOR  RENDERS ALL CONTENT (OUTLET)
const Main = ({ children }) => <MainWrapper>{children}</MainWrapper>;

export default Main;
