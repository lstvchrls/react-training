import api from '@/config/axios-client';
import type { IPost, PostQueryParams } from '../types';
import type { IPostFormData } from '../schema';

const postsApi = {
    list: (params?: PostQueryParams) => api.get<IPost[]>('/posts', { params }),
    details: (id?: number) => api.get<IPost[]>('/posts', { params: { id } }),
    create: (data: IPostFormData) => api.post<IPost>('/posts', data),
    update: (id: number, payload: IPostFormData) =>
        api.put<IPost>(`/posts/${id}`, payload),
};

export default postsApi;
