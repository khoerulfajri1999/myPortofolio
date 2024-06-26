import "./App.css";
import { Footer } from "./Pages/Footer/Footer";
import { Home } from "./Pages/Home/Home";
import { Navbar } from "./Pages/Navbar/Navbar";
import { Product } from "./Pages/Product/Product";
import { Services } from "./Pages/Services/Services";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Services />
      <Product />
      <Footer />
    </div>
  );
}

export default App;
