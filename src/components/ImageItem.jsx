/* eslint-disable react/prop-types */
import React from 'react';
import { BtnBreed } from '../theme/buttons.styled';

const ImageItem = ({ index, name, image, onOpenInfo }) => (
        <section id={`item-${index}`}>
                <img style={{ objectFit: 'cover', height: '100%' }} src={image?.url || image} alt={name} />
                <BtnBreed onClick={onOpenInfo} type="button">
                        {name}
                </BtnBreed>
        </section>
);

export default ImageItem;
