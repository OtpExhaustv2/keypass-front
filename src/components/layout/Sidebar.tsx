import React from 'react';
import { SidebarContainer, SidebarTitle } from 'src/utils/styles';

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
	return (
		<SidebarContainer>
			<SidebarTitle>KeyPass</SidebarTitle>
		</SidebarContainer>
	);
};

export default Sidebar;
