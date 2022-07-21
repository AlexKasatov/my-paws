/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flex } from '../../../theme/layout.styled';
import IconButton from '../Buttons/IconButton';
import { PopupWrapper, PopupBox } from './Popup.styled';
import ImagePlaceholder from './ImagePlaceholder';
import { HeadingBase, SubHeading } from '../../../theme/typography.styled';
import { BtnPrimaryActive } from '../../../theme/buttons.styled';
import HttpService from '../../../service/http.service';
import useUpload from '../../../hooks/useUpload';
import { buttonSlide } from '../../../animation/page';

const Popup = ({ onEvent }) => {
        const [value, setValue] = useState('');
        const [imgUrl, setImgUrl] = useState('');
        const [upload, setUpload] = useState('');
        const [approved, setApproved] = useState(undefined);

        const [uploadImage, isLoading, isError] = useUpload(async (formData) => {
                const response = await HttpService.uploadImage(formData);
                setUpload(response);
        });

        const handleUploadImg = () => {
                const formData = new FormData();
                formData.append('file', value);
                uploadImage(formData);
        };

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
                                        isLoading={isLoading}
                                        imgUrl={imgUrl}
                                        setImgUrl={setImgUrl}
                                        value={value}
                                        setValue={setValue}
                                />
                                <Flex alignItems="center" justifyContent="center" mt="20px" flexDirection="column">
                                        {value ? (
                                                <SubHeading fontSize="20px">Image File Name: {value?.name}</SubHeading>
                                        ) : (
                                                <SubHeading fontSize="20px">No file selected</SubHeading>
                                        )}
                                        {imgUrl && (
                                                <BtnPrimaryActive onClick={handleUploadImg} mt="1rem">
                                                        DOWNLOAD
                                                </BtnPrimaryActive>
                                        )}
                                </Flex>
                        </PopupBox>
                </PopupWrapper>
        );
};

export default Popup;
