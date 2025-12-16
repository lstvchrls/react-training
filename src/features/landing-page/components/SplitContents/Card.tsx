import { cn } from '@lib/utils';
import { Link } from 'react-router';

interface Props {
    title: string;
    description: string;
    image: {
        src: string;
        alt: string;
    };
    reverse?: boolean;
    link: {
        href?: string;
        label?: string;
        className?: string;
    };
}

const SplitContentCard = ({
    title,
    description,
    image,
    reverse = false,
    link,
}: Props) => {
    return (
        <div className="md:container mx-auto grid md:grid-cols-2 bg-transparent rounded-3xl">
            <img
                src={image.src}
                alt={image.alt}
                className={cn(
                    'w-full h-full object-cover',
                    reverse && 'md:order-2'
                )}
            />
            <div
                className={cn(
                    'px-6 py-10 lg:px-12 flex flex-col justify-center gap-4 lg:gap-8 text-center md:text-start max-w-121 mx-auto'
                )}
            >
                <h2 className="text-4xl lg:text-5xl font-fraunces text-neutral-950 font-bold">
                    {title}
                </h2>
                <p className="text-slate-800">{description}</p>
                <Link
                    to={link.href || ''}
                    className={cn(
                        'relative z-10',
                        'font-bold text-lg font-fraunces block w-fit mx-auto md:mx-0 pointer-events-none',
                        'before:content-[""] before:absolute before:left-0 before:bottom-1.5',
                        'before:w-full before:h-1.25 before:rounded-full',
                        link.className
                            ? link.className
                            : 'before:bg-brand-yellow-500',
                        'before:-z-10'
                    )}
                >
                    {link.label || 'Learn more'}
                </Link>
            </div>
        </div>
    );
};

export default SplitContentCard;
