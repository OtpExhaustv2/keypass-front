import Head from 'next/head';
import React from 'react';
import { DarkTheme, LightTheme } from 'src/utils';
import { GlobalStyles, Main, MainContainer } from 'src/utils/styles';
import { SelectableTheme } from 'src/utils/types';
import { ThemeProvider } from 'styled-components';
import Sidebar from './Sidebar';

type LayoutProps = {
	children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
	// const storedTheme = getLocalStorage('theme') as SelectableTheme;
	const storedTheme = 'light' as SelectableTheme;
	return (
		<ThemeProvider
			theme={
				storedTheme
					? storedTheme === 'dark'
						? DarkTheme
						: LightTheme
					: DarkTheme
			}>
			<Head>
				<title>Keypass</title>
				<meta name='description' content='Keypass' />
			</Head>
			<GlobalStyles />

			<MainContainer>
				<Sidebar />
				<Main>{children}</Main>
			</MainContainer>
		</ThemeProvider>
	);
};

export default Layout;
