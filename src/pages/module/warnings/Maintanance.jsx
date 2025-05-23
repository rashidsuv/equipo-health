import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import construction from "../../../assets/images/img-cunstruct-1.svg";
import constructionBg from "../../../assets/images/img-cunstruct-1-bg.png";
import constructionbottom from "../../../assets/images/img-cunstruct-1-bottom.svg";

export default function Maintanance() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${constructionBg})`,
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container
        fixed
        sx={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
      >
        <Grid
          mt={20}
          container
          spacing={3}
          alignItems="center"
          justifyContent="start"
          sx={{
            py: 2,
            backgroundImage: `url(${constructionbottom})`,
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
          }}
        >
          <Grid item md={6}>
            <Stack spacing={2} justifyContent="start" alignItems="center">
              <Typography align="center" variant="h1">
                Under Construction
              </Typography>
              <Typography
                color="text.secondary"
                align="center"
                sx={{ width: "85%" }}
              >
                Hey! Please check out this menu later. We are doing some
                maintenance on it right now.
              </Typography>
              <Button component={Link} to={"/"} variant="contained">
                Back To Home
              </Button>
            </Stack>
          </Grid>
          <Grid item md={6}>
            <Box sx={{ width: { xs: 300, sm: 374 } }}>
              <img
                src={construction}
                alt="under construction"
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
