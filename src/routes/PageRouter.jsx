import { BrowserRouter as Router } from 'react-router-dom';
import AnimatedRoutes from './AnimatedRoutes';

const PageRouter = () => (
        // ! Change BrowserRouter to HashRouter to enable hash routing for github pages
        <Router>
                <AnimatedRoutes />
        </Router>
);

export default PageRouter;
