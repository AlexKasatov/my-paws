import { Children, useState, useEffect, useMemo } from 'react';
import { Wrapper } from '../components/UI/Wrappers/Wrappers.styled';
import { FlexGapM, ImageGallery } from '../theme/layout.styled';
import IconButton from '../components/UI/Buttons/IconButton';
import { BtnPrimary } from '../theme/buttons.styled';
import Nav from '../components/Nav';
import useGoBack from '../hooks/useGoBack';
import ImageVote from '../components/UI/Cards/ImageVote';
import useFetch from '../hooks/useFetch';
import HttpService from '../service/http.service';

const Voting = () => {
        const [cat, setCat] = useState('');
        const [voteState, setVoteState] = useState('');
        const [fetch, isLoading, isError] = useFetch(async (limit) => {
                const response = await HttpService.getImages(limit);

                setCat(response);
        });

        const [vote, isVoteLoading, isVoteError] = useFetch(async (id, value) => {
                const response = await HttpService.vote(id, value);
                console.log(
                        '🚀 ~ file: Voting.jsx ~ line 16 ~ const[fetch,isLoading,isError]=useFetch ~ response',
                        response
                );
                setVoteState(response);
        });

        useEffect(() => {
                const limit = 1;
                fetch(limit);
                // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [voteState]);

        const handleVote = (id, value) => {
                console.log('🚀 ~ file: Voting.jsx ~ line 38 ~ handleVote ~ value', value);
                console.log('🚀 ~ file: Voting.jsx ~ line 38 ~ handleVote ~ id', id);
                vote(id, value);
        };

        // TODO fix it later ( add to fetch function )
        const handleSearch = (search, breed) => {};
        // ==========================================================

        const goBack = useGoBack();
        const handleGoBack = () => {
                goBack();
        };

        return (
                <>
                        <Nav onSearch={handleSearch} />
                        <Wrapper>
                                <FlexGapM alignItems="center" justifyContent="flex-start" mt={2} mb={2}>
                                        <IconButton onGoBack={handleGoBack} back />

                                        <BtnPrimary fontSize="20px" mr="46%">
                                                VOTING
                                        </BtnPrimary>
                                </FlexGapM>
                                <ImageVote cat={cat} onVote={handleVote} />
                                {/* user logs  */}
                        </Wrapper>
                </>
        );
};

export default Voting;
