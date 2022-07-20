import { HeadingBase } from '../../../theme/typography.styled';
import { PlaceholderWrapper } from './Popup.styled';
import { Flex } from '../../../theme/layout.styled';

const ImagePlaceholder = () => (
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
                                <HeadingBase color="textSupport" fontWeight="400" lineHeight="30px" as="h1">
                                        your file or
                                </HeadingBase>{' '}
                                <input type="file" />{' '}
                                <HeadingBase color="textSupport" fontWeight="400" lineHeight="30px" as="h1">
                                        to upload
                                </HeadingBase>
                        </HeadingBase>
                </Flex>
                <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                                d="M140 40C128.954 40 120 48.9543 120 59.9999C120 71.0456 128.954 79.9999 140 79.9999C151.046 79.9999 160 71.0456 160 59.9999C160 48.9543 151.046 40 140 40Z"
                                fill="#F8F8F7"
                        />
                        <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 20C0 8.9543 8.9543 0 20 0H180C191.046 0 200 8.9543 200 20V180C200 181.38 199.86 182.729 199.594 184.031C199.199 185.958 198.528 187.784 197.623 189.465C194.247 195.737 187.621 200 180 200H20C8.95431 200 0 191.046 0 180V20ZM64.6564 41.8952L60 37.2387L13.3333 83.9054V20C13.3333 16.3181 16.3181 13.3333 20 13.3333H180C183.682 13.3333 186.667 16.3181 186.667 20V133.333H156.095L64.7145 41.9526C64.6953 41.9333 64.6759 41.9142 64.6564 41.8952Z"
                                fill="#F8F8F7"
                        />
                </svg>
        </PlaceholderWrapper>
);

export default ImagePlaceholder;
