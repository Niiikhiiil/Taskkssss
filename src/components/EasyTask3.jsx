import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { stylee } from './Home';

// const QUOTES_URL = 'https://api.api-ninjas.com/v1/quotes';
const QUOTES_URL = 'https://api.quotable.io/random';

const EasyTask3 = () => {
	const [quote, setQuote] = useState('');
	const handleButton = async () => {
		let i = await axios.get(QUOTES_URL);
		setQuote(i.data.content);
	};
	return (
		<div>
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
				<span style={{ fontWeight: '700' }}>Task3:</span>
				Random Quote Generator: Develop an app that displays a random
				quote on the screen every time the user clicks a button.
			</div>
			<div>{quote}</div>
			<button
				onClick={() => handleButton()}
				style={{
					border: 'none',
					borderRadius: '10px',
					color: 'white',
					backgroundColor: 'purple',
					padding: '10px',
					margin: '5px',
					cursor: 'pointer',
				}}
			>
				Generate Random Quote
			</button>
		</div>
	);
};

export default EasyTask3;
