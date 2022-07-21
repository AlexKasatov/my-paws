/* eslint-disable react/prop-types */
import { useState } from 'react';
import styled from 'styled-components';

export const Label = styled.label`
        -webkit-appearance: button;
        -moz-appearance: button;
        appearance: button;
        cursor: pointer;
`;
export const Download = styled.input`
        display: none;
`;

const DownloadInput = ({ value, setValue, imgUrl, setImgUrl }) => {
        const handleChange = (e) => {
                // update the state with the file object for upload on API call
                setValue(e.target.files[0]);
                // update the state with the file url for preview on UI before upload on API call
                const [file] = e.target.files;
                setImgUrl(URL.createObjectURL(file));
        };

        return (
                <>
                        <Label htmlFor="download-image">Chose File</Label>
                        <Download
                                accept="image/*,.png,.jpg,.gif"
                                onChange={handleChange}
                                id="download-image"
                                type="file"
                                name="cat-img"
                        />
                </>
        );
};

export default DownloadInput;
