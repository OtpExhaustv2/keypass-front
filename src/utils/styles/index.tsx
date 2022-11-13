export * from './layout';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Roboto', sans-serif;
	}
	body {
		background: ${({ theme }) => theme.background.primary};
		color: ${({ theme }) => theme.text.primary};
	}

	::-webkit-scrollbar {
		background: transparent;
		width: 5px;
	}

	::-webkit-scrollbar-thumb {
		background: ${({ theme }) => theme.scroll};
		-webkit-border-radius: 1ex;
	}
`;
