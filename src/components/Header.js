import React from 'react';
import MenuIcon from 'react-material-icons/icons/navigation/menu';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FA from 'react-fontawesome';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';


const styles = {
	header: {
		backgroundColor: '#3f51b5',
		textAlign: 'center',
	},
};

const Menu = (props) => {

	const githubLink = 'https://github.com/kennethy';
	return (
		<IconMenu 
			{...props} 
			iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
			targetOrigin={{horizontal: 'right', vertical: 'top'}}
    		anchorOrigin={{horizontal: 'right', vertical: 'top'}}
		>  
			<MenuItem primaryText="Github" onClick={() => window.open(githubLink, '_blank')} />
		</IconMenu>
	)
};

Menu.muiName = 'IconMenu';

export default function Header() {
	return (
		<AppBar showMenuIconButton={false} style={styles.header} title="Kenneth Yang" iconElementRight={<Menu />} />
	);
}
