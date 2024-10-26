import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './Styles/Theme';
import Sidebar from './Components/Themes/Sidebar';

function RouteMain() {
    return (
        <ThemeProvider theme={theme}>
            <div>
                <Router>
                    <Routes>
                        <Route exact path="/" element={<Sidebar />} />
                    </Routes>
                </Router>
            </div>

        </ThemeProvider>
    );
}

export default RouteMain;