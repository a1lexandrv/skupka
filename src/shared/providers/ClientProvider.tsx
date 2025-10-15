import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from '@/config/query-client';

export function ClientProvider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
