import { HashRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("../pages/HomePage"));
const ProductListingPage = lazy(() => import("../pages/ProductListingPage"));
const ProductViewPage = lazy(() => import("../pages/ProductViewPage"));


import Layout from "../layout/Layout";
import Spinner from "../components/spinner/Spinner";
import Notfound from "../pages/Notfound";


const Paths = () => {
  return (
    <>
      <HashRouter>
        <Suspense fallback={<div>{<Spinner />}</div>}>
          <Routes>

            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/products" element={<ProductListingPage />} />
              <Route path="/products/:id" element={<ProductViewPage />} />
              <Route path="*" element={<Notfound/>}/>
            </Route>

          </Routes>
        </Suspense>
      </HashRouter>
    </>
  );
};

export default Paths;
