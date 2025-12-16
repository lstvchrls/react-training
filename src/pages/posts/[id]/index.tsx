import { Button } from '@/components/ui/button';
import PostCard from '@/features/posts/components/PostCard';
import { useGetPostDetailsQuery } from '@/features/posts/hooks/queries';
import FallBack from '@/pages/fallback';
import { SquarePen, Trash2 } from 'lucide-react';

import { Link, useParams } from 'react-router';

const PostDetailsPage = () => {
    const { id } = useParams<{ id: string }>();

    const { data, isLoading } = useGetPostDetailsQuery(+id!);

    if (isLoading) return <FallBack> Loading... </FallBack>;
    if (!data) return <FallBack> No posts found </FallBack>;

    return (
        <main className="main-container max-w-[800px]">
            <div className="flex items-end justify-between">
                <Button
                    variant="link"
                    nativeButton={false}
                    render={<Link to="/posts">Back</Link>}
                />
                <div className="space-x-2">
                    <Button
                        size="icon-sm"
                        variant="outline"
                        nativeButton={false}
                        render={
                            <Link to={`/posts/${id}/edit`}>
                                <SquarePen />
                            </Link>
                        }
                    />
                    <Button
                        size="icon-sm"
                        variant="destructive"
                        className="cursor-pointer"
                    >
                        <Trash2 />
                    </Button>
                </div>
            </div>
            <PostCard {...data} />
        </main>
    );
};

export default PostDetailsPage;
