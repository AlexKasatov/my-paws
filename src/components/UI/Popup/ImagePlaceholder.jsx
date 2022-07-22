/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { HeadingBase } from '../../../theme/typography.styled';
import { PlaceholderWrapper, UserImage } from './Popup.styled';
import { Flex } from '../../../theme/layout.styled';
import DownloadInput from '../Buttons/DownloadInput';
import BackgroundImage from './BackgroundImage';

export const DragWrapper = styled.div`
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: red;
        border-radius: 1rem;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
`;

const ImagePlaceholder = ({ value, setValue, imgUrl, setImgUrl, handleDrag, handleDrop, dragActive }) => (
        <PlaceholderWrapper>
                <Flex justifyContent="center" alignItems="center" onDragEnter={handleDrag}>
                        <form onDragEnter={handleDrag}>
                                <HeadingBase
                                        color="textBase"
                                        fontWeight="500"
                                        fontSize="20px"
                                        lineHeight="30px"
                                        as="h1"
                                        mt="9rem"
                                >
                                        Drag here{' '}
                                        <HeadingBase color="textSupport" fontWeight="400" lineHeight="30px" as="span">
                                                your file or
                                        </HeadingBase>{' '}
                                        <DownloadInput
                                                imgUrl={imgUrl}
                                                setImgUrl={setImgUrl}
                                                value={value}
                                                setValue={setValue}
                                        />{' '}
                                        <HeadingBase color="textSupport" fontWeight="400" lineHeight="30px" as="span">
                                                to upload
                                        </HeadingBase>
                                </HeadingBase>
                                {/* placeholder for drag area. need FIX */}
                                {dragActive && (
                                        <DragWrapper
                                                id="drag-file-element"
                                                onDragEnter={handleDrag}
                                                onDragLeave={handleDrag}
                                                onDragOver={handleDrag}
                                                onDrop={handleDrop}
                                        />
                                )}
                        </form>
                </Flex>
                {imgUrl ? <UserImage src={imgUrl} alt="cat" /> : <BackgroundImage />}
        </PlaceholderWrapper>
);

export default ImagePlaceholder;
