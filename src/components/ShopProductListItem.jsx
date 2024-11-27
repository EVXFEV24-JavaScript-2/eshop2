import {
  Container,
  List,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export function ShopProductListItem({ product }) {
  const navigate = useNavigate();

  if (product == null) {
    return <>Loading...</>;
  }

  const goToProductView = () => {
    navigate("/product/" + product.id);
  };

  return (
    <>
      <Paper onClick={goToProductView}>
        <Container>
          <Typography>{product.title}</Typography>
          <img src={product.thumbnail} width="100%" />
          <Typography>Price: ${product.price}</Typography>

          <List>
            {product.tags.map((tag) => (
              <ListItemText primary={tag} key={tag} />
            ))}
          </List>
        </Container>
      </Paper>
    </>
  );
}
