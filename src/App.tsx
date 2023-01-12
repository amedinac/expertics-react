import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';

function App() {
	return (
		<div className="flex w-full h-screen bg-gradient-to-tr from-violet-600 to-orange-400">
			<div className="w-full flex items-center justify-center">
				<Form />
			</div>
            {/*<div className="hidden relative lg:flex h-full w-1/2 items-center justify-center">
                <div className='w-60 h-60 bg-gradient-to-tr from-blue-900 to-white rounded-full'/>
                <div className='w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg'/>
			</div> */}
		</div>
	);
}

export default App;
