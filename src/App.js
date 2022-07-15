import { ToastContainer } from 'react-toastify';
import ModeProvider from './context/ModeProvider';
import Home from './pages/Home';
import PageRouter from './routes/PageRouter';
import MainHead from './SEO/MainHead';
import { GlobalStyle } from './theme/GlobalStyle';
import 'react-toastify/dist/ReactToastify.css';

function App() {
        return (
                <ModeProvider>
                        <MainHead />
                        <GlobalStyle />
                        <PageRouter />
                        <ToastContainer />
                </ModeProvider>
        );
}

export default App;
