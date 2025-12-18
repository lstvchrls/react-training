import InputField from '@/components/InputField';
import TextAreaField from '@/components/TextAreaField';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import type { IPostFormData } from '../schema';
import type {
    UseFormRegister,
    FieldErrors,
    UseFormHandleSubmit,
} from 'react-hook-form';

interface PostFormProps {
    register: UseFormRegister<IPostFormData>;
    handleSubmit: UseFormHandleSubmit<IPostFormData>;
    errors: FieldErrors<IPostFormData>;
    isPending: boolean;
    isDirty: boolean;
    onSubmit: (data: IPostFormData) => void | Promise<void>;
    title?: string;
}

const PostForm = ({
    register,
    handleSubmit,
    errors,
    isPending,
    isDirty,
    onSubmit,
    title = 'Edit Post',
}: PostFormProps) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <CardContent className="space-y-4">
                    <InputField
                        label="Title"
                        {...register('title')}
                        placeholder="Enter title"
                        error={errors.title?.message}
                        disabled={isPending}
                    />
                    <TextAreaField
                        label="Body"
                        {...register('body')}
                        placeholder="Enter body"
                        error={errors.body?.message}
                        disabled={isPending}
                    />
                </CardContent>
                <CardFooter className="space-x-2 flex justify-end">
                    <Button
                        type="button"
                        variant="outline"
                        disabled={isPending || !isDirty}
                    >
                        Cancel
                    </Button>
                    <Button type="submit" disabled={isPending || !isDirty}>
                        Save
                    </Button>
                </CardFooter>
            </form>
        </Card>
    );
};

export default PostForm;
