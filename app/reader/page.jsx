"use client";

import { useState, useRef, useEffect } from "react";
import jsQR from "jsqr";

const page = () => {
  const [qrResult, setQrResult] = useState("");
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [cameraStream, setCameraStream] = useState(null);

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      handleFile(file);
    }
  };

  const handleFile = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const imageData = e.target.result;
      scanQrFromImage(imageData);
    };
    reader.readAsDataURL(file);
  };

  const scanQrFromImage = (imageData) => {
    const image = new Image();
    image.src = imageData;
    image.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = image.width;
      canvas.height = image.height;
      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      ctx.drawImage(image, 0, 0, image.width, image.height);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const code = jsQR(imageData.data, canvas.width, canvas.height);
      if (code) {
        setQrResult(code.data);
      } else {
        alert("No QR code detected.");
      }
    };
  };

  const startCamera = () => {
    setIsCameraOpen(true);
    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: "environment" } })
      .then((stream) => {
        setCameraStream(stream);
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        }
      })
      .catch((err) => {
        console.error("Error accessing camera: ", err);
        alert("Unable to access camera.");
      });
  };

  const stopCamera = () => {
    if (cameraStream) {
      const tracks = cameraStream.getTracks();
      tracks.forEach((track) => track.stop());
    }
    setIsCameraOpen(false);
    setCameraStream(null);
  };

  useEffect(() => {
    let interval;
    if (isCameraOpen) {
      interval = setInterval(() => {
        scanQrFromCamera();
      }, 500);
    }
    return () => clearInterval(interval);
  }, [isCameraOpen]);

  const scanQrFromCamera = () => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const code = jsQR(imageData.data, canvas.width, canvas.height);
      if (code) {
        setQrResult(code.data);
        stopCamera();
      }
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100"
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <h1 className="text-2xl font-bold mb-4">QR Code Reader</h1>

      <div className="flex flex-col items-center">
        <input
          type="file"
          accept="image/*"
          className="mb-4"
          onChange={(e) => {
            if (e.target.files[0]) {
              handleFile(e.target.files[0]);
            }
          }}
        />

        {isCameraOpen ? (
          <div className="relative">
            <video ref={videoRef} className="w-72 h-72 bg-black" />
            <canvas
              ref={canvasRef}
              className="absolute top-0 left-0"
              width="300"
              height="300"
              style={{ display: "none" }}
            ></canvas>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded mt-4"
              onClick={stopCamera}
            >
              Close Camera
            </button>
          </div>
        ) : (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
            onClick={startCamera}
          >
            Open Camera
          </button>
        )}

        {qrResult && (
          <div className="mt-4 text-center">
            <p className="text-lg">Result: {qrResult}</p>
            {qrResult.startsWith("http") && (
              <a
                href={qrResult}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Open Link
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
