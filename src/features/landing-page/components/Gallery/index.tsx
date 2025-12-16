import useScreenSize from '@/hooks/useScreenSize';

import cone_mobile from '@/assets/landing-page/mobile/image-gallery-cone.jpg';
import milkbottles_mobile from '@/assets/landing-page/mobile/image-gallery-milkbottles.jpg';
import orange_mobile from '@/assets/landing-page/mobile/image-gallery-orange.jpg';
import sugar_cubes_mobile from '@/assets/landing-page/mobile/image-gallery-sugar-cubes.jpg';

import cone_desktop from '@/assets/landing-page/desktop/image-gallery-cone.jpg';
import milkbottles_desktop from '@/assets/landing-page/desktop/image-gallery-milkbottles.jpg';
import orange_desktop from '@/assets/landing-page/desktop/image-gallery-orange.jpg';
import sugar_cubes_desktop from '@/assets/landing-page/desktop/image-gallery-sugarcubes.jpg';

const Gallery = () => {
    const { width } = useScreenSize();
    const isDesktop = width >= 640;

    const images = [
        {
            alt: 'Cone',
            src: isDesktop ? cone_desktop : cone_mobile,
        },
        {
            alt: 'Orange slice',
            src: isDesktop ? orange_desktop : orange_mobile,
        },
        {
            alt: 'Milk bottles',
            src: isDesktop ? milkbottles_desktop : milkbottles_mobile,
        },
        {
            alt: 'Sugar cubes',
            src: isDesktop ? sugar_cubes_desktop : sugar_cubes_mobile,
        },
    ];

    return (
        <section className="grid grid-cols-2 sm:grid-cols-4">
            {images.map((image) => (
                <img
                    key={image.alt}
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                />
            ))}
        </section>
    );
};

export default Gallery;
