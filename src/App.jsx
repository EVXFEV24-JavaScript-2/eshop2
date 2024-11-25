/*

Pages och routing
Varukorg
Mappstruktur
Inlogg
Generella komponenter
Produktsida / visa produkter
Söka produkter
Specifik produkt sida
Ladda in API data

Pages komponenter:
- Home
- Shop
- Featured products
- Recommended products
- Product view

Generella komponenter:
- Product cart
- Product cart item
- Product card
- Navbar
- Footer

Klasser och funktioner för APIet:
- Hämta produkter


*/

import { Outlet, Route, Routes } from "react-router-dom";
import { FeaturedPage } from "./pages/Featured";
import { HomePage } from "./pages/Home";
import { ProductViewPage } from "./pages/ProductView";
import { RecommendedPage } from "./pages/Recommended";
import { ShopPage } from "./pages/Shop";
import { Container, Grid2 } from "@mui/material";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

/*
        <Link to="/">Home</Link>
      <br />
      <Link to="/about">About</Link>
      <br />

      {products.map((product, i) => (
        <Link to={"/info/" + product.id}>Product {i}</Link>
      ))}

      <Outlet />
*/

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="shop" element={<ShopPage />}></Route>
          <Route path="featured" element={<FeaturedPage />}></Route>
          <Route path="recommended" element={<RecommendedPage />}></Route>
          <Route path="product/:id" element={<ProductViewPage />}></Route>
        </Route>
      </Routes>
    </>
  );
}

function Layout() {
  return (
    <>
      <Grid2 container spacing={2}>
        <Grid2 size={12}>
          <Navbar />
        </Grid2>
        <Grid2 size={12}>
          <Container maxWidth="xl">
            <Outlet />
          </Container>
        </Grid2>
        <Grid2 size={12}>
          <Footer />
        </Grid2>
      </Grid2>
    </>
  );
}

export default App;
