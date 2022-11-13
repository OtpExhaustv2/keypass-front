import styled from 'styled-components';

export const SIDEBAR_WIDTH = 250;

export const Container = styled.div`
	padding: 1rem;
	height: 100vh;
`;

export const MainContainer = styled.div`
	display: flex;
	height: 100vh;
`;

export const Main = styled.div`
	flex: 1 0 auto;
`;

export const SidebarContainer = styled.header`
	display: flex;
	flex-direction: column;
	width: ${SIDEBAR_WIDTH}px;
	padding: 1rem;
	background: ${({ theme }) => theme.background.primary};
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
	overflow-y: auto;
	overflow-x: hidden;
`;

export const SidebarTitle = styled.h1`
	font-weight: 700;
	color: ${({ theme }) => theme.text.primary};
	text-align: center;
`;
