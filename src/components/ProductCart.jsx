import { cartState } from "../states/cart";
import { Button, Grid2, List, ListItem, Typography } from "@mui/material";
import { useRecoilState } from "recoil";
import { ProductCartItem } from "./ProductCartItem";

export function ProductCart() {
  const [cart, setCart] = useRecoilState(cartState);

  return (
    <>
      <List>
        {cart.map((cartItem) => {
          return (
            <ListItem>
              <ProductCartItem cartItem={cartItem} />
            </ListItem>
          );
        })}
      </List>
    </>
  );
}
