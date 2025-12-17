import { useMutation } from '@tanstack/react-query';
import postsApi from '../../api';
import type { IPostFormData } from '../../schema';
import queryClient from '@/config/query-client';

export const useCreatePostMutation = () => {
    return useMutation({
        mutationFn: (payload: IPostFormData) => postsApi.create(payload),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['posts'],
                exact: false,
            });
        },
    });
};

export const useUpdatePostMutation = () => {
    return useMutation({
        mutationFn: ({ id, payload }: { id: number; payload: IPostFormData }) =>
            postsApi.update(id, payload),
        onSuccess: (_data, variables) => {
            queryClient.invalidateQueries({
                queryKey: ['posts', variables.id],
            });
        },
    });
};
