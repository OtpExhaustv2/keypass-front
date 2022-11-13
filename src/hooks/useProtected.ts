import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const useProtected = () => {
	const router = useRouter();

	useEffect(() => {
		if (!localStorage.getItem('token')) {
			router.push('/login');
		}
	}, [router]);
};
