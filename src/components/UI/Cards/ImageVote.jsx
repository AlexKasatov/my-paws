/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import ChoiceSection from '../Buttons/ChoiceSection';

export const ImageVoteSection = styled.div`
        display: flex;

        button {
        }

        img {
                border-radius: 20px;
                width: 100%;
                object-fit: fill;
        }
`;

const ImageVote = ({ cat, onVote }) => (
        <ImageVoteSection>
                <img src={cat[0]?.url} alt="cat" />
                <ChoiceSection cat={cat} onVote={onVote} />
        </ImageVoteSection>
);

export default ImageVote;
