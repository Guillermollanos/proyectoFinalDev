import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faInstagram,
	faFacebook,
	faTwitter,
	faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
	return (
		<footer>
			<div className='footer-columns'>
				<div className='column'>
					<h4>Columna 1</h4>
					<ul>
						<li>
							<a href='#'>Enlace 1</a>
						</li>
						<li>
							<a href='#'>Enlace 2</a>
						</li>
						<li>
							<a href='#'>Enlace 3</a>
						</li>
					</ul>
				</div>
				<div className='column'>
					<h4>Columna 2</h4>
					<div className='sub-columns'>
						<div>
							<ul>
								<li>
									<a href='#'>Enlace 1</a>
								</li>
								<li>
									<a href='#'>Enlace 2</a>
								</li>
							</ul>
						</div>
						<div>
							<ul>
								<li>
									<a href='#'>Enlace 3</a>
								</li>
								<li>
									<a href='#'>Enlace 4</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className='column'>
					<h4>Columna 3</h4>
					<div className='social-icons'>
						<a href='https://www.instagram.com'>
							<FontAwesomeIcon icon={faInstagram} />
						</a>
						<a href='https://www.facebook.com'>
							<FontAwesomeIcon icon={faFacebook} />
						</a>
						<a href='https://www.twitter.com'>
							<FontAwesomeIcon icon={faTwitter} />
						</a>
						<a href='https://www.linkedin.com'>
							<FontAwesomeIcon icon={faLinkedin} />
						</a>
					</div>
					<div className='contact-info'>
						<p>Teléfono: 123456789</p>
						<p>Email: info@example.com</p>
					</div>
					<div className='qr-code'>
						<img src='/path/to/qr-code.png' alt='QR Code' />
					</div>
				</div>
			</div>
			<div className='footer-bottom'>
				<p>© 2023 Nombre de la Empresa. Todos los derechos reservados.</p>
			</div>
		</footer>
	);
};

export default Footer;
