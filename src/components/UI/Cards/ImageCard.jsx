/* eslint-disable react/prop-types */
import styled from 'styled-components';

export const Image = styled.img`
        height: 360px;
        object-fit: cover;
        width: 100%;
        border-radius: 20px;
        transition: ${({ theme }) => theme.transition};
`;

const ImageCard = ({ url }) => <Image src={url} alt="cat" />;

export default ImageCard;
