import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { NavSticky } from './components/NavSticky';

function App() {
	return (
		<div className='App'>
			<Header />
			<NavSticky />

			<Footer />
		</div>
	);
}

export default App;
