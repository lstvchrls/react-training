import SplitContentCard from './Card';

import image_transform_mobile from '@/assets/landing-page/mobile/image-transform.jpg';
import image_transform_desktop from '@/assets/landing-page/desktop/image-transform.jpg';

import stand_out_mobile from '@/assets/landing-page/mobile/image-stand-out.jpg';
import stand_out_desktop from '@/assets/landing-page/desktop/image-stand-out.png';

import useScreenSize from '@/hooks/useScreenSize';
import { cn } from '@/lib/utils';

const SplitContents = () => {
    const { width } = useScreenSize();

    const ITEMS = [
        {
            reverse: true,
            title: 'Transform your brand',
            description:
                'We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you',
            image: {
                src:
                    width > 644
                        ? image_transform_desktop
                        : image_transform_mobile,
                alt: 'Transform your brand',
            },
            link: { href: '/', label: 'Learn more' },
            custom_style: 'before:bg-transparent after:bg-[#fed501]',
        },
        {
            reverse: false,
            title: 'Stand out to the right audience',
            description:
                'Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.',
            image: {
                src: width > 644 ? stand_out_desktop : stand_out_mobile,
                alt: 'Stand out to the right audience',
            },
            link: {
                href: '/',
                label: 'Learn more',
                className: 'before:bg-red-400/50',
            },
            custom_style: 'before:bg-brand-peach after:bg-transparent',
        },
    ];

    return (
        <section className="relative overflow-hidden">
            {ITEMS.map((item) => (
                <div key={item.title} className="relative">
                    <div
                        className={cn(
                            'absolute top-0 left-1/2 -translate-x-1/2 h-full w-screen -z-10 hidden md:block',
                            "before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:w-1/2",
                            "after:content-[''] after:absolute after:top-0 after:right-0 after:h-full after:w-1/2",
                            item.custom_style
                        )}
                    />
                    <SplitContentCard {...item} />
                </div>
            ))}
        </section>
    );
};

export default SplitContents;
