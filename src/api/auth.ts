import { useMutation, useQuery } from 'react-query';
import { User } from 'src/types/types';
import { axios, setLocalStorage } from 'src/utils';

export type LoginParams = {
	username: string;
	password: string;
};

export type RegisterParams = {
	email: string;
	username: string;
	password: string;
};

export const useLogin = () =>
	useMutation(
		(data: LoginParams) =>
			axios.post<{ access_token: string }>('/auth/login', data),
		{
			onSuccess(data) {
				setLocalStorage('token', data.data.access_token);
			},
		}
	);

export const useRegister = () =>
	useMutation((data: RegisterParams) =>
		axios.post<User>('/auth/register', data)
	);

export const useMe = () =>
	useQuery('me', () => axios.get<User>('/users/me'), {
		select(data) {
			return data.data;
		},
	});
