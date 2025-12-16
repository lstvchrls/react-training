import HeroSection from '@/features/landing-page/components/HeroSection';
import ImageContents from '@/features/landing-page/components/ImageContents';
import Gallery from '@/features/landing-page/components/Gallery';
import SplitContents from '@/features/landing-page/components/SplitContents';
import Testimonials from '@/features/landing-page/components/Testimonials';
import Footer from '@/features/landing-page/components/Footer';

const LandingPage = () => {
    return (
        <>
            <HeroSection />
            <main className="font-barlow">
                <SplitContents />
                <ImageContents />
                <Testimonials />
                <Gallery />
                <Footer />
            </main>
        </>
    );
};

export default LandingPage;
