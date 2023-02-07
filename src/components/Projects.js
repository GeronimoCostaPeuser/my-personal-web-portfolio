import React from 'react';
import projectImage1 from './robofriends169.png';
import projectImage2 from './webport169.png';

const Projects = () => {
	return (
		
		<div className="projectsBox">
			
			<div className="projectsTitle">
				<h1>Projects</h1>
			</div>

			<div className="projectsContent">

				<div className="project1">

					<div className="project1Heading">
						<h1>RoboFriends</h1>
					</div>

					<div className="project1Content">

						<div className="project1image">	
							<img src={projectImage1} alt="project picture" />
						</div>

						<div className="project1Description">
							<p>
								Introducing RoboFriends - A dynamic and user-friendly website that allows you to search for your favorite robots with ease updating after every letter! 
								The RoboFriends website utilizes a REST API to fetch data on robots.
							</p>
						</div>

					</div>

					<div className="p1-links">
						<a href="https://geronimocostapeuser.github.io/robofriends/">Project</a>
						<a href="https://github.com/GeronimoCostaPeuser/robofriends">Source Code</a>
					</div>

				</div>

				<div className="project2">

					<div className="project2Heading">
						<h1>Portfolio</h1>
					</div>

					<div className="project2Content">

						<div className="project2image">	
							<img src={projectImage2} alt="project picture" />
						</div>
						
						<div className="project2Description">
							<p>
								A portfolio website built using HTML, CSS, JavaScript, React, and Node.js. 
								From the ground up, I created this website with a focus on user experience, incorporating smooth animations and a clean navigation bar. 
								To ensure that the website looks great on all devices, I made sure to design it with a responsive layout. 
							</p>
						</div>

					</div>

					<div className="p2-links">
						<a href="https://geronimocostapeuser.github.io/portfolio-website/">Project</a>
						<a href="https://github.com/GeronimoCostaPeuser/portfolio-website">Source Code</a>
					</div>

				</div>

			</div>

		</div>

		)
}

export default Projects;