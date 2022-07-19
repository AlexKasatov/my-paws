import { Children, useState, useEffect, useMemo } from 'react';
import { toast } from 'react-toastify';
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

        // Fetch image for voting
        const [fetch, isLoading, isError] = useFetch(async (limit) => {
                const response = await HttpService.getImages(limit);

                setCat(response);
        });

        // Vote like or dislike
        const [vote, isVoteLoading, isVoteError] = useFetch(async (id, value) => {
                const response = await HttpService.vote(id, value);
                console.log(
                        '🚀 ~ file: Voting.jsx ~ line 26 ~ const[vote,isVoteLoading,isVoteError]=useFetch ~ response',
                        response
                );

                setVoteState(response);
        });

        // Add to favs
        const [fav, isFavLoading, isFavError] = useFetch(async (id) => {
                const response = await HttpService.addFavourites(id);
                console.log(
                        '🚀 ~ file: Voting.jsx ~ line 33 ~ const[fav,isFavLoading,isFavError]=useFetch ~ response',
                        response
                );

                setVoteState(response);
        });

        useEffect(() => {
                const limit = 1;
                fetch(limit);
                // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [voteState]);

        const handleVote = async (id, value) => {
                await vote(id, value);

                if (value) {
                        toast.success('LIKE IT!', {
                                icon: '😻',
                        });
                } else {
                        toast.success('SORRRY!', {
                                icon: '😿',
                        });
                }
        };

        const handleFav = async (id) => {
                await fav(id);
                toast(' add to favourites', {
                        icon: '❤️',
                });
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
                                <ImageVote cat={cat} onVote={handleVote} onFav={handleFav} />
                                {/* user logs  */}
                        </Wrapper>
                </>
        );
};

export default Voting;
