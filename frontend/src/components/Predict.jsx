import React, { useState } from "react";
import axios from "axios";
import "./Predict.css";
import backgroundImage from "../assets/skin-cancer-image2.jpg";

const Predict = () => {
  const [file, setFile] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(5);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setImagePreview(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

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
      setFeedbackSubmitted(false); // Reset feedback submission when new prediction is made
    } catch (error) {
      alert(error.response?.data?.error || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setFile(null);
    setImagePreview(null);
    setPrediction(null);
    setFeedback("");
    setRating(5);
    setFeedbackSubmitted(false);
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the feedback to your backend
    console.log({
      feedback,
      rating,
      prediction: prediction.predicted_class,
    });
    setFeedbackSubmitted(true);
    // You can add an API call here to save the feedback
    // axios.post("/api/feedback", { feedback, rating, prediction: prediction.predicted_class });
  };

  return (
    <div className="predict-container">
      <div className="predict-card">
        <div className="predict-header">
          <h2>Image Prediction</h2>
          <p>Upload an image to get a prediction</p>
        </div>

        <form className="predict-form" onSubmit={handleSubmit}>
          <div className="file-upload-container">
            <label htmlFor="file-upload" className="file-upload-label">
              {file ? file.name : "Choose file"}
              <input
                id="file-upload"
                type="file"
                onChange={handleFileChange}
                required
                className="file-input"
                accept="image/*"
              />
            </label>
          </div>

          {imagePreview && (
            <div className="image-preview-container">
              <h3>Selected Image</h3>
              <img src={imagePreview} alt="Preview" className="image-preview" />
            </div>
          )}

          <div className="form-group">
            <button
              type="submit"
              disabled={!file || isLoading}
              className="predict-button"
            >
              {isLoading ? "Processing..." : "Predict"}
            </button>
          </div>
        </form>

        {prediction && (
          <div className="prediction-result">
            <div className="prediction-header">
              <h2>Prediction Result</h2>
            </div>
            <div className="prediction-content">
              <div className="prediction-item">
                <span className="prediction-label">Class:</span>
                <span className="prediction-value">
                  {prediction.predicted_class}
                </span>
              </div>
              <div className="prediction-item">
                <span className="prediction-label">Confidence:</span>
                <span className="prediction-value">
                  {prediction.confidence}
                </span>
              </div>

              {!feedbackSubmitted ? (
                <form className="feedback-form" onSubmit={handleFeedbackSubmit}>
                  <h3>Provide Feedback</h3>
                  <div className="form-group">
                    <label htmlFor="rating">Rating (1-5):</label>
                    <input
                      type="number"
                      id="rating"
                      min="1"
                      max="5"
                      value={rating}
                      onChange={(e) => setRating(parseInt(e.target.value))}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="feedback">Feedback:</label>
                    <textarea
                      id="feedback"
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                      placeholder="Was the prediction helpful? Any suggestions?"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <button type="submit" className="feedback-button">
                      Submit Feedback
                    </button>
                  </div>
                </form>
              ) : (
                <div className="feedback-thankyou">
                  <p>Thank you for your feedback!</p>
                </div>
              )}

              <button
                type="button"
                onClick={handleClear}
                className="clear-button"
              >
                Clear Results
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Predict;
