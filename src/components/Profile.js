import React from 'react';
import { Header, Content, Footer } from './';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
	container: {
		display: 'flex',
		flexDirection: 'column',
	},
};

export default function Profile() {
	return (
		<div style={styles.container}>
			<Header />
			<Content />
		</div>
	);
}