import {
  AppBar,
  Box,
  Button,
  Container,
  TextField,
  Toolbar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const pages = ["Home", "Shop", "Featured", "Recommended"];
export function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { md: "flex" } }}>
              <img
                width="100"
                src="https://salinaka-ecommerce.web.app/images/logo-full.059e10fa5fedbfb65165e7565ed3936f.png"
              />

              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => {
                    if (page === "Home") {
                      navigate("/");
                    } else {
                      navigate("/" + page.toLowerCase());
                    }
                  }}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
            </Box>

            <Box>
              <Button variant="contained">Login</Button>
              <Button variant="contained">Register</Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
