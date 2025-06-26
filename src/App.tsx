import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import IncrementButton from 'react_remote/IncrementButton';

const App = () => (
	<div className="mt-10 text-3xl mx-auto max-w-6xl">
		<div>Name: react-host</div>
		<div>Framework: react-18</div>

		<IncrementButton />
	</div>
);

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement);
root.render(<App />);
