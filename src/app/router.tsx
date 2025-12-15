import { BrowserRouter, Route, Routes } from 'react-router';
import HomePage from '@/pages';
import LandingPage from '@/pages/landing-page';
import RootLayout from './Layouts/RootLayout';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RootLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/landing-page" element={<LandingPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
