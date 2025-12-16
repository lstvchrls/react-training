import { Link } from 'react-router';
import { Button } from '@/components/ui/button';
import hamburger from '@/assets/landing-page/icon-hamburger.svg';

const Navbar = () => {
    const LINKS = [
        {
            label: 'About',
            href: '/about',
        },
        {
            label: 'Services',
            href: '/services',
        },
        {
            label: 'Projects',
            href: '/projects',
        },
    ];

    return (
        <nav className="text-neutral-50 absolute top-0 lg:top-4 left-0 w-full">
            <div className="container mx-auto px-4 p-4 flex justify-between items-center">
                <h2 className="text-lg md:text-2xl font-bold"> sunnyside </h2>
                <img
                    src={hamburger}
                    alt="hamburger"
                    className="cursor-pointer lg:hidden"
                />
                <ul className="hidden lg:flex gap-5 items-center rounded-full">
                    {LINKS.map((link) => (
                        <li key={link.href}>
                            <Link
                                to={link.href}
                                className="pointer-events-none"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Button
                            asChild
                            variant="secondary"
                            className="rounded-full pointer-events-none"
                        >
                            <Link to="/contact">Contact</Link>
                        </Button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
