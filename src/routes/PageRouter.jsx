import { HashRouter, BrowserRouter as Router } from 'react-router-dom';
import AnimatedRoutes from './AnimatedRoutes';

const PageRouter = () => (
        // ! Change BrowserRouter to HashRouter to enable hash routing for github pages
        <HashRouter>
                <AnimatedRoutes />
        </HashRouter>
);

export default PageRouter;
