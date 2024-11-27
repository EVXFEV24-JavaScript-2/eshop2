import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { productsState } from "../states/products";
import {
  Button,
  Container,
  Grid2,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import { useState } from "react";

export function ProductViewPage() {
  const params = useParams();
  const productId = Number.parseInt(params.id);
  const [products, setProducts] = useRecoilState(productsState);

  const product = products.find((all) => all.id === productId);
  const [activeImage, setActiveImage] = useState(product.thumbnail);
  console.log(activeImage);

  if (product === undefined) {
    return <>Go back to the home page.</>;
  }

  return (
    <>
      <Grid2 container>
        <Grid2 size={3}>
          <Container>
            <ImageList cols={1} rowHeight={164}>
              {product.images.map((item) => (
                <ImageListItem key={item} onClick={() => setActiveImage(item)}>
                  <img srcSet={`${item}`} src={`${item}`} />
                </ImageListItem>
              ))}
            </ImageList>
          </Container>
        </Grid2>
        <Grid2 size={4}>
          <img width="100%" src={activeImage} />
        </Grid2>
        <Grid2 size={5}>
          <Container>
            <Typography>{product.title}</Typography>
            <Typography>{product.description}</Typography>
            <Button>Add to cart</Button>
            <Typography>${product.price}</Typography>
          </Container>
        </Grid2>
      </Grid2>
    </>
  );
}
