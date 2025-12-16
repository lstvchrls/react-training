import useScreenSize from '@/hooks/useScreenSize';
import ImageContentCard from './Card';

import graphic_design_mobile from '@/assets/landing-page/mobile/image-graphic-design.jpg';
import graphic_design_desktop from '@/assets/landing-page/desktop/image-graphic-design.jpg';

import photography_mobile from '@/assets/landing-page/mobile/image-photography.jpg';
import photography_desktop from '@/assets/landing-page/desktop/image-photography.jpg';
import { cn } from '@/lib/utils';

const ImageContents = () => {
    const { width } = useScreenSize();

    const ITEMS = [
        {
            title: 'Graphic Design',
            description:
                "Great design make you memorable, We deliver artwork that underscores your brand message and capture potential clients' attention.",
            slotProps: {
                wrapper: { className: 'text-brand-green-800' },
            },
            image: {
                src:
                    width > 640
                        ? graphic_design_desktop
                        : graphic_design_mobile,
                alt: 'Graphic design',
            },
            custom_style: 'before:bg-[#F4988C] after:bg-transparent',
        },
        {
            title: 'Photography',
            description:
                'Increase your credibility by getting the most stunning, high-quality photos that improve your business image.',
            slotProps: {
                wrapper: { className: 'text-brand-blue-800' },
            },
            image: {
                src: width > 640 ? photography_desktop : photography_mobile,
                alt: 'Graphic design',
            },
            custom_style: 'before:bg-peach after:bg-transparent',
        },
    ];

    return (
        <section>
            <div className="overflow-hidden relative">
                <div
                    className={cn(
                        'absolute top-0 left-1/2 -translate-x-1/2 h-full w-screen -z-10 hidden md:block',
                        "before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:w-1/2 before:bg-brand-green",
                        "after:content-[''] after:absolute after:top-0 after:right-0 after:h-full after:w-1/2 after:bg-brand-blue"
                    )}
                />
                <div className="md:container mx-auto grid md:grid-cols-2 bg-black">
                    {ITEMS.map((item) => (
                        <ImageContentCard key={item.title} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImageContents;
