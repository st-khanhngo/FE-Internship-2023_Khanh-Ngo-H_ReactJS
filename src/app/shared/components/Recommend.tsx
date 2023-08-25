import React from 'react';
import ProductList from './ProductList';

const Recommend = () => {
	return (
		<section className='section section-recommend'>
			<div className='container'>
				<div className='section-header flex'>
					<h3 className='section-title'>Selected just for you</h3>
					<a
						className='section-link btn btn-outline-info'
						href=''
					>
						SHOW MORE
					</a>
				</div>
				<section className='section section-product'>
					<div className='container'>
						<ProductList />
					</div>
				</section>
			</div>
		</section>
	);
};

export default Recommend;
