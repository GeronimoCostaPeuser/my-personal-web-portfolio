import React from 'react';
import certificate1 from './google43.png';
import certificate2 from './ztm43.png';

const Certificates = () => {
	return (

		<div className="certificatesBox">

			<div className="CertificateTitle">
				<h1>Certificates</h1>
			</div>
			
			<div className="certificates">
				
				<div className="certificate-1">
					<img src={certificate1} alt="project picture" />
				</div>

				<div className="certificate-2">
					<img src={certificate2} alt="project picture" />
				</div>

			</div>
		</div>

		)
}

export default Certificates;