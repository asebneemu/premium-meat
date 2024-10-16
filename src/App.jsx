import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './components/Products/Products';
import DanaProducts from './components/Products/DanaProducts'; 
import KuzuProducts from './components/Products/KuzuProducts'; 
import TavukProducts from './components/Products/TavukProducts'; 
import SakatatProducts from './components/Products/SakatatProducts'; 
import Hero from './components/Hero';
import Mission from './components/Mission';
import Contact from './components/Contact'; // İletişim bileşenini import ettik
import AnimatedImage from './components/AnimatedImage'; 
import "./styles.css"

function App() {
  return (
    <Router>
      <AnimatedImage /> {/* AnimatedImage bileşeni buraya eklendi */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/products" element={<Products />} /> 
        <Route path="/dana-urunleri" element={<DanaProducts />} /> 
        <Route path="/kuzu-urunleri" element={<KuzuProducts />} /> 
        <Route path="/tavuk-urunleri" element={<TavukProducts />} /> 
        <Route path="/sakatat-urunleri" element={<SakatatProducts />} /> 
        <Route path="/contact" element={<Contact />} /> {/* İletişim sayfası */}
      </Routes>
    </Router>
  );
}

export default App;
