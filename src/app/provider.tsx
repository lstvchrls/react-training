import queryClient from '@/config/query-client';
import { QueryClientProvider } from '@tanstack/react-query';
import type { ReactNode } from 'react';

export const AppProvider = ({ children }: { children: ReactNode }) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};
