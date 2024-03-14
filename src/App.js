import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import About from './pages/About';
import NoPage from "./pages/NoPage";
import QRPage from "./pages/QRPage";
import Git from "./pages/Git";



function App() {

    return (
        <div>
                <BrowserRouter>
                    <Routes>
                        <Route index element={<WelcomePage />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/kpi.fei.tuke.sk" element={<Git />} />
                        <Route path="/qr" element={<QRPage />} />
                        <Route path="*" element={<NoPage />} />
                    </Routes>
                </BrowserRouter>
        </div>
    );
}

export default App;
