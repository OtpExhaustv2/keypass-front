import { useMutation, useQuery, useQueryClient } from 'react-query';
import { CategoryWithPasswords } from 'src/types/types';
import { axios } from 'src/utils';

export const useCategories = () =>
	useQuery('categories', () =>
		axios.get<CategoryWithPasswords[]>('/categories')
	);

export const useCategory = (id: number) =>
	useQuery(['category', id], () =>
		axios.get<CategoryWithPasswords>(`/categories/${id}`)
	);

export const useCreateCategory = () => {
	const queryClient = useQueryClient();

	return useMutation((name: string) => axios.post('/categories', { name }), {
		onSuccess: () => {
			queryClient.invalidateQueries('categories');
		},
	});
};
