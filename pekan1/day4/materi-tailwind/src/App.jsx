function App() {
	const menus = [
		{
			name: "Home",
			url: "/home",
		},
		{
			name: "About",
			url: "/home",
		},
		{
			name: "Contact",
			url: "/home",
		},
	];

	const linkStyle =
		"md:text-7xl xl:text-9xl md: text-amber-200 xl:text-white hover:text-amber-600 hover:cursor-pointer transition-colors duration-100 ";

	return (
		<>
			<main className='bg-blue-950 h-[100vh] w-full pt-[50px]'>
				<nav className='flex justify-center'>
					<ul className='flex gap-[100px]'>
						{menus.map((menu) => (
							<li key={menu.url} className={linkStyle}>
								{menu.name}
							</li>
						))}
					</ul>
				</nav>
			</main>
		</>
	);
}

export default App;
