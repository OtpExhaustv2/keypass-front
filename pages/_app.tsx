import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Layout from 'src/components/layout';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: false,
		},
	},
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
}
