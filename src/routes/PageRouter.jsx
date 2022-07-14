import { HashRouter, BrowserRouter as Router, useLocation } from 'react-router-dom';
import AnimatedRoutes from './AnimatedRoutes';

const PageRouter = () => (
        // ! Change BrowserRouter to HashRouter to enable hash routing for github pages
        <Router>
                <AnimatedRoutes />
        </Router>
);

export default PageRouter;
