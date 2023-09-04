import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Footer, Header } from './app/shared/components/layout';
import { routePaths } from './app.routes';
import './stylesheets/style.scss';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {routePaths.map((route) => (
          <Route key={route.id} path={route.path} element={<route.element />} />
        ))}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
