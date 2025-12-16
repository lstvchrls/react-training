import emily_avatar from '@/assets/landing-page/image-emily.jpg';
import thomas_avatar from '@/assets/landing-page/image-thomas.jpg';
import jennie_avatar from '@/assets/landing-page/image-jennie.jpg';

import TestimonialCard from './Card';

const Testimonials = () => {
    const TESTIMONIALS = [
        {
            image: emily_avatar,
            quote: 'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
            name: 'Emily R.',
            position: 'Marketing Director',
        },
        {
            image: thomas_avatar,
            quote: 'Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.',
            name: 'Thomas S.',
            position: 'Chief Operating Office',
        },
        {
            image: jennie_avatar,
            quote: 'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!',
            name: 'Jennie F.',
            position: 'Business Owner',
        },
    ];

    return (
        <section className="container xl:max-w-7xl px-4 mx-auto py-20 space-y-16">
            <h2 className="text-lg tracking-wider font-bold text-slate-400 font-fraunces text-center">
                CLIENT TESTIMONIALS
            </h2>
            <div className="grid lg:grid-cols-3 gap-18 lg:gap-10">
                {TESTIMONIALS.map((item) => (
                    <TestimonialCard key={item.name} {...item} />
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
