/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Spiner from '../../../animation/Spiner';
import ChoiceSection from '../Buttons/ChoiceSection';
import { SpinnerHypnotic } from '../../../animation/Spinners.styled';
import { FlexGapL } from '../../../theme/layout.styled';

export const ImageVoteSection = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-top: 20px;

        button {
        }

        img {
                transition: all 0.3s ease-in-out;
                height: 360px;
                border-radius: 20px;
                width: 100%;
                object-fit: cover;
        }
`;

const ImageVote = ({ cat, onVote, onFav, isLoading }) => (
        <ImageVoteSection>
                {isLoading ? <SpinnerHypnotic mt="8rem" mb="14rem" /> : <img src={cat[0]?.url} alt="cat" />}
                <ChoiceSection cat={cat} onVote={onVote} onFav={onFav} />
        </ImageVoteSection>
);

export default ImageVote;
