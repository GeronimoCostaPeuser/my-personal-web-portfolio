import React from 'react';

const Navigation = () => {
	const path = window.location.pathname
	return (
		<nav className="nav">
			<ul>
				<li className="active">
					<a href="/">Home</a>
				</li>
				<li className="active">
					<a href="/projects">Projects</a>
				</li>
				<li className="active">
					<a href="/blog">Blog</a>
				</li>
				<li className="active">
					<a href="/certificates">Certificates</a>
				</li>
				<li className="active">
					<a href="/contactme">Contact</a>
				</li>
			</ul>
		</nav>
		)
}

export default Navigation;