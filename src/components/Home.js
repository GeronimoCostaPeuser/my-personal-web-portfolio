import React from 'react';
import projectImage from './RoboFriends.png';

const Home = () => {
	return (
		<div className="hbox">
			<div className="hbox1">
				<h1>Full Stack Web Developer</h1>	
			</div>
			<div className="hbox2">
				
				<div className="aboutCard">
					<div className="aboutHeading">
						<h1>About</h1>
					</div>
					<div className="aboutDescription">
						<p>
						I am always eager to dive into new technologies and programming languages, constantly expanding my knowledge and staying ahead of the latest industry trends. I approach each opportunity as a chance to grow as a developer and create something truly impactful.
						</p>
					</div>
				</div>

				<div className="projectsCard">
					<div className="hbox221">
						<h1>Projects</h1>
					</div>
					<div className="hbox222">
						
						<div className="p-image">
							<img className="image" src={projectImage} alt="project pic" />
						</div>
						
						<div className="projectDescription">
							<p>
								Introducing RoboFriends - A dynamic and user-friendly website that allows you to search for your favorite robots with ease updating after every letter! 
								The RoboFriends website utilizes a REST API to fetch data on robots.
							</p>
						</div>

					</div>
					
					<div className="p-links">
						<a href="https://geronimocostapeuser.github.io/robofriends/">Project</a>
						<a href="https://github.com/GeronimoCostaPeuser/robofriends">Source Code</a>
					</div>
					
				</div>

				<div className="skillsCard">
					
					<div className="skillsHeading">
						<h1>Skills</h1>
					</div>
					
					<div className="skillsDescription">
						<ul>
							<li>JavaScript</li>
							<li>HTML/CSS</li>
							<li>React</li>
							<li>Node.js</li>
							<li>SQL</li>
							<li>Git</li>
						</ul>
					</div>
					
				</div>

				<div className="blogCard">
					
					<div className="blogHeading">
						<h1>Blog</h1>
					</div>

					<div className="blogDescription">
						<h2>Coming Soon!</h2>
					</div>

				</div>

			</div>
		</div>
		)
}

export default Home;