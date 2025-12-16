import { Outlet, NavLink } from 'react-router';

const RootLayout = () => {
    const LINKS = [
        {
            label: 'Home',
            href: '/',
        },

        {
            label: 'Posts',
            href: '/posts',
        },
        {
            label: 'Users',
            href: '/users',
        },
    ];

    return (
        <>
            <nav className="container mx-auto px-4 flex items-center justify-between gap-2 py-4">
                <h2 className="font-semibold"> Lstv Training </h2>
                <ul className="flex items-center gap-4">
                    {LINKS.map((item) => (
                        <li key={item.href}>
                            <NavLink to={item.href}>{item.label}</NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
            <Outlet />
        </>
    );
};

export default RootLayout;
