import "./Home.css";

import { useState } from "react";
import Header from './shared/Header';
import reactLogo from "./assets/react.svg";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Jumbotron from "./Home/Jumbotron";
import { Button, Card, Typography } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

function Editor() {
  const [count, setCount] = useState(0);

  return (

    <div>
            <Header />
            <Container maxWidth="md" sx={{ marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
             }}>
                <Card>
                    <Typography variant="h3"> Free Online Postcard Maker </Typography>
                    <Typography variant="subtitle1"> Take your photos from blah to beautiful with Postcardify's 
                    free online photo editor. Upload, transform and share instantly from one place. </Typography>
                    <Button variant="contained" startIcon={<CloudUploadIcon />}> Upload your image </Button>
                    <p> or drop it here </p>
                </Card>

            </Container>
        </div>  
        );
}

export default Editor;
