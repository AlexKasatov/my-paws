import React from 'react';

import { NavButton, Button } from '../../theme/buttons.styled';
import vote from '../../image/main/vote-table.webp';
import cat from '../../image/main/pet-breeds.webp';
import phone from '../../image/main/images-search.webp';

const NavButtons = () => (
        <div>
                <div>
                        <NavButton bg="purple" border="4px solid #E1E2FF">
                                <img src={vote} alt="vote" />
                        </NavButton>
                        <Button m={5} type="button">
                                VOTING
                        </Button>
                </div>

                <div>
                        <NavButton bg="teal" border="4px solid #D5F7E3">
                                <img src={cat} alt="vote" />
                        </NavButton>
                        <Button m={5} type="button">
                                BREEDS
                        </Button>
                </div>
                <div>
                        <NavButton bg="yellow" border="4px solid #FFEDCC">
                                <img style={{ marginTop: '0.3rem' }} src={phone} alt="vote" />
                        </NavButton>
                        <Button m={5} type="button">
                                BREEDS
                        </Button>
                </div>
        </div>
);

export default NavButtons;
