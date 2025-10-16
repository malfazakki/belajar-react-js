import useUser from "../hooks/useUser";

export default function Login() {
	const { handleSubmit, username, handleChangeUsername, password, handleChangePassword } = useUser();

	return (
		<>
			<main className='min-h-screen flex justify-center items-center flex-grow bg-gray-100'>
				<section className='border-[1px] border-gray-300 p-10 shadow-md rounded-md bg-white min-w-[600px] grid gap-7'>
					<h1 className='text-3xl font-semibold text-gray-700 text-center'>Login Page</h1>

					<form className='grid gap-5' onSubmit={handleSubmit}>
						<div className='grid gap-1'>
							<label htmlFor='username' className='text-lg'>
								Username
							</label>
							<input
								type='text'
								id='username'
								placeholder='Input your username...'
								className='border-[1px] border-gray-300 rounded-md p-2 focus:outline-gray-500 focus:shadow-sm'
								value={username}
								onChange={handleChangeUsername}
							/>
						</div>

						<div className='grid gap-1'>
							<label htmlFor='password' className='text-lg'>
								Password
							</label>
							<input
								type='password'
								id='password'
								placeholder='*************'
								className='border-[1px] border-gray-300 rounded-md p-2 focus:outline-gray-500 focus:shadow-sm'
								value={password}
								onChange={handleChangePassword}
							/>
						</div>

						<div className='flex justify-end'>
							<button
								type='submit'
								className='bg-blue-500 px-5 py-2 rounded-md text-white cursor-pointer hover:bg-blue-600 active:bg-blue-700'
							>
								Login
							</button>
						</div>
					</form>
				</section>
			</main>
		</>
	);
}
