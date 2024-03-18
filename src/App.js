import { Routes, Route } from 'react-router';
import Layout from './Components/Layout/layout';
import Shop from './Components/Page/Shop';
import News from './Components/Page/News';
import About from './Components/Page/About';
import Pages from './Components/Page/Pages';
import Home from './Components/Page/Home';
import Cart from './Components/Page/Cart';
import Project from './Components/Page/Project';
import Single from './Components/ShopSingle/Single';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/page" element={<Pages />} />
          <Route path="shop" element={<Shop />} />
          <Route path="/pro" element={<Project />} />
          <Route path="news" element={<News />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/single" element={<Single />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
