import { Children, useState, useEffect, useMemo } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Wrapper } from '../components/UI/Wrappers/Wrappers.styled';
import { FlexGapM } from '../theme/layout.styled';
import IconButton from '../components/UI/Buttons/IconButton';
import { BtnPrimary } from '../theme/buttons.styled';
import Nav from '../components/Nav';
import useGoBack from '../hooks/useGoBack';
import ImageVote from '../components/UI/Cards/ImageVote';
import useFetch from '../hooks/useFetch';
import HttpService from '../service/http.service';
import { useData } from '../context/DataProvider';
import like from '../image/icons/logs/like.svg';
import dislike from '../image/icons/logs/dislike.svg';
import favs from '../image/icons/logs/fav.svg';
import UserLogs, { NoUserLogs } from '../components/UserLogs';
import AnimationWrapper from '../animation/AnimationWrapper';

const Voting = () => {
        const [search, setSearch] = useState('');
        // state for fetch 1 image per time
        const [cat, setCat] = useState('');
        // state for save voting history
        const [voteState, setVoteState] = useState('');
        // state from context to manage user logs
        const { userLogs, setUserLogs, userToken } = useData();
        const navigate = useNavigate();
        // Fetch image for voting
        const [fetch, isLoading] = useFetch(async (limit) => {
                const response = await HttpService.getImages(limit);
                setCat(response);
        });

        // Vote like or dislike
        const [vote] = useFetch(async (id, value) => {
                const response = await HttpService.vote(id, value, userToken);
                setVoteState(response);
        });

        // Add to favs
        const [fav] = useFetch(async (id) => {
                const response = await HttpService.addFavourites(id, userToken);
                setVoteState(response);
        });

        // Update image state everytime user changes vote (load 1 image from API)
        useEffect(() => {
                const limit = 1;
                fetch(limit);
                // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [voteState]);

        // Reverse array of user logs to show newest first
        useMemo(() => {
                setUserLogs(userLogs.reverse());
                // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [userLogs]);

        const handleVote = async (id, value) => {
                // ? id image_id
                // ? value like or dislike ( 1 or 0 )

                await vote(id, value);
                if (value) {
                        toast.success('LIKE!', {
                                icon: '👍',
                                position: 'bottom-left',
                        });
                } else {
                        toast.error('NOPE!', {
                                icon: '👎',
                                position: 'bottom-left',
                        });
                }
                // svg icons
                const icon = value ? like : dislike;
                // get string type of vote
                const valueString = value ? 'Likes' : 'Dislikes';
                // get type of vote
                const type = value ? 'like' : 'dislike';
                // get current time
                const time = new Date();
                const currentTime = `${time.getHours()}:${time.getMinutes()}`;
                // update user logs
                setUserLogs((prev) => [...prev, { id, type, value: `added to ${valueString}`, currentTime, icon }]);
        };

        // Add to favs handler
        const handleFav = async (id) => {
                // ? simple id ( not image_id)

                await fav(id);
                toast('LOVE IT!', {
                        icon: '❤️',
                        position: 'bottom-left',
                });

                // get current time
                const time = new Date();
                const currentTime = `${time.getHours()}:${time.getMinutes()}`;
                // update user logs
                setUserLogs((prev) => [
                        ...prev,
                        { id, type: 'fav', value: 'added to Favourites', currentTime, icon: favs },
                ]);
        };

        // go to search breed page
        const handleSearchBreed = () => {
                const searchValue = search?.value || '';
                navigate(`/search/${searchValue}`);
        };

        const goBack = useGoBack();
        const handleGoBack = () => {
                goBack();
        };

        return (
                <AnimationWrapper>
                        <Nav search={search} setSearch={setSearch} api onSearchAPI={handleSearchBreed} />
                        <Wrapper>
                                <FlexGapM alignItems="center" justifyContent="flex-start" mt={2} mb={2}>
                                        <IconButton onGoBack={handleGoBack} back />

                                        <BtnPrimary fontSize="20px" mr="46%">
                                                VOTING
                                        </BtnPrimary>
                                </FlexGapM>
                                <ImageVote isLoading={isLoading} cat={cat} onVote={handleVote} onFav={handleFav} />
                                {/* user logs  */}
                                {Children.toArray(
                                        userLogs.map(({ currentTime, id, value, icon }) => (
                                                <UserLogs currentTime={currentTime} id={id} value={value} icon={icon} />
                                        ))
                                )}
                                {!userLogs.length && <NoUserLogs />}
                        </Wrapper>
                </AnimationWrapper>
        );
};

export default Voting;
