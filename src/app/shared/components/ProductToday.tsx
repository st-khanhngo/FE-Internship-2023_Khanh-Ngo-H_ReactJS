import React from 'react';
import ProductList from './ProductList';

const ProductToday = () => {
	return (
		<section className='section section-product'>
			<div className='container'>
				<div className='section-header'>
					<h3 className='section-title txt-center'>Products in today</h3>
					<ProductList />
				</div>
			</div>
		</section>
	);
};

export default ProductToday;
