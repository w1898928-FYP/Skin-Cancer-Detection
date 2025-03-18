import React, { useState } from "react";
import axios from "axios";

const Predict = () => {
  const [file, setFile] = useState(null);
  const [prediction, setPrediction] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:5000/predict",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setPrediction(response.data);
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} required />
        <button type="submit">Predict</button>
      </form>
      {prediction && (
        <div>
          <h2>Prediction: {prediction.predicted_class}</h2>
          <p>Confidence: {prediction.confidence}</p>
        </div>
      )}
    </div>
  );
};

export default Predict;
