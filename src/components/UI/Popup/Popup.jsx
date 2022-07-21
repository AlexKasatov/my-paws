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
        // state for uploaded image by user on frontend
        const [value, setValue] = useState('');
        // state for preview image before upload on API side
        const [imgUrl, setImgUrl] = useState('');
        // state for response from API
        const [upload, setUpload] = useState('');
        const [approved, setApproved] = useState(undefined);

        const [uploadImage, isLoading, isError] = useUpload(async (formData) => {
                const response = await HttpService.uploadImage(formData);
                console.log(
                        '🚀 ~ file: Popup.jsx ~ line 25 ~ const[uploadImage,isLoading,isError]=useUpload ~ response',
                        response
                );
                setUpload(response);
                setApproved(isError);
        });

        const handleUploadImg = () => {
                // create formData object to upload image to API
                const formData = new FormData();
                formData.append('file', value);
                // API call to upload image
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
                                        {/* Check if user upload image on frontend */}
                                        {value ? (
                                                <SubHeading fontSize="20px">Image File Name: {value?.name}</SubHeading>
                                        ) : (
                                                <SubHeading fontSize="20px">No file selected</SubHeading>
                                        )}
                                        {/* If user upload image -> show button for uploading to API */}
                                        {imgUrl && (
                                                <BtnPrimaryActive maxWidth="220px" onClick={handleUploadImg} mt="1rem">
                                                        UPLOAD PHOTO
                                                </BtnPrimaryActive>
                                        )}
                                        {/* Result of checking user's image ( cat or not cat) */}
                                </Flex>
                        </PopupBox>
                </PopupWrapper>
        );
};

export default Popup;
