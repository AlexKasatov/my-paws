import ModeProvider from './context/ModeProvider';
import Home from './pages/Home';
import PageRouter from './routes/PageRouter';
import MainHead from './SEO/MainHead';
import { GlobalStyle } from './theme/GlobalStyle';

function App() {
        return (
                <ModeProvider>
                        <MainHead />
                        <GlobalStyle />
                        <PageRouter />
                </ModeProvider>
        );
}

export default App;
