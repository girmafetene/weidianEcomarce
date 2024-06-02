import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import MegaMenu from "./components/MegaMenu";
import Product from "./components/Product";
import { useEffect } from "react";
import { initGA, logPageView } from "./analytics";
function App() {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);
  return (
    <>
      {/* <NavBar /> */}
      <MegaMenu />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route
          path="/ProductDetail/:productCategory"
          exact
          element={<ProductDetail />}
        />
        <Route path="/Product" exact element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
