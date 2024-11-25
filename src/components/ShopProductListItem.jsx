import { Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export function ShopProductListItem() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products/1")
      .then((res) => res.json())
      .then(setProduct);
  }, []);

  return (
    <>
      <Paper>
        <Typography>{product.title}</Typography>
      </Paper>
    </>
  );
}
