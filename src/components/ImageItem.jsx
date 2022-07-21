/* eslint-disable react/prop-types */
import React from 'react';
import { BtnBreed } from '../theme/buttons.styled';
import IconButton from './UI/Buttons/IconButton';

const ImageItem = ({ index, name, image, onOpenInfo, onEvent }) => (
        <section id={`item-${index}`}>
                <img style={{ objectFit: 'cover', height: '100%' }} src={image?.url || image} alt={name} />
                {onOpenInfo && (
                        <BtnBreed onClick={onOpenInfo} type="button">
                                {name}
                        </BtnBreed>
                )}
                <IconButton likeOut onEvent={onEvent} />
        </section>
);

export default ImageItem;
