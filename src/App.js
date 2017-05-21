import React, { Component } from 'react';
import { Radar as RadarChart } from 'react-chartjs-2';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const styles = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		flex: 1,
		height: '100vh',
	},
	header: {
		display: 'flex',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: '2.5em',
		color: 'rgba(0, 0, 0, 0.87)',
		borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
		backgroundColor: '#ffffff',
		padding: 16,
	},
	body: {
		display: 'flex',
		flex: 10,
		padding: 16,
		justifyContent: 'center',
		color: 'rgba(0, 0, 0, 0.87)',
		fontSize: '1.1em',
	},
	footer: {
		display: 'flex',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: '0.8em',
		color: 'rgba(0, 0, 0, 0.38)',
	}
};

export default class App extends Component {


	render() {
		const data = {
			labels: ['HTML/CSS', 'Java', 'JavaScript', 'React', 'Ruby on Rails'],
			datasets: [
				{
					backgroundColor: 'rgba(255,99,132,0.2)',
		      borderColor: 'rgba(255,99,132,1)',
		      pointBackgroundColor: 'rgba(255,99,132,1)',
		      pointBorderColor: '#fff',
		      pointHoverBackgroundColor: '#fff',
		      pointHoverBorderColor: 'rgba(255,99,132,1)',
					data: [5, 4, 4, 3, 5],
				}
			],
		};

		const options = {
			tooltip: {
				enabled: false,
			},
			legend: {
				display: false,
			},
			scale: {
				responsive: true,
				ticks: {
					beginAtZero: true,
					min: 0,
					max: 5,
					stepSize: 1,
				}
			}
		}

		return (
			<div style={styles.container}>
				<div style={styles.header}>
					<b>Hey, I{'\''}m Kenneth</b>
				</div>
				<div style={styles.body}>
					<div>
						<RadarChart height="400" width="420" data={data} options={options} />
					</div>
				</div>
				<div style={styles.footer}>
					<span className="glyphicon glyphicon-flash"></span>
					{' '}
					YHY
				</div>
			</div>
		);
	}
}


