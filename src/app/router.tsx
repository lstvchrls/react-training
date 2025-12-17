import { BrowserRouter, Route, Routes } from 'react-router';
import HomePage from '@/pages';
import LandingPage from '@/pages/landing-page';
import RootLayout from './Layouts/RootLayout';
import NotFound from '@/pages/not-found';
import PostsPage from '@/pages/posts';
import PostDetailsPage from '@/pages/posts/[id]';
import EditPostPage from '@/pages/posts/[id]/edit';
import WritePostPage from '@/pages/posts/write';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RootLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/landing-page" element={<LandingPage />} />
                    <Route path="/posts" element={<PostsPage />} />
                    <Route path="/posts/write" element={<WritePostPage />} />
                    <Route path="/posts/:id" element={<PostDetailsPage />} />
                    <Route path="/posts/:id/edit" element={<EditPostPage />} />
                </Route>
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
