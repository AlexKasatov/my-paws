/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { Flex } from '../../../theme/layout.styled';
import { HeadingSm, HeadingBase } from '../../../theme/typography.styled';

const InfoDescWrapper = styled.div`
        margin-top: 3rem;
        background-color: transparent;
        border-radius: 20px;
        border: 2px solid ${({ theme }) => theme.colors.secondary};
        min-width: 193px;
        min-height: 204px;
        width: 100%;
        padding: 1.5rem 1rem 1.5rem 1.5rem;
`;

const InfoHeadingWrapper = styled.div`
        margin-top: 3rem;
        background-color: ${({ theme }) => theme.colors.pageMain};
        width: 100%;
        position: absoute;

        left: 50%;
`;

const TextWrapper = styled.div`
        max-width: 500px;
        white-space: wrap;
`;

const InfoDesc = ({ data }) => {
        console.log('🚀 ~ file: InfoDesc.jsx ~ line 16 ~ InfoDesc ~ data', data);

        // const { name, description, temperament, origin, weight, life_span } = props;

        return (
                <>
                        <InfoHeadingWrapper>
                                <HeadingBase lineHeight="52px" fontWeight="500" fontSize="36px" color="textBase">
                                        {data.name}
                                </HeadingBase>
                                <HeadingBase lineHeight="29px" fontWeight="500" fontSize="20px" color="textSupport">
                                        {data.description}
                                </HeadingBase>
                        </InfoHeadingWrapper>

                        <InfoDescWrapper>
                                <Flex flexDirection="column">
                                        <TextWrapper>
                                                <HeadingSm
                                                        lineHeight="29px"
                                                        fontWeight="500"
                                                        fontSize="20px"
                                                        color="textBase"
                                                >
                                                        Temperament:
                                                </HeadingSm>{' '}
                                                <HeadingSm
                                                        lineHeight="29px"
                                                        fontWeight="400"
                                                        fontSize="20px"
                                                        color="textSupport"
                                                >
                                                        {data.temperament}
                                                </HeadingSm>
                                        </TextWrapper>
                                        <TextWrapper>
                                                <HeadingSm
                                                        lineHeight="29px"
                                                        fontWeight="500"
                                                        fontSize="20px"
                                                        color="textBase"
                                                >
                                                        Origin:
                                                </HeadingSm>
                                                <HeadingSm
                                                        lineHeight="29px"
                                                        fontWeight="400"
                                                        fontSize="20px"
                                                        color="textSupport"
                                                >
                                                        {data.origin}
                                                </HeadingSm>
                                        </TextWrapper>
                                        <TextWrapper>
                                                <HeadingSm
                                                        lineHeight="29px"
                                                        fontWeight="500"
                                                        fontSize="20px"
                                                        color="textBase"
                                                >
                                                        Life Span:
                                                </HeadingSm>{' '}
                                                <HeadingSm
                                                        lineHeight="29px"
                                                        fontWeight="400"
                                                        fontSize="20px"
                                                        color="textSupport"
                                                >
                                                        {data.life_span}
                                                </HeadingSm>
                                        </TextWrapper>
                                </Flex>
                        </InfoDescWrapper>
                </>
        );
};

export default InfoDesc;
