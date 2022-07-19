import styled from 'styled-components';
import { border, color, compose, flexbox, layout, position, space, typography, width, height } from 'styled-system';
import Select from 'react-select';

export const CustomSelect = styled(Select).attrs((props) => ({
        styles: {
                control: (provided) => ({
                        ...provided,
                        backgroundColor: props.theme.colors.pageMain,
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
        width: 100%;
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
