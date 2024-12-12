import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './Styles/Theme';
import Sidebar from './Components/Themes/Sidebar';
import SignUp from './Auth/signUp';
import Login from './Auth/login';
import ForgotPassword from './Auth/forgotPassword'
import ResetPassword from './Auth/resetPassword';

function RouteMain() {
    return (
        <ThemeProvider theme={theme}>
            <div>
                <Router>
                    <Routes>
                        <Route exact path="/" element={<Sidebar />} />
                        <Route exact path="/signup" element={<SignUp />} />
                        <Route exact path="/lg" element={<Login />} />
                        <Route exact path="/fp" element={<ForgotPassword />} />
                        <Route exact path="/rp" element={<ResetPassword />} />

                    </Routes>
                </Router>
            </div>

        </ThemeProvider>
    );
}

export default RouteMain;