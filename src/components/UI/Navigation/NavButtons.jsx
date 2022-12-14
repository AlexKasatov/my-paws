import { Link } from 'react-router-dom';
import { BtnNav, Btn } from '../../../theme/buttons.styled';
import vote from '../../../image/main/vote-table.webp';
import cat from '../../../image/main/pet-breeds.webp';
import phone from '../../../image/main/images-search.webp';
import { Flex, FlexGapL } from '../../../theme/layout.styled';

const NavButtons = () => (
        <FlexGapL>
                <Flex flexDirection="column" alignItems="center" width="120px">
                        <Link to="/voting">
                                <BtnNav bg="purple" border="4px solid #E1E2FF">
                                        <img src={vote} alt="vote" />
                                </BtnNav>
                                <Btn mt={2} type="button" fontSize={0} letterSpacing="xl">
                                        VOTING
                                </Btn>
                        </Link>
                </Flex>

                <Flex flexDirection="column" alignItems="center" marginX="auto" width="120px">
                        <Link to="/breeds">
                                <BtnNav bg="teal" border="4px solid #D5F7E3">
                                        <img src={cat} alt="vote" />
                                </BtnNav>
                                <Btn mt={2} type="button" fontSize={0} letterSpacing="xl">
                                        BREEDS
                                </Btn>
                        </Link>
                </Flex>

                <Flex flexDirection="column" alignItems="center" width="120px">
                        <Link to="/gallery">
                                <BtnNav bg="yellow" border="4px solid #FFEDCC">
                                        <img
                                                draggable={false}
                                                style={{ paddingBottom: '0.3rem' }}
                                                src={phone}
                                                alt="vote"
                                        />
                                </BtnNav>
                                <Btn mt={2} type="button" fontSize={0} letterSpacing="xl">
                                        GALLERY
                                </Btn>
                        </Link>
                </Flex>
        </FlexGapL>
);

export default NavButtons;
