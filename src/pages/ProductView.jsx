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
import { cartState } from "../states/cart";

export function ProductViewPage() {
  const params = useParams();
  const productId = Number.parseInt(params.id);
  const [products, setProducts] = useRecoilState(productsState);
  const [cart, setCart] = useRecoilState(cartState);

  const product = products.find((all) => all.id === productId);
  const [activeImage, setActiveImage] = useState(
    product === undefined ? null : product.thumbnail
  );

  if (product === undefined) {
    return <>Go back to the home page.</>;
  }

  const addToCart = () => {
    const cartItem = {
      product: product,
      amount: 1,
    };

    const existing = cart.find((item) => item.product.id === product.id);
    if (existing !== undefined) {
      setCart(
        cart.map((item) => {
          if (item !== existing) {
            return item;
          }

          return { ...item, amount: item.amount + 1 };
        })
      );
      return;
    }

    setCart([...cart, cartItem]);
  };

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
            <Button onClick={addToCart}>Add to cart</Button>
            <Typography>${product.price}</Typography>
          </Container>
        </Grid2>
      </Grid2>
    </>
  );
}
