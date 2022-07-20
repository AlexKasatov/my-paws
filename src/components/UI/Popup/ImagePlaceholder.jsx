/* eslint-disable react/prop-types */
import { HeadingBase } from '../../../theme/typography.styled';
import { PlaceholderWrapper } from './Popup.styled';
import { Flex } from '../../../theme/layout.styled';
import DonwloadInput from '../Buttons/DonwloadInput';
import BackgroundImage from './BackgroundImage';

const ImagePlaceholder = ({ value, setValue }) => (
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
                                <DonwloadInput value={value} setValue={setValue} />{' '}
                                <HeadingBase color="textSupport" fontWeight="400" lineHeight="30px" as="span">
                                        to upload
                                </HeadingBase>
                        </HeadingBase>
                </Flex>
                <BackgroundImage />
        </PlaceholderWrapper>
);

export default ImagePlaceholder;
