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
        const [isDownload, setIsDownload] = useState(false);
        const [selectedFile, setSelectedFile] = useState(null);
        const handleChange = (e) => {
                console.log(e.target.files);
                setValue(e.target.files[0]);
                const [file] = e.target.files;
                setImgUrl(URL.createObjectURL(file));
                console.log(imgUrl);
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