import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faSearch } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
	const [searchVisible, setSearchVisible] = useState(false);
	const [searchValue, setSearchValue] = useState('');

	const handleSearchClick = () => {
		setSearchVisible(true);
	};

	const handleSearchChange = (event) => {
		setSearchValue(event.target.value);
	};

	const handleSearchSubmit = (event) => {
		event.preventDefault();
		// Aquí puedes hacer algo con el valor de búsqueda, por ejemplo, enviarlo a una API o realizar alguna acción
		console.log('Valor de búsqueda:', searchValue);
		setSearchValue('');
	};

	return (
		<header>
			<div className='social-icons'>
				<a href='https://www.instagram.com'>
					<FontAwesomeIcon icon={faInstagram} />
				</a>
				<a href='https://www.facebook.com'>
					<FontAwesomeIcon icon={faFacebook} />
				</a>
				<a href='mailto:example@example.com'>
					<FontAwesomeIcon icon={faEnvelope} />
				</a>
			</div>

			<div className='logo'>
				<img src='/path/to/logo.png' alt='Logo' />
			</div>
			<div className='search'>
				{!searchVisible ? (
					<button onClick={handleSearchClick}>
						<FontAwesomeIcon icon={faSearch} />
					</button>
				) : (
					<form onSubmit={handleSearchSubmit}>
						<input
							type='text'
							value={searchValue}
							onChange={handleSearchChange}
							placeholder='CONSULTAR'
						/>
						<button type='submit'>
							<FontAwesomeIcon icon={faSearch} />
						</button>
					</form>
				)}
			</div>
		</header>
	);
};

export default Header;
