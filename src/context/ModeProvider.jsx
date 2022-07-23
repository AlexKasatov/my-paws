/* eslint-disable react/prop-types */
import { createContext, useState, useEffect, useMemo, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkMode, ligthMode } from '../theme/theme';

export const ContextMode = createContext();

export const useMode = () => useContext(ContextMode);

const ModeProvider = ({ children }) => {
        // const [mode, setMode] = useState(() => localStorage.getItem('mode') || 'light');
        const [mode, setMode] = useState(() => localStorage.getItem('mode') || true);

        useEffect(() => {
                localStorage.setItem('mode', mode);
        }, [mode]);

        const toggleTheme = () => {
                setMode((prev) => !prev);
        };

        const value = useMemo(() => ({ mode, setMode, toggleTheme }), [mode]);

        return (
                <ContextMode.Provider value={value}>
                        <ThemeProvider theme={mode ? ligthMode : darkMode}>{children}</ThemeProvider>
                </ContextMode.Provider>
        );
};

export default ModeProvider;
