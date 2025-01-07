"use client";
import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

const page = () => {
  const [text, setText] = useState("");

  const downloadQRCode = () => {
    const canvas = document.getElementById("qr-code");
    const pngURL = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    const downloadLink = document.createElement("a");
    downloadLink.href = pngURL;
    downloadLink.download = "qr-code.png";
    downloadLink.click();
  };

  return (
    <section className="h-full flex flex-col items-center justify-center p-4 space-y-6">
      <textarea
        className="w-full max-w-md p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        rows="4"
        placeholder="Type here for your qr code..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="bg-white p-4 border border-gray-300 rounded-lg shadow-sm">
        {text ? (
          <QRCodeCanvas
            id="qr-code"
            value={text}
            size={200}
            bgColor="#FFFFFF"
            fgColor="#000000"
            level="Q"
          />
        ) : (
          <p>Start typing to generate qr code...</p>
        )}
      </div>
      <button
        onClick={downloadQRCode}
        className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
      >
        Download QR Code
      </button>
    </section>
  );
};

export default page;
