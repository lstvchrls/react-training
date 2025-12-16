import { cn } from '@/lib/utils';
import { Textarea } from '../ui/textarea';
import type { ComponentProps } from 'react';

interface Props extends ComponentProps<'textarea'> {
    label?: string;
    error?: string;
    description?: string;
}

const TextAreaField = ({ label, error, description, ...props }: Props) => {
    return (
        <div className="flex flex-col gap-1">
            {label && (
                <label htmlFor={props.name} className="w-fit">
                    {label}
                </label>
            )}
            <Textarea
                id={props.name}
                className={cn('w-full resize-none', props.className)}
                {...props}
                aria-invalid={!!error}
            />
            {description && <p className="text-gray-500">{description}</p>}
            {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    );
};

export default TextAreaField;
