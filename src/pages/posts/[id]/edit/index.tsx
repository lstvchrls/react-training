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
import { useGetPostDetailsQuery } from '@/features/posts/hooks/queries';
import FallBack from '@/pages/fallback';
import { Link, useParams } from 'react-router';

const EditPostPage = () => {
    const { id } = useParams<{ id: string }>();
    const { data, isLoading } = useGetPostDetailsQuery(+id!);

    if (isLoading) return <FallBack> Loading... </FallBack>;
    if (!data) return <FallBack> No posts found </FallBack>;

    return (
        <main className="main-container max-w-[800px]">
            <Button
                variant="link"
                nativeButton={false}
                render={<Link to={`/posts/${id}`}>Back</Link>}
            />
            <Card className="">
                <CardHeader>
                    <CardTitle>Edit Post </CardTitle>
                </CardHeader>
                <form className="space-y-4">
                    <CardContent className="space-y-4">
                        <InputField
                            label="Title"
                            name="title"
                            placeholder="Enter title"
                        />
                        <TextAreaField
                            label="Body"
                            name="body"
                            placeholder="Enter body"
                        />
                    </CardContent>
                    <CardFooter className="space-x-2 flex justify-end">
                        <Button type="button" variant="outline">
                            Cancel
                        </Button>
                        <Button type="submit"> Save </Button>
                    </CardFooter>
                </form>
            </Card>
        </main>
    );
};

export default EditPostPage;
