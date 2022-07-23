/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import ChoiceSection from '../Buttons/ChoiceSection';
import { SpinnerHypnotic } from '../../../animation/Spinners.styled';
import { FlexGapM } from '../../../theme/layout.styled';

export const ImageVoteSection = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-top: 20px;
        margin-bottom: 52px;
        height: 360px;
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
                {isLoading ? <SpinnerHypnotic mt="8rem" /> : <img src={cat[0]?.url} alt="cat" />}
                <FlexGapM
                        backgroundColor="none"
                        border="none"
                        margin="0 auto"
                        position="absolute"
                        top="455px"
                        width="90px"
                        py="1rem"
                        px="3.2rem"
                        right="-310px"
                        borderRadius="20px"
                        left="170px"
                        alignItems="center"
                        justifyContent="center"
                        mt="2rem"
                        mb="2rem"
                >
                        <ChoiceSection cat={cat} onVote={onVote} onFav={onFav} />
                </FlexGapM>
        </ImageVoteSection>
);

export default ImageVote;
