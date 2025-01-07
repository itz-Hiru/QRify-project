"use client";
import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const page = () => {
  const [text, setText] = useState("");

  const downloadQRCode = () => {
    if (!text) {
      toast.error("Please enter your text to generate a QR Code.");
      return;
    }

    const canvas = document.getElementById("qr-code");
    if (!canvas) {
      toast.error("QR Code canvas not found. Please try again.");
      return;
    }

    try {
      const pngURL = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngURL;
      downloadLink.download = "qr-code.png";
      downloadLink.click();
      toast.success("QR Code downloaded successfully!");
    } catch (err) {
      toast.error("An error occurred while downloading the QR Code. Please try again.");
    }
  };

  return (
    <section className="h-full flex flex-col items-center justify-center p-4">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />

      <div className="flex flex-col lg:flex-row justify-between items-center py-5 gap-10 w-full max-w-4xl">
        <textarea
          className="w-full max-w-md p-5 bg-transparent border border-accent rounded-xl shadow-md shadow-accent text-white focus:outline-none focus:ring-accent order-2 xl:order-none"
          rows="5"
          placeholder="Type here for your QR code..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div className="bg-white p-4 text-black/75 text-xl w-[220px] h-[220px] flex items-center justify-center rounded-lg shadow-lg order-1 xl:order-none">
          {text ? (
            <QRCodeCanvas
              id="qr-code"
              value={text}
              size={200}
              bgColor="#FFFFFF"
              fgColor="#000000"
              level="Q"
              className="justify-self-center"
            />
          ) : (
            <p className="text-center">QR Code will display here...</p>
          )}
        </div>
      </div>

      <button
        onClick={downloadQRCode}
        className="relative flex items-center justify-center px-.5 py-[2px] bg-slate-800 text-white font-semibold text-sm rounded-full shadow-2xl shadow-zinc-900 group cursor-pointer mt-5"
      >
        <span className="absolute inset-0 rounded-full bg-[radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
        <div className="relative flex items-center space-x-2 px-6 py-3 bg-zinc-950 rounded-full z-10 ring-1 ring-white/10">
          <span>Download QR Code</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M10.75 8.75L14.25 12L10.75 15.25"
            ></path>
          </svg>
        </div>
        <span className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
      </button>
    </section>
  );
};

export default page;
