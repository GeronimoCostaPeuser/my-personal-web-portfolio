import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { useCallback, useMemo } from 'react';

const ParticlesComponent = () => {
	const options = useMemo(() => {

		return {
			interactivity: {
		        events: {
		          onClick: {
		            enable: true, // enables the click event
		            mode: "push", // adds the particles on click
		          },
		          onHover: {
		            enable: true, // enables the hover event
		            mode: "repulse", // make the particles run away from the cursor
		          },
		        },
		        modes: {
		          push: {
		            quantity: 10, // number of particles to add on click
		          },
		          repulse: {
		            distance: 200, // distance of the particles from the cursor
		          },
		        },
		      },
			particles: {
				color: {
					value: "#000080",
				},
				links: {
					enable: true,
					color: {
						value: "#D3D3D3",
					},
				},
				move: {
					enable:true,
				},
				opacity: {
					value: {min: 0.3, max: 0.7 },
				},
				size: {
					value: {min: 1, max: 10 },
				}
			},
		};
	}, []);

	const particlesInit = useCallback((engine) => {
		loadSlim(engine);
	}, []);

	return <Particles init={particlesInit} options={options} />;
};

export default ParticlesComponent;