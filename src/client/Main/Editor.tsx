import "./Home.css";

import { useState } from "react";
import Header from './shared/Header';
import reactLogo from "./assets/react.svg";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Jumbotron from "./Home/Jumbotron";
import { Button, Card, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
  
  

function Editor() {
function callApi() {
    console.log("Calling the api!!!")
    fetch("http://localhost:3000/hello")
        .then(res => res.text())
        .then(res => setText(res));
    }
        
  const [count, setCount] = useState(0);
  const [selectedImage, setSelectedImage] = useState<File | undefined>();
  const [textStuff, setText] = useState("no text yet");

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
                    <Button variant="contained" 
                        startIcon={<CloudUploadIcon />}
                        component="label"         
                        onChange={(event) => {
                            console.log((event.target as HTMLInputElement).files![0]);
                            setSelectedImage((event.target as HTMLInputElement).files![0]);
                        }}
                        > 
                            Upload your image 
                            <VisuallyHiddenInput type="file" />
                    </Button>

                    {selectedImage && (
                        <div>
                        <img
                            alt="not found"
                            width={"250px"}
                            src={URL.createObjectURL(selectedImage)}
                        />
                        <br />
                        <button onClick={() => setSelectedImage(undefined)}>Remove</button>
                        </div>
                    )}
                    
                    <Button variant="contained" onClick={callApi} startIcon={<CloudUploadIcon />}> Go! </Button>
                    <p> or drop it here </p>

                    <h1>
                        {textStuff}
                    </h1>


                </Card>

            </Container>
        </div>  
        );
}

export default Editor;
