import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import './stylesheets/style.scss';
import { routePaths } from './app.routes';
import { Footer, Header } from './app/shared/components/layout';

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
