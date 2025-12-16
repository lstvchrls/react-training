import { Link } from 'react-router';

import icon_facebook from '@/assets/landing-page/icon-facebook.svg';
import icon_instagram from '@/assets/landing-page/icon-instagram.svg';
import icon_pinterest from '@/assets/landing-page/icon-pinterest.svg';
import icon_twitter from '@/assets/landing-page/icon-twitter.svg';

const Footer = () => {
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

    const SOCIAL_ICONS = [
        {
            name: 'Facebook',
            icon: icon_facebook,
            href: '#',
        },
        {
            name: 'Instagram',
            icon: icon_instagram,
            href: '#',
        },
        {
            name: 'Pinterest',
            icon: icon_pinterest,
            href: '#',
        },
        {
            name: 'Twitter',
            icon: icon_twitter,
            href: '#',
        },
    ];

    return (
        <footer className="bg-brand-green py-20 space-y-8">
            <h2 className="mx-auto w-fit text-xl font-fraunces font-bold text-slate-50 tracking-wide">
                sunnyside
            </h2>
            <ul className="mx-auto w-fit flex flex-col sm:flex-row gap-4 text-brand-green-800 font-semibold opacity-80">
                {LINKS.map((item) => (
                    <li key={item.href}>
                        <Link to={item.href} className="pointer-events-none">
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
            <ul className="mx-auto w-fit flex gap-6">
                {SOCIAL_ICONS.map((item) => (
                    <li key={item.name}>
                        <Link
                            to={item.href}
                            className="pointer-events-none"
                            aria-label={item.name}
                        >
                            <img
                                src={item.icon}
                                alt={item.name}
                                className="w-6 h-6"
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </footer>
    );
};

export default Footer;
