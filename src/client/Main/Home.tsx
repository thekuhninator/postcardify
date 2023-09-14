import "./Home.css";

import { useState } from "react";
import Header from './shared/Header';
import reactLogo from "./assets/react.svg";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Jumbotron from "./Home/Jumbotron";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <Box>
      <Header />
      <Jumbotron />
    </Box>
  );
}

export default Home;
