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
import { Box, Button, Container, Grid2, Modal } from "@mui/material";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { ProductServiceContext, productsState } from "./states/products";
import { DummyJsonProductService } from "./api/products";
import { ProductCart } from "./components/ProductCart";

function App() {
  const [products, setProducts] = useRecoilState(productsState);

  // Design pattern: Singleton
  // (eftersom det skapas endast en instans av klassen)
  const productService = new DummyJsonProductService();

  useEffect(() => {
    productService.getAllProducts().then(setProducts);
  }, []);

  return (
    <ProductServiceContext.Provider value={productService}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="shop" element={<ShopPage />}></Route>
          <Route path="featured" element={<FeaturedPage />}></Route>
          <Route path="recommended" element={<RecommendedPage />}></Route>
          <Route path="product/:id" element={<ProductViewPage />}></Route>
        </Route>
      </Routes>
    </ProductServiceContext.Provider>
  );
}

function Layout() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <Grid2 container spacing={2}>
        <Grid2 size={12}>
          <Navbar setCartOpen={setCartOpen} />
        </Grid2>
        <Grid2 size={12}>
          <Container
            maxWidth="xl"
            style={{ border: "1px solid black", padding: 0 }}
          >
            <Outlet />
          </Container>
        </Grid2>
        <Grid2 size={12}>
          <Footer />
        </Grid2>
      </Grid2>

      <Modal
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "primary.main",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Button variant="contained" onClick={() => setCartOpen(false)}>
            Close
          </Button>
          <br />
          <ProductCart />
        </Box>
      </Modal>
    </>
  );
}

export default App;
