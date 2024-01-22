import './App.css';
import { Routes, Route} from "react-router-dom";
import About from "./routes/About";
import Product from "./routes/Product";
import Home from "./routes/Home";
import Navbar from './Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </>
  );
}
export default App;