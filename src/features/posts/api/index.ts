import api from '@/config/axios-client';
import type { IPost, PostQueryParams } from '../types';

const postsApi = {
    list: (params?: PostQueryParams) => api.get<IPost[]>('/posts', { params }),
    details: (id?: number) => api.get<IPost[]>('/posts', { params: { id } }),
};

export default postsApi;
