import { Grid2 } from "@mui/material";
import { ShopProductListItem } from "../components/ShopProductListItem";
import { useRecoilState } from "recoil";
import { productsState } from "../states/products";

export function HomePage() {
  const [products, setProducts] = useRecoilState(productsState);

  return (
    <>
      <Grid2 container spacing={2}>
        {products.map((product) => {
          return (
            <Grid2 size={5}>
              <ShopProductListItem product={product} />
            </Grid2>
          );
        })}
      </Grid2>
    </>
  );
}
