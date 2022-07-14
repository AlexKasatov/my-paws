import styled from 'styled-components';

import React from 'react';
import { useMode } from '../../../context/ModeProvider';

const Switcher = styled.button`
        cursor: pointer;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        border: none;
        background-color: ${(props) => props.theme.colors.pageSecondary};
`;

const Light = () => (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="#FF868E" xmlns="http://www.w3.org/2000/svg">
                <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.11701 7.99997C1.11728 8.00055 1.11756 8.00113 1.11783 8.00171C1.18157 8.13691 1.27966 8.33326 1.41401 8.57036C1.68332 9.04561 2.09499 9.67864 2.66308 10.3099C3.79852 11.5715 5.53171 12.8 7.99998 12.8C10.4683 12.8 12.2015 11.5715 13.3369 10.3099C13.905 9.67864 14.3167 9.04561 14.586 8.57036C14.7203 8.33326 14.8184 8.13691 14.8822 8.00171C14.8824 8.00113 14.8827 8.00054 14.883 7.99996C14.8827 7.99939 14.8824 7.99881 14.8822 7.99822C14.8184 7.86303 14.7203 7.66667 14.586 7.42957C14.3167 6.95432 13.905 6.3213 13.3369 5.69008C12.2015 4.42848 10.4683 3.19997 7.99998 3.19997C5.53171 3.19997 3.79852 4.42848 2.66308 5.69008C2.09499 6.3213 1.68332 6.95432 1.41401 7.42957C1.27966 7.66667 1.18157 7.86302 1.11783 7.99822C1.11756 7.9988 1.11728 7.99939 1.11701 7.99997ZM15.4667 7.99997C15.9619 7.80189 15.9618 7.80166 15.9617 7.80141L15.9614 7.80081L15.9608 7.79924L15.9589 7.79465L15.9528 7.77976C15.9476 7.76734 15.9403 7.74998 15.9308 7.72801C15.9117 7.68408 15.8839 7.62165 15.847 7.54338C15.7732 7.38691 15.663 7.1666 15.514 6.90369C15.2167 6.37895 14.7617 5.67864 14.1297 4.97652C12.8652 3.57145 10.865 2.1333 7.99998 2.1333C5.13493 2.1333 3.13479 3.57146 1.87023 4.97652C1.23833 5.67864 0.78334 6.37895 0.485985 6.90369C0.337007 7.1666 0.226765 7.38691 0.153002 7.54338C0.1161 7.62165 0.0882684 7.68408 0.06923 7.72801C0.0597091 7.74999 0.0523817 7.76735 0.0472137 7.77977L0.0410748 7.79465L0.0392106 7.79924L0.0385783 7.80081L0.0383369 7.80141C0.0382369 7.80166 0.0381453 7.80189 0.533333 7.99997L0.0381453 7.80189C-0.0127151 7.92904 -0.0127151 8.07089 0.0381453 8.19804L0.533333 7.99997C0.0381453 8.19804 0.0382369 8.19827 0.0383369 8.19852L0.0385783 8.19912L0.0392106 8.20069L0.0410748 8.20528L0.0472137 8.22017C0.0523817 8.23259 0.0597091 8.24995 0.06923 8.27192C0.0882684 8.31585 0.1161 8.37828 0.153002 8.45656C0.226765 8.61302 0.337007 8.83334 0.485985 9.09624C0.78334 9.62099 1.23833 10.3213 1.87023 11.0234C3.13479 12.4285 5.13493 13.8666 7.99998 13.8666C10.865 13.8666 12.8652 12.4285 14.1297 11.0234C14.7617 10.3213 15.2167 9.62099 15.514 9.09624C15.663 8.83334 15.7732 8.61303 15.847 8.45656C15.8839 8.37828 15.9117 8.31586 15.9308 8.27192C15.9403 8.24995 15.9476 8.23259 15.9528 8.22017L15.9589 8.20528L15.9608 8.20069L15.9614 8.19912L15.9617 8.19852C15.9618 8.19827 15.9619 8.19804 15.4667 7.99997ZM15.4667 7.99997L15.9619 8.19804C16.0127 8.07089 16.0127 7.92904 15.9619 7.80189L15.4667 7.99997ZM5.33333 7.99997C5.33333 6.52721 6.52724 5.3333 8 5.3333C9.47276 5.3333 10.6667 6.52721 10.6667 7.99997C10.6667 9.47273 9.47276 10.6666 8 10.6666C6.52724 10.6666 5.33333 9.47273 5.33333 7.99997ZM8 6.39997C7.11634 6.39997 6.4 7.11631 6.4 7.99997C6.4 8.88362 7.11634 9.59997 8 9.59997C8.88366 9.59997 9.6 8.88362 9.6 7.99997C9.6 7.11631 8.88366 6.39997 8 6.39997Z"
                />
        </svg>
);
const Dark = () => (
        <svg width="16" height="17" viewBox="0 0 16 17" fill="#FF868E" xmlns="http://www.w3.org/2000/svg">
                <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.62475 10.5087C3.76019 11.7703 5.49337 12.9988 7.96165 12.9988C10.4299 12.9988 12.1631 11.7703 13.2986 10.5087C13.8667 9.87746 14.2783 9.24444 14.5477 8.76919C14.682 8.53209 14.7801 8.33574 14.8438 8.20054C14.8757 8.13298 14.8989 8.08082 14.9137 8.04663C14.9211 8.02954 14.9264 8.01695 14.9296 8.00919L14.9329 8.00121L14.9333 8.00036C14.9332 8.00053 14.9331 8.00072 15.4283 8.1988C15.9235 8.39687 15.9234 8.3971 15.9233 8.39735L15.9231 8.39795L15.9225 8.39952L15.9206 8.40411L15.9145 8.419C15.9093 8.43142 15.902 8.44878 15.8924 8.47075C15.8734 8.51469 15.8456 8.57711 15.8087 8.65539C15.7349 8.81185 15.6247 9.03217 15.4757 9.29507C15.1783 9.81982 14.7233 10.5201 14.0914 11.2222C13.8963 11.439 13.6838 11.6565 13.4532 11.8694L15.2721 13.6883L14.5179 14.4426L12.6247 12.5494C11.5497 13.3284 10.183 13.9407 8.49499 14.0486L8.495 16.1988L7.42833 16.1988L7.42832 14.0486C5.74028 13.9407 4.37362 13.3284 3.29861 12.5494L1.40546 14.4426L0.651209 13.6883L2.4701 11.8694C2.23955 11.6565 2.02697 11.439 1.8319 11.2222C1.2 10.5201 0.745006 9.81981 0.447651 9.29507C0.298673 9.03216 0.188431 8.81185 0.114668 8.65538C0.0777664 8.57711 0.0499344 8.51468 0.030896 8.47075C0.0213751 8.44878 0.0140477 8.43142 0.00887967 8.419L0.00274077 8.40411L0.000876558 8.39952L0.00024424 8.39795L2.83322e-06 8.39735C-9.708e-05 8.3971 -0.000188764 8.39687 0.494999 8.1988C0.990187 8.00072 0.990112 8.00053 0.990045 8.00037L0.98995 8.00013L0.990391 8.00121L0.993684 8.00919C0.996914 8.01696 1.00222 8.02954 1.00962 8.04664C1.02444 8.08083 1.04765 8.13298 1.0795 8.20054C1.14323 8.33574 1.24132 8.53209 1.37568 8.76919C1.64498 9.24444 2.05666 9.87747 2.62475 10.5087ZM0.989904 8.00002C0.989887 7.99997 0.989903 8.00001 0.98995 8.00013Z"
                />
        </svg>
);

const ThemeSwitcher = () => {
        const { mode, toggleTheme } = useMode();

        return <Switcher onClick={toggleTheme}>{mode === 'light' ? <Light /> : <Dark />}</Switcher>;
};

export default ThemeSwitcher;