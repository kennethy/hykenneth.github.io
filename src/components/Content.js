import React from 'react';
import { Radar as RadarChart } from 'react-chartjs-2';
import Paper from 'material-ui/Paper';
import Projects from './Projects';

const styles = {
	content: {
		display: 'flex',
		flexDirection: 'column',
		padding: 16,
		justifyContent: 'center',
		alignItems: 'center',
		color: 'rgba(0, 0, 0, 0.87)',
		fontSize: '1.1em',
	},
	description: {
		margin: 20,
		padding: 16,
	},
};

const data = {
	labels: ['Java', 'Ruby', 'JavaScript', 'C/C++', 'HTML/CSS'],
	datasets: [
		{
			label: 'Languages',
			backgroundColor: 'rgba(63, 81, 181,0.2)',
			borderColor: 'rgba(63, 81, 181,1)',
			pointBackgroundColor: 'rgba(255,99,132,1)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgba(63, 81, 181,1)',
			data: [5, 4, 4, 2, 4],
		}
	],
};

const options = {
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

export default function Content() {
	return (
		<div style={styles.content}>
			<Paper style={styles.description} zDepth={1} >
				<b>Brief intro</b>: <br />
				I am a recent computer science graduate from UWaterloo. I enjoy solving algorithmic problems and building things for fun! I am interested in software engineering roles, and I am seeking for full-time opportunities! :D
				<br /><br />
			</Paper>
			<Projects />
			{ /* <div>
				<RadarChart height={400} width={420} data={data} options={options} />
			</div> */ }
		</div>
);
}
