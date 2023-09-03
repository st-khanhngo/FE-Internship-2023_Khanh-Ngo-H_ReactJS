import { products } from '../../../shared/services/data';
import {
  Banner,
  Highlight,
  Information,
  Product,
  Subscribe,
} from '../components';
import { ProductItem } from '../../../models/product';
import { Link } from 'react-router-dom';

const Home = () => {
  const productList = products.map((prod) => new ProductItem(prod));
  return (
    <main>
      <div className="home-page">
        <Banner />
        <Highlight />
        <section className="section section-recommend">
          <div className="container">
            <div className="section-header flex">
              <h3 className="section-title">Selected just for you</h3>
              <Link className="section-link btn btn-outline-info" to="/">
                SHOW MORE
              </Link>
            </div>
            <section className="section section-product">
              <div className="container">
                <ul className="product-list row">
                  {productList.map((product) => (
                    <Product key={product.id} product={product} />
                  ))}
                </ul>
              </div>
            </section>
          </div>
        </section>
        <Information />
        <section className="section section-product">
          <div className="container">
            <div className="section-header">
              <h3 className="section-title txt-center">Products in today</h3>
            </div>
            <ul className="product-list row">
              {productList.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </ul>
          </div>
        </section>
        <Subscribe />
      </div>
    </main>
  );
};

export default Home;
