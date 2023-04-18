import React from 'react';
import { Link } from 'react-router-dom';

export let stylee = {
	border: 'none',
	padding: '12px',
	color: 'white',
	borderRadius: '10px',
	backgroundColor: 'blue',
	margin: '5px',
	cursor: 'pointer',
};

const Home = () => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				marginTop: '50px',
			}}
		>
			<Link to="task1">
				<button style={stylee}>Easy level - Task 1</button>
			</Link>
			<Link to="task2">
				<button style={stylee}>Easy level - Task 2</button>
			</Link>
			<Link to="task3">
				<button style={stylee}>Easy level - Task 3</button>
			</Link>
		</div>
	);
};

export default Home;
