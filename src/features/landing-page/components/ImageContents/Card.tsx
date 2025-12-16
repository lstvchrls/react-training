import { cn } from '@lib/utils';

interface Props {
    title: string;
    description: string;
    image: {
        src: string;
        alt: string;
    };
    slotProps?: {
        wrapper?: { className?: string };
    };
}

const ImageContentCard = ({ title, description, image, slotProps }: Props) => {
    return (
        <section className={cn(slotProps?.wrapper?.className, 'relative')}>
            <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
            />
            <div className="absolute bottom-10 lg:bottom-16 left-0 right-0 w-full max-w-90 mx-auto flex flex-col items-center gap-4 text-center px-4">
                <h2 className="font-semibold font-fraunces text-3xl">
                    {title}
                </h2>
                <p>{description}</p>
            </div>
        </section>
    );
};

export default ImageContentCard;
