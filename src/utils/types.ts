export type User = {
	id: number;
	email: string;
	username: string;
	createdAt: Date;
	updatedAt: Date;
};

export type Password = {
	id: number;
	title: string;
	username: string;
	password: string;
	url: string;
	cmt?: string;
	categoryId: number;
};

export type Category = {
	id: number;
	name: string;
};

export type CategoryWithPasswords = Category & { passwords: Password[] };

export type SelectableTheme = 'light' | 'dark';
