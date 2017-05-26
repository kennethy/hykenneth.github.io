import React from 'react';

const styles = {
	footer: {
		display: 'flex',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: '0.8em',
		color: 'rgba(0, 0, 0, 1)',
	}
};

export default function Footer() {
	return (
		<div style={styles.footer}>
			<span className="glyphicon glyphicon-flash"></span>
			{' '}
			YHY
		</div>
	);
}
