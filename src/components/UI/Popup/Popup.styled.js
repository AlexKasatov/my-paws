import styled from 'styled-components';

export const PopupWrapper = styled.div`
        position: fixed;
        background-color: #00000050;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
`;

export const PopupBox = styled.div`
        background-color: ${({ theme }) => theme.colors.pageSecondary};
        position: relative;
        width: 680px;
        height: 100%;
        margin-left: 44vw;
        margin-top: 20px;
        border-radius: 20px;
        padding: 20px;
        border: none;
        overflow: auto;
`;

export const PlaceholderWrapper = styled.section`
        background-color: ${({ theme }) => theme.colors.pageMain};
        max-width: 100%;
        height: 320px;
        border: 2px dashed ${({ theme }) => theme.colors.secondary};
        max-height: 320px;
        border-radius: 20px;

        svg {
                position: absolute;
                opacity: 0.6;
                top: 290px;
                left: 0;
                right: 0;
                margin-left: auto;
                margin-right: auto;
        }

        h1 {
                z-index: 1;
                white-space: nowrap;
                display: inline-block;
        }
`;

export const UserImage = styled.img`
        position: absolute;
        top: 240px;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        padding: 2rem;
        opacity: 0.6;
        border-radius: 30px;

        max-width: 660px;
        max-height: 320px;
        object-fit: cover;
        z-index: 0;
`;
