import styled from 'styled-components';

export const Wrapper = styled.div`
        max-width: 680px;
        min-height: 770px;
        padding: 20px;
        border-radius: 20px;
        background-color: ${(props) => props.theme.colors.pageMain};
`;
