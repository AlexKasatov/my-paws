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
import { slideUpDown } from '../../../animation/page';

// Open the alert window with message of numbers uploaded images
// function handleFile(files) {
//         alert(`Number of files: ${files.length}`);
// }

const Popup = ({ onEvent }) => {
        // state for uploaded image by user on frontend
        const [value, setValue] = useState('');
        // state for preview image before upload on API side
        const [imgUrl, setImgUrl] = useState('');
        // state for response from API
        const [upload, setUpload] = useState('');
        // drag state
        const [dragActive, setDragActive] = useState(false);

        const [uploadImage, isLoading, isError] = useUpload(async (formData) => {
                const response = await HttpService.uploadImage(formData);
                setUpload(response);
        });

        const handleUploadImg = () => {
                // create formData object to upload image to API
                const formData = new FormData();
                formData.append('file', value);
                // API call to upload image
                uploadImage(formData);
        };

        // DRAG AND DROP

        // handle drag events
        const handleDrag = (e) => {
                e.preventDefault();
                e.stopPropagation();
                if (e.type === 'dragenter' || e.type === 'dragover') {
                        setDragActive(true);
                } else if (e.type === 'dragleave') {
                        setDragActive(false);
                }
        };
        // triggers when file is dropped
        const handleDrop = (e) => {
                e.preventDefault();
                e.stopPropagation();
                setDragActive(false);
                if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                        // uncomment to show number of files uploaded
                        // handleFile(e.dataTransfer.files);

                        // update the state with the file url for preview on UI before upload on API call
                        const [file] = e.dataTransfer.files;
                        setImgUrl(URL.createObjectURL(file));
                        // update state for file object
                        setValue(e.dataTransfer.files[0]);
                }
        };

        return (
                <PopupWrapper as={motion.div} initial="hidden" animate="enter" exit="exit" variants={slideUpDown}>
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
                                {/*  DND and upload file placeholder */}
                                <ImagePlaceholder
                                        dragActive={dragActive}
                                        handleDrop={handleDrop}
                                        handleDrag={handleDrag}
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
