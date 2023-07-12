import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faHome,
	faHeart,
	faShoppingCart,
	faEnvelope,
	faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons';

export const NavSticky = () => {
	return (
		<nav className='nav-sticky'>
			<ul>
				<li>
					<a href='#'>
						<FontAwesomeIcon icon={faHome} />
						<span>Home</span>
					</a>
				</li>
				<li>
					<a href='#'>
						<FontAwesomeIcon icon={faEnvelope} />
						<span>Contacto</span>
					</a>
				</li>
				<li>
					<a href='#'>
						<FontAwesomeIcon icon={faHeart} />
						<span>Favoritos</span>
						<span className='badge'>3</span>
					</a>
				</li>
				<li>
					<a href='#'>
						<FontAwesomeIcon icon={faShoppingCart} />
						<span>Carrito</span>
						<span className='badge'>5</span>
					</a>
				</li>
			</ul>
			<div className='help-icon'>
				<a href='#'>
					<FontAwesomeIcon icon={faQuestionCircle} />
				</a>
			</div>
		</nav>
	);
};

export default NavSticky;
