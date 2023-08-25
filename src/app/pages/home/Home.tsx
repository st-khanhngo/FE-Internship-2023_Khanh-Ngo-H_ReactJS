import Banner from '../../shared/components/Banner';
import Recommend from '../../shared/components/Recommend';
import Highlight from '../../shared/components/Highlight';
import Information from '../../shared/components/Information';
import Subscribe from '../../shared/components/Subscribe';
import ProductToday from '../../shared/components/ProductToday';
import Footer from '../../shared/components/Footer';
import Header from '../../shared/components/Header';

const Home = () => {
	return (
		<main>
			<div className='home-page'>
				<Header props={''} />
				<Banner />
				<Highlight />
				<Recommend />
				<Information />
				<ProductToday />
				<Subscribe />
				<Footer />
			</div>
		</main>
	);
};

export default Home;
