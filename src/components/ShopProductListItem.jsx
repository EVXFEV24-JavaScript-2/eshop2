import { Container, Paper, Typography } from "@mui/material";

export function ShopProductListItem({ product }) {
  if (product == null) {
    return <>Loading...</>;
  }

  return (
    <>
      <Paper>
        <Container>
          <Typography>{product.title}</Typography>
          <img src={product.thumbnail} width="100%" />
          <Typography>Price: ${product.price}</Typography>
        </Container>
      </Paper>
    </>
  );
}
