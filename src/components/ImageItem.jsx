/* eslint-disable react/prop-types */
import { BtnBreed } from '../theme/buttons.styled';
import IconButton from './UI/Buttons/IconButton';

const ImageItem = ({ index, name, image, onOpenInfo, onEvent, deleteItem }) => (
        <section id={`item-${index}`}>
                <img
                        loading="lazy"
                        style={{ objectFit: 'cover', height: '100%' }}
                        src={image?.url || image}
                        alt={name}
                />
                {onOpenInfo && (
                        <BtnBreed onClick={onOpenInfo} type="button">
                                {name}
                        </BtnBreed>
                )}
                {deleteItem ? <IconButton likeOut onEvent={onEvent} /> : <IconButton close onEvent={onEvent} />}
        </section>
);

export default ImageItem;
