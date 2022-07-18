/* eslint-disable react/prop-types */
import styled from 'styled-components';

export const Image = styled.img`
        object-fit: cover;
        width: 100%;
`;

const ImageCard = ({ url }) => <Image src={url} alt="cat" />;

export default ImageCard;
