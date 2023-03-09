import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Footer from './components/Footer';

function App() {
	return (
		<div className="flex w-full h-screen bg-gradient-to-r bg-gray-100 relative">
			<div className="w-full">
				<Header/>
				<Form />
				<Footer/>	
			</div>
		</div>
	);
}

export default App;
