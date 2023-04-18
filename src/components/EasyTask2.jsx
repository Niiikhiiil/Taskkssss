import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { stylee } from './Home';

const EasyTask2 = () => {
	const [counter, setCounter] = useState(0);
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<div>
				<Link to="/">
					<button style={stylee}>Home</button>
				</Link>
			</div>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					margin: '20px',
				}}
			>
				<span style={{ fontWeight: '700' }}>Task2:</span>
				Counter App: Build a basic counter app where users can increment
				or decrement a counter value.
			</div>
			<div style={{ marginTop: '10px' }}>{counter}</div>
			<div
				style={{
					marginTop: '10px',
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'space-between',
				}}
			>
				<button
					onClick={() => setCounter(counter + 1)}
					style={{
						border: 'none',
						borderRadius: '10px',
						color: 'white',
						backgroundColor: 'green',
						padding: '10px',
						margin: '5px',
						cursor: 'pointer',
					}}
				>
					Increment
				</button>
				<button
					onClick={() => {
						if (counter !== 0) {
							setCounter(counter - 1);
						}
					}}
					style={{
						border: 'none',
						borderRadius: '10px',
						color: 'white',
						backgroundColor: 'red',
						padding: '10px',
						margin: '5px',
						cursor: 'pointer',
					}}
				>
					Decrement
				</button>
			</div>
		</div>
	);
};

export default EasyTask2;
