import { useCallback, useState } from 'react';

export const useToggle = (initialState = false) => {
        // Initialize the state
        const [toggle, setToggle] = useState(initialState);

        // Define and memorize toggler function in case we pass down the component,
        // This function change the boolean value to it's opposite value
        const handleToggle = useCallback(() => setToggle((prev) => !prev), []);

        return [toggle, handleToggle];
};
