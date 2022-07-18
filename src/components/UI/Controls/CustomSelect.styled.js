import styled from 'styled-components';

import Select from 'react-select';

export const CustomSelect = styled(Select).attrs((props) => ({
        styles: {
                control: (provided, state) => ({
                        ...provided,
                        backgroundColor: props.theme.colors.body,
                        color: props.theme.colors.textSupport,
                        borderRadius: '10px',
                        padding: '0.25rem',
                        height: '50px',
                        cursor: 'pointer',
                        border: '0 !important',
                        // This line disable the blue border
                        boxShadow: '0 !important',
                }),
                option: (provided, state) => ({
                        ...provided,
                        cursor: 'pointer',

                        color: props.theme.colors.textSupport,
                        backgroundColor: state.isFocused ? props.theme.colors.secondary : props.theme.colors.body,
                }),
        },
}))`
        width: 200px;
        border-radius: 20px;
        font-family: 'Jost';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;

        & * {
                transition: none !important;
        }

        & input {
                padding-left: 0 0.25rem;
        }
        & * {
                color: ${({ theme }) => theme.colors.textSupport} !important;
        }

        & > div[id] {
                background-color: ${({ theme }) => theme.colors.pageSecondary};
        }
`;

// export const CustomSelect = styled(Select).attrs({
//         styles: {
//                 control: (provided) => ({
//                         ...provided,
//                         backgroundColor: '#1D1D1D',
//                         color: `${({ theme }) => theme.colors.textSupport}`,
//                         borderRadius: '10px',
//                         padding: '0.25rem',
//                         border: 'none',
//                         height: '50px',
//                         cursor: 'pointer',
//                 }),
//                 option: (provided, state) => ({
//                         ...provided,
//                         cursor: 'pointer',
//                         color: `${({ theme }) => theme.colors.textSupport}`,
//                 }),
//         },
// })`
//         width: 200px;
//         border-radius: 20px;
//         font-family: 'Jost';
//         font-style: normal;
//         font-weight: 400;
//         font-size: 16px;
//         line-height: 24px;
//         border: none;

//         & input {
//                 padding-left: 0 0.25rem;
//         }

//         /* placeholder's color */
//         & * {
//                 color: ${({ theme }) => theme.colors.textSupport} !important;
//         }

//         & > div[id] {
//                 background-color: ${({ theme }) => theme.colors.pageSecondary};
//         }

//         /* placeholder's color with class */
//         /* .css-qc6sy-singleValue {
//                 color: var(--color-text);
//         } */
// `;
