/* eslint-disable react/prop-types */
import { useState, useRef } from 'react';
import { Flex } from '../../../theme/layout.styled';
import IconButton from '../Buttons/IconButton';
import { PopupWrapper, PopupBox } from './Popup.styled';
import ImagePlaceholder from './ImagePlaceholder';
import { HeadingBase, SubHeading } from '../../../theme/typography.styled';

const Popup = ({ onEvent }) => {
        const [value, setValue] = useState('');
        const [imgUrl, setImgUrl] = useState('');

        return (
                <PopupWrapper>
                        <PopupBox>
                                <Flex justifyContent="flex-end">
                                        <IconButton close onEvent={onEvent} />
                                </Flex>
                                <Flex
                                        justifyContent="center"
                                        alignItems="center"
                                        mt="40px"
                                        mb="40px"
                                        flexDirection="column"
                                >
                                        <HeadingBase
                                                fontSize="36px"
                                                fontWeight="500"
                                                lineHeight="52px"
                                                color="textBase"
                                        >
                                                Upload a .jpg or .png Cat Image
                                        </HeadingBase>
                                        <SubHeading fontSize="20px">
                                                Any uploads must comply with the upload{' '}
                                                <a
                                                        href="https://thecatapi.com/privacy"
                                                        target="_blank"
                                                        rel="noreferrer"
                                                >
                                                        guidelines
                                                </a>{' '}
                                                or face deletion.
                                        </SubHeading>
                                </Flex>

                                <ImagePlaceholder
                                        imgUrl={imgUrl}
                                        setImgUrl={setImgUrl}
                                        value={value}
                                        setValue={setValue}
                                />
                                <Flex justifyContent="center" mt="20px">
                                        {value ? (
                                                <SubHeading fontSize="20px">Image File Name: {value?.name}</SubHeading>
                                        ) : (
                                                <SubHeading fontSize="20px">No file selected</SubHeading>
                                        )}
                                </Flex>
                        </PopupBox>
                </PopupWrapper>
        );
};

export default Popup;
