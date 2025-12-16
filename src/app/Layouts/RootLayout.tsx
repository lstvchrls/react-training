import { Outlet, NavLink } from 'react-router';

const RootLayout = () => {
    return (
        <>
            <nav className="container mx-auto px-4 flex gap-2">
                <NavLink to="/">Home </NavLink>
                <NavLink to="/landing-page">Landing Page</NavLink>
            </nav>
            <Outlet />
        </>
    );
};

export default RootLayout;
