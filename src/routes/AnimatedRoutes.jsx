import { Route, Routes, useLocation } from 'react-router-dom';
import { Children } from 'react';
import { AnimatePresence } from 'framer-motion';
import { publicRoutes } from './routes';
import Layout from '../layout/Layout';

// AnimatePresence is used to animate the exit of a route, when component is removed from the DOM.
// exitBeforeEnter  tells the entrance animation to wait until the exit animation has ended before starting - without this the content would mount on top of the unmounting content.

function AnimatedRoutes() {
        const location = useLocation();
        return (
                <AnimatePresence exitBeforeEnter>
                        <Routes location={location} key={location.pathname}>
                                <Route path="/" element={<Layout />}>
                                        {Children.toArray(
                                                publicRoutes.map(({ index, element, path, replace }) => (
                                                        <Route
                                                                path={path}
                                                                index={index}
                                                                replace={replace}
                                                                element={element}
                                                        />
                                                ))
                                        )}
                                </Route>
                        </Routes>
                </AnimatePresence>
        );
}

export default AnimatedRoutes;
