import React, { Component } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

class App extends Component {
  render() {
    return (
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            千纸鹤写作
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            随时随地，随意写作
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button variant="contained">
              <Link href="/page/new" color="inherit" underline="none">
                记录现在
              </Link>
            </Button>
            <Button variant="outlined">
              <Link href="#title" underline="none">
                浏览所有
              </Link>
            </Button>
          </Stack>
        </Container>
      </Box>
    );
  }
}

export default App;