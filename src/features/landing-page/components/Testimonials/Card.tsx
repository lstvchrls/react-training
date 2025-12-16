interface Props {
    name: string;
    quote: string;
    position: string;
    image: string;
}

const TestimonialCard = ({ name, image, quote, position }: Props) => {
    return (
        <div className="space-y-8 flex flex-col items-center text-center text-slate-800 max-w-75 mx-auto">
            <img
                src={image}
                alt={`${name} avatar`}
                className="h-14 w-14 rounded-full"
            />
            <p> {quote} </p>
            <div>
                <h2 className="font-bold text-lg font-fraunces"> {name} </h2>
                <p className="opacity-75 text-sm"> {position} </p>
            </div>
        </div>
    );
};

export default TestimonialCard;
