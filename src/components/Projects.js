import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';

const styles = {
	container: {
		margin: 16,
		padding: 16,
	},
};

const PRIVATEREPO = 'available upon request';
const NA = '-';

const projects = [
	{ name: "Dashboard", description: "enterprise solution for Pacific-le", stack: 'Rails, React', source: PRIVATEREPO, demo: NA },
	{ name: "Path finder", description: "A* search simulator", stack: 'React, JavaScript', source: 'https://github.com/kennethy/path-finder', demo: 'https://kennethy.github.io/path-finder/' },
	{ name: "Todo API", description: "simple API", stack: 'Rails', source: 'https://github.com/kennethy/todos-api', demo: NA },
	{ name: "Loomap", description: "interactive campus map", stack: 'React, Google Maps API', source: PRIVATEREPO, demo: NA },
	{ name: "Co-manned", description: "mobile game", stack: 'C#, Unity3D Networking API', source: PRIVATEREPO, demo: NA },
	{ name: "Tic-Tac-Toe Online", description: "real-time client", stack: 'Node.js, Socket.io', source: 'https://github.com/kennethy/tictactoe/', demo: 'https://kennethy-tictactoe.herokuapp.com/' },
];

const Projects = () => {
	return (
		<Paper style={styles.container} zDepth={1}>
			<Table>
				<TableHeader adjustForCheckbox={false} displaySelectAll={false}>
					<TableRow>
						<TableHeaderColumn style={{ textAlgin: 'right' }}>Project</TableHeaderColumn>
	        			<TableHeaderColumn>Description</TableHeaderColumn>
	        			<TableHeaderColumn>Stack</TableHeaderColumn>
	        			<TableHeaderColumn>Source</TableHeaderColumn>
	        			<TableHeaderColumn>Demo</TableHeaderColumn>
					</TableRow>
				</TableHeader>
				<TableBody displayRowCheckbox={false}>
					{projects.map((project, index) => {
						console.log(project);
						return (
							<TableRow key={index}>
								{Object.keys(project).map((prop) => {
									let col = project[prop];
									if ((prop === 'source' || prop === 'demo') && (col !== '-' && col !== 'available upon request'))
										col = <a target='_blank' href={col}>Link</a> 
									return (
										<TableRowColumn>
											{col}
										</TableRowColumn>
									);
								})}
							</TableRow>
						)
					})}
				</TableBody>
			</Table>
		</Paper>
	)
}

export default Projects;