/* eslint-disable react/prop-types */
import { useState } from 'react';
import Spiner from '../../../animation/Spiner';
import { BtnIconPrimary, BtnIconSecondary } from '../../../theme/buttons.styled';

const ArrowBack = ({ fill }) => (
        <svg width="20" height="20" viewBox="0 0 20 20" fill={fill} xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1_1563)">
                        <path d="M4.70999 10.9901L13.3097 19.5896C13.8567 20.1369 14.7437 20.1369 15.2905 19.5896C15.8373 19.0427 15.8373 18.1558 15.2905 17.6091L7.68104 9.99988L15.2902 2.39096C15.8371 1.84391 15.8371 0.957107 15.2902 0.410284C14.7434 -0.136761 13.8565 -0.136761 13.3095 0.410284L4.70977 9.00985C4.43635 9.28339 4.2998 9.64153 4.2998 9.99983C4.2998 10.3583 4.43662 10.7167 4.70999 10.9901Z" />
                </g>
                <defs>
                        <clipPath id="clip0_1_1563">
                                <rect width="20" height="20" fill="white" />
                        </clipPath>
                </defs>
        </svg>
);

const ArrowForward = ({ fill }) => (
        <svg width="20" height="20" viewBox="0 0 20 20" fill={fill} xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1630_360)">
                        <path d="M15.29 9.0099L6.69031 0.4104C6.14331 -0.1369 5.25631 -0.136901 4.70951 0.410399C4.16271 0.957299 4.16271 1.8442 4.70951 2.3909L12.319 10.0001L4.70981 17.609C4.16291 18.1561 4.16291 19.0429 4.70981 19.5897C5.25661 20.1368 6.14351 20.1368 6.69051 19.5897L15.2902 10.9902C15.5636 10.7166 15.7002 10.3585 15.7002 10.0002C15.7002 9.6417 15.5634 9.2833 15.29 9.0099Z" />
                </g>
                <defs>
                        <clipPath id="clip0_1630_360">
                                <rect width="20" height="20" fill="white" transform="translate(20 20) rotate(-180)" />
                        </clipPath>
                </defs>
        </svg>
);

const Search = ({ fill }) => (
        <svg width="20" height="20" viewBox="0 0 20 20" fill={fill} xmlns="http://www.w3.org/2000/svg">
                <path d="M19.3613 18.2168L14.6012 13.2662C15.8251 11.8113 16.4957 9.98069 16.4957 8.07499C16.4957 3.62251 12.8732 0 8.4207 0C3.96821 0 0.345703 3.62251 0.345703 8.07499C0.345703 12.5275 3.96821 16.15 8.4207 16.15C10.0922 16.15 11.6851 15.6458 13.047 14.6888L17.8432 19.677C18.0436 19.8852 18.3133 20 18.6022 20C18.8757 20 19.1352 19.8957 19.3321 19.7061C19.7506 19.3034 19.764 18.6357 19.3613 18.2168ZM8.4207 2.10652C11.7118 2.10652 14.3892 4.78391 14.3892 8.07499C14.3892 11.3661 11.7118 14.0435 8.4207 14.0435C5.12961 14.0435 2.45222 11.3661 2.45222 8.07499C2.45222 4.78391 5.12961 2.10652 8.4207 2.10652Z" />
        </svg>
);

const Close = ({ fill }) => (
        <svg width="20" height="20" viewBox="0 0 20 20" fill={fill} xmlns="http://www.w3.org/2000/svg">
                <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.05691 9.99997L1.52832 2.47137L2.47113 1.52856L9.99972 9.05716L17.5283 1.52856L18.4711 2.47137L10.9425 9.99997L18.4711 17.5286L17.5283 18.4714L9.99972 10.9428L2.47113 18.4714L1.52832 17.5286L9.05691 9.99997Z"
                />
        </svg>
);

const LikeFill = ({ fill }) => (
        <svg width="20" height="20" viewBox="0 0 20 20" fill={fill} xmlns="http://www.w3.org/2000/svg">
                <path d="M5.38071 1C2.40903 1 0 3.40903 0 6.38071C0 7.80777 0.566893 9.17637 1.57597 10.1854L9.5286 18.1381C9.78895 18.3984 10.2111 18.3984 10.4714 18.1381L18.424 10.1854C19.4331 9.17637 20 7.80777 20 6.38071C20 3.40903 17.591 1 14.6193 1C13.1922 1 11.8236 1.56689 10.8146 2.57597L10 3.39052L9.18545 2.57597C8.17637 1.5669 6.80777 1 5.38071 1Z" />
        </svg>
);

const LikeOutline = ({ fill }) => (
        <svg width="20" height="20" viewBox="0 0 20 20" fill={fill} xmlns="http://www.w3.org/2000/svg">
                <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.38071 2.33333C3.14541 2.33333 1.33333 4.14541 1.33333 6.38071C1.33333 7.45414 1.75975 8.48361 2.51878 9.24264L10 16.7239L17.4812 9.24264C18.2402 8.48361 18.6667 7.45414 18.6667 6.38071C18.6667 4.14541 16.8546 2.33333 14.6193 2.33333C13.5459 2.33333 12.5164 2.75975 11.7574 3.51878L10.4714 4.80474C10.2111 5.06509 9.78895 5.06509 9.5286 4.80474L8.24264 3.51878C7.48361 2.75975 6.45414 2.33333 5.38071 2.33333ZM0 6.38071C0 3.40903 2.40903 1 5.38071 1C6.80777 1 8.17637 1.5669 9.18545 2.57597L10 3.39052L10.8146 2.57597C11.8236 1.56689 13.1922 1 14.6193 1C17.591 1 20 3.40903 20 6.38071C20 7.80777 19.4331 9.17637 18.424 10.1854L10.4714 18.1381C10.2111 18.3984 9.78895 18.3984 9.5286 18.1381L1.57597 10.1854C0.566893 9.17637 0 7.80777 0 6.38071Z"
                />
        </svg>
);

const Update = ({ fill }) => (
        <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill={fill}
                xmlns="http://www.w3.org/2000/svg"
                // TODO - add roatation on Click
                transform="rotate(360deg)"
        >
                <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.48189 2.49989L7.93396 0.953004L8.88633 0L12.0577 3.16928L8.88634 6.33873L7.93395 5.38576L9.47232 3.84832C5.51244 3.99813 2.3473 7.25498 2.3473 11.2478C2.3473 15.3361 5.66547 18.6527 9.75744 18.6527C13.8494 18.6527 17.1676 15.3361 17.1676 11.2478V10.5742H18.5149V11.2478C18.5149 16.081 14.5927 20 9.75744 20C4.92221 20 1 16.081 1 11.2478C1 6.50682 4.77407 2.64542 9.48189 2.49989Z"
                />
        </svg>
);

const IconButton = ({ back, forward, search, close, likeOut, likeFill, update, loading, onGoBack, onEvent }) => {
        const [fill, setFill] = useState('#FF868E');
        return (
                // TODO - add router Links
                search || back || forward ? (
                        <BtnIconSecondary
                                onClick={onGoBack || onEvent}
                                onMouseEnter={() => setFill('#FFFFFF')}
                                onMouseLeave={() => setFill('#FF868E')}
                        >
                                {back && <ArrowBack fill={fill} />}
                                {search && <Search fill={fill} />}
                                {forward && <ArrowForward fill={fill} />}
                        </BtnIconSecondary>
                ) : (
                        <BtnIconPrimary
                                onClick={onEvent && onEvent}
                                onMouseEnter={() => setFill('#FFFFFF')}
                                onMouseLeave={() => setFill('#FF868E')}
                        >
                                {close && <Close fill={fill} />}
                                {search && <Search fill={fill} />}
                                {likeOut && <LikeOutline fill={fill} />}
                                {likeFill && <LikeFill fill={fill} />}
                                {update && <Update fill={fill} />}
                                {loading && <Spiner />}
                        </BtnIconPrimary>
                )
        );
};

export default IconButton;
