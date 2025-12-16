import PostCard from '@/features/posts/components/PostCard';
import { useGetPostListQuery } from '@/features/posts/hooks/queries';
import { Link } from 'react-router';
import FallBack from '../fallback';

const PostsPage = () => {
    const { data, isLoading, isFetching } = useGetPostListQuery();

    if (isFetching || isLoading) return <FallBack> Loading... </FallBack>;

    return (
        <main className="main-container">
            <h1 className="font-semibold text-4xl"> Posts </h1>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                {data?.map((item) => (
                    <Link key={item.id} to={`/posts/${item.id}`}>
                        <PostCard {...item} />
                    </Link>
                ))}
            </div>
        </main>
    );
};

export default PostsPage;
