import { useState } from 'react';

const Form = () => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Form submitted');
	};

	return (
		<div className="md:w-1/2 lg:w-2/5">
			
			
			<form onSubmit={handleSubmit} className="bg-gray-100 shadow-md rounded-lg p-10">
			<h2 className="font-bold text-5xl text-justify text-blue-900">
				Expertics {""}
					<div className="text-gray-500 text-xl pb-8 text-left">Punto de Venta.</div>
			</h2>

			<p className="mt-3 mb-4 font-bold text-sm text-blue-900 text-start">Ingresa usuario y contraseña.</p>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2 text-justify" htmlFor="email">
						Email.
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="email"
						type="text"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2 text-justify" htmlFor="contraseña">
						Contraseña.
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="contraseña"
						type="password"
						placeholder="Contraseña"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<input
					type="submit"
					className="bg-blue-900 w-1/3 mt-9 p-3 text-white font-bold rounded hover:bg-blue-700 transition-opacity duration-300 cursor-pointer"
					value={'Ingresar'}
				/>
			</form>
		</div>
	);
};

export default Form;
