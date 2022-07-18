/* eslint-disable no-console */
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Nav from '../../components/Nav';
import { Wrapper } from '../../components/UI/Wrappers/Wrappers.styled';
import useFetch from '../../hooks/useFetch';
import HttpService from '../../service/http.service';
import { BtnPrimary } from '../../theme/buttons.styled';
import { HeadingSm } from '../../theme/typography.styled';
import IconButton from '../../components/UI/Buttons/IconButton';
import { FlexGapM } from '../../theme/layout.styled';

const Info = () => {
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
        }, []);

        return (
                <Wrapper>
                        <FlexGapM alignItems="center" mt={2} mb={2}>
                                {/* go back button */}
                                <IconButton back />
                                <BtnPrimary>28</BtnPrimary>

                                {/* selects */}
                        </FlexGapM>

                        <HeadingSm>Cat Name</HeadingSm>
                </Wrapper>
        );
};

export default Info;
