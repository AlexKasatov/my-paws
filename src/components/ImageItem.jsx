/* eslint-disable react/prop-types */
import React from 'react';
import { BtnBreed } from '../theme/buttons.styled';

const ImageItem = ({ index, name, image }) => (
        <section id={`item-${index}`}>
                <img style={{ objectFit: 'cover', height: '100%' }} src={image?.url} alt={name} />
                <BtnBreed type="button">{name}</BtnBreed>
        </section>
);

export default ImageItem;
