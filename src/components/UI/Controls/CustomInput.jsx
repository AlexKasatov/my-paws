import styled from 'styled-components';

import Select from 'react-select';

export const CustomSelect = styled(Select).attrs({
        styles: {
                control: (provided) => ({
                        ...provided,
                        backgroundColor: `${({ theme }) => theme.colors.pageMain}`,
                        color: `${({ theme }) => theme.colors.textSupport}`,
                        borderRadius: '20px',
                        padding: '0.25rem',
                        border: 'none',
                        height: '50px',
                        cursor: 'pointer',
                }),
                option: (provided, state) => ({
                        ...provided,
                        cursor: 'pointer',
                        color: `${({ theme }) => theme.colors.textSupport}`,
                }),
        },
})`
        width: 200px;
        border-radius: 20px;
        font-family: 'Jost';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        border: none;

        & input {
                padding-left: 0 0.25rem;
        }

        /* placeholder's color */
        & * {
                color: ${({ theme }) => theme.colors.textSupport} !important;
        }

        & > div[id] {
                background-color: ${({ theme }) => theme.colors.pageSecondary};
        }

        /* placeholder's color with class */
        /* .css-qc6sy-singleValue {
                color: var(--color-text);
        } */
`;
