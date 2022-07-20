/* eslint-disable react/prop-types */
import { HeadingBase } from '../../../theme/typography.styled';
import { PlaceholderWrapper, UserImage } from './Popup.styled';
import { Flex } from '../../../theme/layout.styled';
import DownloadInput from '../Buttons/DownloadInput';
import BackgroundImage from './BackgroundImage';

const ImagePlaceholder = ({ value, setValue, imgUrl, setImgUrl }) => (
        <PlaceholderWrapper>
                <Flex justifyContent="center" alignItems="center">
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
                </Flex>
                {imgUrl ? <UserImage src={imgUrl} alt="cat" /> : <BackgroundImage />}
        </PlaceholderWrapper>
);

export default ImagePlaceholder;
