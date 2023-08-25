import Banner from '../../shared/components/Banner'
import Recommend from '../../shared/components/Recommend'
import Highlight from '../../shared/components/Highlight'
import Information from '../../shared/components/Information'
import ProductList from '../../shared/components/ProductList'
import Subscribe from '../../shared/components/Subscribe'

const Home = () => {
  return (
    <main>
      <div className="home-page">
      <Banner/>
      <Highlight/>
      <Recommend/>
      <Information/>
      <ProductList/>
      <Subscribe/>
      </div>
    </main>
  )
}

export default Home
