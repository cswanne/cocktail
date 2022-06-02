import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Welcome from './Welcome';
import QuestionOne from './QuestionOne';
import MainMenu from './MainMenu';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={ <Welcome /> }
                />
                {/* The next line is very important for the Navigate component to work */}
                <Route
                    path="/main-menu"
                    element={ <MainMenu /> }
                />
                <Route
                    path="/question-one"
                    element={ <QuestionOne /> }
                />
                <Route
                    path="/redirect"
                    element={ <Navigate to="/" /> }
                />
            </Routes>
        </BrowserRouter>
    );
}
export default App;