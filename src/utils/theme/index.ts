export type Theme = {
	text: {
		primary: string;
		secondary: string;
	};
	background: {
		primary: string;
		secondary: string;
	};
	scroll: string;
};

export const LightTheme: Theme = {
	background: {
		primary: '#C1C1C1',
		secondary: '#fff',
	},
	text: {
		primary: '#000',
		secondary: '#636363',
	},
	scroll: '#0b0b0b',
};

export const DarkTheme: Theme = {
	background: {
		primary: '#0b0b0b',
		secondary: '#111',
	},
	text: {
		primary: '#fff',
		secondary: '#5f5f5f',
	},
	scroll: '#C1C1C1',
};
