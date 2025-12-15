import { Link, Outlet, NavLink } from 'react-router';

const RootLayout = () => {
    return (
        <>
            <nav className="container mx-auto px-4">
                <Link to="/">Home </Link>
                <NavLink to="/landing-page">Landing Page</NavLink>
            </nav>
            <Outlet />
        </>
    );
};

export default RootLayout;
