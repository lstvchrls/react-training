import hero_mobile from '@/assets/landing-page/mobile/image-header.jpg';
import hero_desktop from '@/assets/landing-page/desktop/image-header.jpg';
import arrow from '@/assets/landing-page/icon-arrow-down.svg';
import Navbar from '../Navbar';
import useScreenSize from '@/hooks/useScreenSize';

const HeroSection = () => {
    const { width } = useScreenSize();

    return (
        <header className="relative bg-brand-light-blue">
            <Navbar />
            <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 lg:gap-8 container mx-auto px-4">
                <h1 className="text-4xl lg:text-6xl font-fraunces text-neutral-50 text-center font-bold">
                    WE ARE CREATIVES
                </h1>
                <img src={arrow} alt="arrow" className="h-25 lg:h-35 w-fit" />
            </div>
            <img
                src={width > 644 ? hero_desktop : hero_mobile}
                alt="logo"
                className="h-full w-full container mx-auto"
            />
        </header>
    );
};

export default HeroSection;
