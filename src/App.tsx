import './stylesheets/style.scss'
import Header from './app/shared/components/Header';
import Footer from './app/shared/components/Footer';
import Home from './app/pages/home/Home';


function App() {
  return (
    <>
      <Header/>
      <Home/>
      <Footer/>
    </>
  );
}

export default App;
