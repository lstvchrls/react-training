import { Button } from '@/components/ui/button';
import FallBack from '@/pages/fallback';
import { useUpdatePostMutation } from '@/features/posts/hooks/mutations';
import { useGetPostDetailsQuery } from '@/features/posts/hooks/queries';
import PostForm from '@/features/posts/components/PostForm';
import { useAsyncFormData } from '@/hooks/useAsyncFormData';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import { POST_SCHEMA, type IPostFormData } from '@/features/posts/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import type { IPost } from '@/features/posts/types';

const EditPostPage = () => {
    const { id } = useParams<{ id: string }>();
    const post_id = +id!;

    const { data, isLoading, isFetching } = useGetPostDetailsQuery(post_id);
    const { mutateAsync: updatePost, isPending } = useUpdatePostMutation();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isDirty },
    } = useForm<IPostFormData>({
        resolver: zodResolver(POST_SCHEMA),
        defaultValues: {
            title: '',
            body: '',
        },
    });

    const { resetValues } = useAsyncFormData<IPost, IPostFormData>();

    useEffect(() => {
        resetValues({
            data,
            reset,
            disabled: isLoading || isFetching,
            mapper: (data) => ({
                title: data.title ?? '',
                body: data.body ?? '',
            }),
        });
    }, [data, isLoading, isFetching, resetValues, reset]);

    if (isLoading) return <FallBack> Loading... </FallBack>;
    if (!data) return <FallBack> No posts found </FallBack>;

    const onSubmit = async (payload: IPostFormData) => {
        try {
            const { data: updatedData } = await updatePost({
                id: post_id,
                payload,
            });

            alert(`${JSON.stringify(updatedData, null, 2)}`);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <main className="main-container max-w-[800px]">
            <Button
                variant="link"
                nativeButton={false}
                render={<Link to={`/posts/${id}`}>Back</Link>}
            />
            <PostForm
                register={register}
                handleSubmit={handleSubmit}
                errors={errors}
                isPending={isPending}
                isDirty={isDirty}
                onSubmit={onSubmit}
            />
        </main>
    );
};

export default EditPostPage;
