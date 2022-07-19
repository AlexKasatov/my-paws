import { ToastContainer } from 'react-toastify';
import ModeProvider from './context/ModeProvider';
import PageRouter from './routes/PageRouter';
import MainHead from './SEO/MainHead';
import { GlobalStyle } from './theme/GlobalStyle';
import 'react-toastify/dist/ReactToastify.css';
import DataProvider from './context/DataProvider';

function App() {
        return (
                <DataProvider>
                        <ModeProvider>
                                <MainHead />
                                <GlobalStyle />
                                <PageRouter />
                                <ToastContainer />
                        </ModeProvider>
                </DataProvider>
        );
}

export default App;
