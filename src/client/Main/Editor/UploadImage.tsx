import React, { useState } from "react";


const UploadAndDisplayImage = () => {

  function callApi() {
    fetch("http://localhost:3000/hello")
        .then(res => res.text())
        .then(res => setText(res));
  }

  const [selectedImage, setSelectedImage] = useState(null);
  const [textStuff, setText] = useState("hello");


  return (
    <div>
      {selectedImage && (
        <div>
          <img
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button onClick={() => setSelectedImage(null)}>Remove</button>
        </div>
      )}
      <h1>
        hiiii
      </h1>
      {textStuff}
      <br />
      <br />
      
      {/* 
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files![0]);
          setSelectedImage(event.target.files![0]);
        }}
      />
      */}
    </div>
  );
};

export default UploadAndDisplayImage;
