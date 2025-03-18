import os
import torch
import torch.nn as nn
import torch.nn.functional as F
import numpy as np
import cv2

class ImprovedCNNNet(nn.Module):
    def __init__(self):
        super(ImprovedCNNNet, self).__init__()
        self.main = nn.Sequential(
            nn.Conv2d(in_channels=3, out_channels=32, kernel_size=(5,5), stride=(1,1), padding=2, bias=True),
            nn.BatchNorm2d(32),
            nn.ReLU(True),
            nn.MaxPool2d(kernel_size=(2,2), stride=(2,2)),
            
            nn.Conv2d(in_channels=32, out_channels=64, kernel_size=(5,5), stride=(1,1), padding=2, bias=True),
            nn.BatchNorm2d(64),
            nn.ReLU(True),
            nn.MaxPool2d(kernel_size=(2,2), stride=(2,2)),

            nn.Conv2d(in_channels=64, out_channels=128, kernel_size=(3,3), stride=(1,1), padding=1, bias=True),
            nn.BatchNorm2d(128),
            
            nn.ReLU(True),
            nn.MaxPool2d(kernel_size=(2,2), stride=(2,2)),

            nn.Conv2d(in_channels=128, out_channels=256, kernel_size=(3,3), stride=(1,1), padding=1, bias=True),
            nn.BatchNorm2d(256),
            nn.ReLU(True),
            nn.MaxPool2d(kernel_size=(2,2), stride=(2,2)),

            nn.Conv2d(in_channels=256, out_channels=512, kernel_size=(3,3), stride=(1,1), padding=1, bias=True),
            nn.BatchNorm2d(512),
            nn.ReLU(True),
            nn.MaxPool2d(kernel_size=(2,2), stride=(2,2)),
            
            nn.Flatten(),
            nn.Linear(8 * 8 * 512, 1024, bias=True),
            nn.ReLU(True),
            nn.Dropout(0.5),
            nn.Linear(1024, 512, bias=True),
            nn.ReLU(True),
            nn.Dropout(0.5),
            nn.Linear(512, 128, bias=True),
            nn.ReLU(True),
            nn.Linear(128, 7, bias=True),
            nn.LogSoftmax(dim=1)
        )
    
    def forward(self, x):
        out = self.main(x)
        return out

class SkinCancerClassifier:
    def __init__(self, model_path):
        self.device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
        self.model = ImprovedCNNNet().to(self.device)
        self.model.load_state_dict(torch.load(model_path, map_location=self.device)['model_state_dict'])
        self.model.eval()
        
        self.SKIN_CANCER_CLASSES = [
            'Actinic Keratosis', 
            'Basal Cell Carcinoma', 
            'Benign Keratosis', 
            'Dermatofibroma', 
            'Melanoma', 
            'Nevus', 
            'Squamous Cell Carcinoma'
        ]

    def preprocess_image(self, image_path):
        """Preprocess the uploaded image for model prediction."""
        new_width, new_height = 256, 256
        image = cv2.imread(image_path)
        
        if image is None:
            raise ValueError("Unable to read the image file")
        
        # Resize image
        resized_image = cv2.resize(image, (new_width, new_height))
        
        # Convert to tensor and normalize
        tensor_image = torch.from_numpy(resized_image).float().permute(2, 0, 1).unsqueeze(0)
        
        return tensor_image

    def predict(self, image_path):
        """Predict skin cancer class for an image."""
        input_tensor = self.preprocess_image(image_path).to(self.device)
        
        with torch.no_grad():
            prediction = self.model(input_tensor)
            probabilities = torch.exp(prediction)
            top_prob, top_class = probabilities.topk(1, dim=1)
        
        # Get the predicted class
        predicted_class_index = top_class.item()
        predicted_class_name = self.SKIN_CANCER_CLASSES[predicted_class_index]
        confidence = top_prob.item() * 100
        
        return {
            'predicted_class': predicted_class_name,
            'confidence': f'{confidence:.2f}%'
        }