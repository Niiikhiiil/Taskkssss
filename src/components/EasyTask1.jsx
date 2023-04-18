import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { stylee } from './Home';

const EasyTask1 = () => {
	const [input, setInput] = useState('');
	const [todoArray, setTodoArray] = useState([]);
	const [error, setError] = useState('');

	const handleAdd = () => {
		if (input !== '' && input !== null) {
			let q = {
				id: uuidv4(),
				todo: input,
				check: false,
			};
			setTodoArray([...todoArray, q]);
			setInput('');
			setError('');
		} else {
			setError('Please Enter valid data');
		}
	};
	const handleCheckBox = (id, check) => {
		let q = [...todoArray];

		q.map((w) => {
			if (w.id === id) {
				w.check = !check;
			}
		});
		setTodoArray([...q]);
	};

	const handleDelete = (id) => {
		let q = todoArray.filter((e) => e.id !== id);
		setTodoArray([...q]);
	};
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
				<span style={{ fontWeight: '700' }}>Task1:</span>
				Simple Todo List: Create a simple todo list app where users can
				add tasks, mark them as completed, and delete them.
			</div>
			<div>
				<input
					style={{
						border: 'none',
						padding: '5px',
						backgroundColor: 'purple',
						color: 'white',
						borderRadius: '10px',
					}}
					type="text"
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
				{error}
				<button
					style={{
						border: 'none',
						padding: '5px 7px',
						backgroundColor: 'blue',
						color: 'white',
						borderRadius: '10px',
					}}
					onClick={() => handleAdd()}
				>
					Add
				</button>
			</div>
			<table style={{ marginTop: '10px' }}>
				<thead>
					<tr>
						<th>#</th>
						<th>Completed</th>
						<th>Todo</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{todoArray.map((t, i) => {
						return (
							<tr key={uuidv4()}>
								<td>{i + 1}</td>
								<td>
									<input
										type="checkbox"
										checked={t.check}
										onChange={() =>
											handleCheckBox(t.id, t.check)
										}
									/>
								</td>
								<td>{t.todo}</td>
								<td>
									<button
										style={{
											color: 'white',
											backgroundColor: 'red',
											border: 'none',
											padding: '5px',
											borderRadius: '10px',
										}}
										onClick={() => handleDelete(t.id)}
									>
										DELETE
									</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default EasyTask1;
