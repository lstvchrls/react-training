import postsApi from '../../api';
import { useQuery } from '@tanstack/react-query';
import type { PostQueryParams } from '../../types';

export const useGetPostListQuery = (params?: PostQueryParams) => {
    return useQuery({
        queryKey: ['posts', params],
        queryFn: async () => {
            const { data } = await postsApi.list(params);
            return data;
        },
    });
};

export const useGetPostDetailsQuery = (id?: number) => {
    return useQuery({
        queryKey: ['posts', id],
        queryFn: async () => {
            const { data } = await postsApi.details(id);
            return data[0];
        },
        enabled: !!id,
    });
};
