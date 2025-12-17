import { Button } from '@/components/ui/button';
import PostForm from '@/features/posts/components/PostForm';
import { useCreatePostMutation } from '@/features/posts/hooks/mutations';
import { Link, useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { POST_SCHEMA, type IPostFormData } from '@/features/posts/schema';
import { zodResolver } from '@hookform/resolvers/zod';

const WritePostPage = () => {
    const navigate = useNavigate();
    const { mutateAsync: createPost, isPending } = useCreatePostMutation();

    const {
        register,
        handleSubmit,
        formState: { errors, isDirty },
    } = useForm<IPostFormData>({
        resolver: zodResolver(POST_SCHEMA),
        defaultValues: {
            title: '',
            body: '',
        },
    });

    const onSubmit = async (payload: IPostFormData) => {
        try {
            const { data: createdData } = await createPost(payload);
            navigate(`/posts/${createdData.id}`);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <main className="main-container max-w-[800px]">
            <Button
                variant="link"
                nativeButton={false}
                render={<Link to="/posts">Back</Link>}
            />
            <PostForm
                register={register}
                handleSubmit={handleSubmit}
                errors={errors}
                isPending={isPending}
                isDirty={isDirty}
                onSubmit={onSubmit}
                title="Create Post"
            />
        </main>
    );
};

export default WritePostPage;
