/* eslint-disable no-console */
import { useState, useEffect, Children } from 'react';
import { useParams } from 'react-router-dom';
import { Wrapper } from '../../components/UI/Wrappers/Wrappers.styled';
import useFetch from '../../hooks/useFetch';
import HttpService from '../../service/http.service';
import { BtnPrimary } from '../../theme/buttons.styled';
import IconButton from '../../components/UI/Buttons/IconButton';
import { FlexGapM } from '../../theme/layout.styled';
import useGoBack from '../../hooks/useGoBack';
import PageLink from '../../components/UI/Navigation/PageLink';
import ImageCard from '../../components/UI/Cards/ImageCard';
import Spiner from '../../animation/Spiner';
import InfoDesc from '../../components/UI/Cards/InfoDesc';

const Info = () => {
        const goBack = useGoBack();
        const [breed, setBreed] = useState('');

        const { id } = useParams();
        console.log('🚀 ~ file: Info.jsx ~ line 10 ~ Info ~ params', id);
        const [fetch, isLoading, isError] = useFetch(async () => {
                const res = await HttpService.getImageById(id, 5);
                console.log('🚀 ~ file: Info.jsx ~ line 9 ~ const[fetch,isLoading,isError]=useFetch ~ res', res);
                setBreed(res);
        });

        useEffect(() => {
                fetch();
                // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);
        const handleGoBack = () => goBack();

        return (
                <>
                        {/* NAV */}
                        <FlexGapM alignItems="center" mt="30px" mb="10px">
                                <PageLink like url="/likes" />
                                <PageLink fav url="/fav" />
                                <PageLink dislike url="/dislike" />
                        </FlexGapM>
                        <Wrapper>
                                <FlexGapM alignItems="center" mt={2} mb={2}>
                                        {/* go back button */}
                                        <IconButton back onGoBack={handleGoBack} />
                                        <BtnPrimary fontSize="20px">BREEDS</BtnPrimary>
                                        <BtnPrimary fontSize="20px">28</BtnPrimary>

                                        {/* selects */}
                                </FlexGapM>

                                {isLoading ? (
                                        <Spiner />
                                ) : (
                                        <div>
                                                {breed &&
                                                        Children.toArray(
                                                                breed.map((item) => <ImageCard url={item?.url} />)
                                                        )}
                                        </div>
                                )}

                                {isLoading ? <Spiner /> : breed && <InfoDesc data={breed[0].breeds[0]} />}
                        </Wrapper>
                </>
        );
};

export default Info;
