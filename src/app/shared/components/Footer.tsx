import logo from '../../../assets/images/shop-logo.png';

export const Footer = () => {
	return (
		<footer className='footer'>
			<div className='container'>
				<div className='footer-content row'>
					<div className='footer-detail col col-6 col-sm-12'>
						<img
							className='img img-logo'
							src={logo}
							alt='Logo'
						/>
						<p className='footer-detail-desc'>
							House My Brand designs clothing for the young, the old &everyone in
							between – but most importantly, for the fashionable
						</p>
						<ul className='social-list flex'>
							<li className='social-item'>
								<a
									className='social-link'
									href='/'
								>
									<i className='icon icon-facebook'></i>
								</a>
							</li>
							<li className='social-item'>
								<a
									className='social-link'
									href='/'
								>
									<i className='icon icon-twitter'></i>
								</a>
							</li>
							<li className='social-item'>
								<a
									className='social-link'
									href='/'
								>
									<i className='icon icon-linkedin'></i>
								</a>
							</li>
							<li className='social-item'>
								<a
									className='social-link'
									href='/'
								>
									<i className='icon icon-instagram'></i>
								</a>
							</li>
							<li className='social-item'>
								<a
									className='social-link'
									href='/'
								>
									<i className='icon icon-youtube'></i>
								</a>
							</li>
						</ul>
					</div>

					<ul className='footer-nav col col-6 row'>
						<li className='footer-nav-col col col-4 col-sm-12'>
							<p className='title'>Shopping online</p>
							<ul className='footer-nav-list'>
								<li className='item'>
									<a
										className='link'
										href='/'
									>
										Order Status
									</a>
								</li>
								<li className='item'>
									<a
										className='link'
										href='/'
									>
										Shipping and Delivery
									</a>
								</li>
								<li className='item'>
									<a
										className='link'
										href='/'
									>
										Returns
									</a>
								</li>
								<li className='item'>
									<a
										className='link'
										href='/'
									>
										Order Status
									</a>
								</li>
								<li className='item'>
									<a
										className='link'
										href='/'
									>
										Order Status
									</a>
								</li>
							</ul>
						</li>
						<li className='footer-nav-col col col-4 col-sm-12'>
							<p className='title'>Information</p>
							<ul className='footer-nav-list'>
								<li className='item'>
									<a
										className='link'
										href='/'
									>
										Gift Cards
									</a>
								</li>
								<li className='item'>
									<a
										className='link'
										href='/'
									>
										Find a store
									</a>
								</li>
								<li className='item'>
									<a
										className='link'
										href='/'
									>
										Newsletter
									</a>
								</li>
								<li className='item'>
									<a
										className='link'
										href='/'
									>
										Become a mesmer
									</a>
								</li>
								<li className='item'>
									<a
										className='link'
										href='/'
									>
										Site feedback
									</a>
								</li>
							</ul>
						</li>
						<li className='footer-nav-col col col-4 col-sm-12'>
							<p className='title'>Contact</p>
							<ul className='footer-nav-list'>
								<li className='item'>
									<p>store@uikit.com</p>
								</li>
								<li className='item'>
									<p>Hotline: +1 131 138 138</p>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>

			<div className='footer-end'>
				<p className='copyright txt-center'>
					DESIGN BY ICEO.CO - © 2019. ALL RIGHTS RESERVED.
				</p>
			</div>
		</footer>
	);
};
