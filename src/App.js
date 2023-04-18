import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EasyTask1 from './components/EasyTask1';
import EasyTask2 from './components/EasyTask2';
import EasyTask3 from './components/EasyTask3';
import Home from './components/Home';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/task1"
					element={<EasyTask1 />}
				/>
				<Route
					path="/task2"
					element={<EasyTask2 />}
				/>
				<Route
					path="/task3"
					element={<EasyTask3 />}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
