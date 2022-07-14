import React from 'react';

import { BtnNav, Btn } from '../../../theme/buttons.styled';
import vote from '../../../image/main/vote-table.webp';
import cat from '../../../image/main/pet-breeds.webp';
import phone from '../../../image/main/images-search.webp';
import { Flex, FlexGapL, FlexGapM } from '../../../theme/layout.styled';

const NavButtons = () => (
        <FlexGapM>
                <Flex flexDirection="column" alignItems="center">
                        <BtnNav bg="purple" border="4px solid #E1E2FF">
                                <img src={vote} alt="vote" />
                        </BtnNav>
                        <Btn mt={2} type="button" fontSize={0}>
                                VOTING
                        </Btn>
                </Flex>

                <Flex flexDirection="column" alignItems="center" marginX="auto">
                        <BtnNav bg="teal" border="4px solid #D5F7E3">
                                <img src={cat} alt="vote" />
                        </BtnNav>
                        <Btn mt={2} type="button" fontSize={0}>
                                BREEDS
                        </Btn>
                </Flex>

                <Flex flexDirection="column" alignItems="center">
                        <BtnNav bg="yellow" border="4px solid #FFEDCC">
                                <img style={{ marginTop: '0.3rem' }} src={phone} alt="vote" />
                        </BtnNav>
                        <Btn mt={2} type="button" fontSize={0}>
                                GALLERY
                        </Btn>
                </Flex>
        </FlexGapM>
);

export default NavButtons;
