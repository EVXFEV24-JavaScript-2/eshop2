import { cartState } from "../states/cart";
import { Button, Grid2, List, ListItem, Typography } from "@mui/material";
import { useRecoilState } from "recoil";

export function ProductCartItem({ cartItem }) {
  const [cart, setCart] = useRecoilState(cartState);

  const reduceAmount = () => {
    if (cartItem.amount <= 1) {
      removeItem();
      return;
    }

    setCart(
      cart.map((item) => {
        if (item.product.id === cartItem.product.id) {
          return { ...item, amount: cartItem.amount - 1 };
        }

        return item;
      })
    );
  };

  const increaseAmount = () => {
    setCart(
      cart.map((item) => {
        if (item.product.id === cartItem.product.id) {
          return { ...item, amount: cartItem.amount + 1 };
        }

        return item;
      })
    );
  };

  const removeItem = () => {
    setCart(cart.filter((item) => item.product.id !== cartItem.product.id));
  };

  return (
    <Grid2 container spacing={4} sx={{ flexDirection: "row" }}>
      <Grid2 size={3}>
        <Button variant="contained" onClick={increaseAmount}>
          +
        </Button>
        <br />
        <Button variant="contained" onClick={reduceAmount}>
          -
        </Button>
        <br />
        <Button variant="contained" onClick={removeItem}>
          X
        </Button>
      </Grid2>
      <Grid2 size={3}>
        <img src={cartItem.product.thumbnail} width="60" />
      </Grid2>
      <Grid2 size={6}>
        <Typography>{cartItem.product.title}</Typography>
        <Typography>${cartItem.product.price}</Typography>
        <Typography>x{cartItem.amount}</Typography>
      </Grid2>
    </Grid2>
  );
}
