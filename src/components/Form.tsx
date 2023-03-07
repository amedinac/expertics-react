import { useState } from 'react';

const Form = () => {
	const [ usuario, setUsuario ] = useState('');
	const [ password, setPassword ] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Form submitted');
		console.log(e.target[0].value);
	};

	return (
		<div className="md:w-1/2 lg:w-2/5 m-auto pt-60">
			
			
			<form onSubmit={handleSubmit} className="bg-gray-100 shadow-md rounded-lg p-10">
			<h2 className="font-bold text-5xl text-justify text-blue-900">
				Expertics {""}
					<div className="text-gray-500 text-xl pb-8 text-left">Point of Sale.</div>
			</h2>

				<div className="mb-4">
					<label className="block text-gray-700 text-lg font-bold mb-2 text-justify" htmlFor="usuario">
						User.
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="usuario"
						type="text"
						placeholder="@expertics.com.mx"
						value={usuario}
						onChange={(e) => setUsuario(e.target.value)}
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 text-lg font-bold mb-2 text-justify" htmlFor="contraseña">
						Password.
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="contraseña"
						type="password"
						placeholder="********"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<input
					type="submit"
					className="bg-blue-900 w-1/3 mt-9 p-3 float-right text-white font-bold rounded hover:bg-blue-700 transition-opacity duration-300 cursor-pointer"
					value={'Ingresar'}
				/>
			</form>
		</div>
	);
};

export default Form;
