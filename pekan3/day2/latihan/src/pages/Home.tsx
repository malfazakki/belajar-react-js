import useUser from "../hooks/useUser";

export default function Home() {
	const { username, handleLogout } = useUser();

	return (
		<>
			<main className='min-h-screen bg-gray-100 flex items-center justify-center'>
				<div>
					<h1 className='text-3xl text-gray-700 font-medium'>
						Welcome, <span className='font-bold'>{username}</span>
					</h1>

					<div className='flex justify-center mt-5'>
						<form onSubmit={handleLogout}>
							<button className='bg-red-500 px-5 py-2 rounded-md text-white cursor-pointer hover:bg-red-600 active:bg-red-700'>
								Logout
							</button>
						</form>
					</div>
				</div>
			</main>
		</>
	);
}
