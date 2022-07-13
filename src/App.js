import ModeProvider, { useMode } from './context/ModeProvider';
import Home from './pages/Home';
import MainHead from './SEO/MainHead';
import { GlobalStyle } from './theme/GlobalStyle';

function App() {
        return (
                <ModeProvider>
                        <div>
                                <MainHead />
                                <h1>MAIN PAGE HERE</h1>
                                <Home />
                                <GlobalStyle />
                        </div>
                </ModeProvider>
        );
}

export default App;
