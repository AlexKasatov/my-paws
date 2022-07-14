/* eslint-disable react/prop-types */
import React from 'react';
import { Wrapper } from './Wrapper';

// HERE RENDERS ALL CONTENT (OUTLET)
const Main = ({ children }) => <Wrapper>{children}</Wrapper>;

export default Main;
