import { Banner, Highlight, Information, Product, Subscribe } from '.';
import { products } from '../../shared/services/data';

interface HomeProps {
  addToCart: Function;
}

const Home = ({ addToCart }: HomeProps) => {
  return (
    <main>
      <div className='home-page'>
        <Banner />
        <Highlight />
        <section className='section section-recommend'>
          <div className='container'>
            <div className='section-header flex'>
              <h3 className='section-title'>Selected just for you</h3>
              <a
                className='section-link btn btn-outline-info'
                href='/'
              >
                SHOW MORE
              </a>
            </div>
            <section className='section section-product'>
              <div className='container'>
                <ul className='product-list row'>
                  {products.map((product) => (
                    <Product
                      key={product.id}
                      product={product}
                      addToCart={addToCart}
                    />
                  ))}
                </ul>
              </div>
            </section>
          </div>
        </section>
        <Information />
        <section className='section section-product'>
          <div className='container'>
            <div className='section-header'>
              <h3 className='section-title txt-center'>Products in today</h3>
              <ul className='product-list row'>
                {products.map((product) => (
                  <Product
                    key={product.id}
                    product={product}
                    addToCart={addToCart}
                  />
                ))}
              </ul>
            </div>
          </div>
        </section>
        <Subscribe />
      </div>
    </main>
  );
};

export default Home;
