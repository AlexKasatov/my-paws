import React from 'react';

import { BtnNav, Btn } from '../../../theme/buttons.styled';
import vote from '../../../image/main/vote-table.webp';
import cat from '../../../image/main/pet-breeds.webp';
import phone from '../../../image/main/images-search.webp';

const NavButtons = () => (
        <div>
                <div>
                        <BtnNav bg="purple" border="4px solid #E1E2FF">
                                <img src={vote} alt="vote" />
                        </BtnNav>
                        <Btn m={5} type="button">
                                VOTING
                        </Btn>
                </div>

                <div>
                        <BtnNav bg="teal" border="4px solid #D5F7E3">
                                <img src={cat} alt="vote" />
                        </BtnNav>
                        <Btn m={5} type="button">
                                BREEDS
                        </Btn>
                </div>
                <div>
                        <BtnNav bg="yellow" border="4px solid #FFEDCC">
                                <img style={{ marginTop: '0.3rem' }} src={phone} alt="vote" />
                        </BtnNav>
                        <Btn m={5} type="button">
                                BREEDS
                        </Btn>
                </div>
        </div>
);

export default NavButtons;
