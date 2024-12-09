"use client";

import React, { useState, useRef } from "react";
import { FaCamera } from "react-icons/fa";
import Quagga from "quagga";

const BarcodeScanner = () => {
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState(null);
  const scannerRef = useRef(null);

  const startScanning = () => {
    setScanning(true);
    Quagga.init(
      {
        inputStream: {
          name: "Live",
          type: "LiveStream",
          target: scannerRef.current,
          constraints: {
            width: 640,
            height: 480,
            facingMode: "environment",
          },
        },
        locator: {
          patchSize: "medium",
          halfSample: true,
        },
        numOfWorkers: 2,
        decoder: {
          readers: ["ean_reader", "code_128_reader"],
        },
        locate: true,
      },
      (err) => {
        if (err) {
          console.error(err);
          setScanning(false);
          return;
        }
        Quagga.start();
      }
    );

    Quagga.onDetected((data) => {
      setResult(data.codeResult.code);
      stopScanning();
    });
  };

  const stopScanning = () => {
    Quagga.stop();
    setScanning(false);
  };

  return (
    <div className="w-full max-w-lg mx-auto p-2 bg-neutral-700 shadow-md rounded-lg">
      <div
        ref={scannerRef}
        className={`relative w-full h-64 mb-4 overflow-hidden rounded-lg ${
          scanning ? "border-2 border-blue-500" : "border-2 border-neutral-500"
        }`}
      >
        {!scanning && (
          <div className="absolute inset-0 flex items-center justify-center bg-neutral-500">
            <FaCamera className="w-12 h-12 text-neutral-300" />
          </div>
        )}
      </div>

      <div className="flex space-x-4">
        <button
          onClick={startScanning}
          disabled={scanning}
          className="flex-1 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 disabled:bg-blue-300"
        >
          Start Scanning
        </button>

        <button
          onClick={stopScanning}
          disabled={!scanning}
          className="flex-1 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 disabled:bg-red-300"
        >
          Stop Scanning
        </button>
      </div>

      {result && (
        <div className="mt-4 p-3 bg-green-100 rounded">
          <p className="text-green-800">Barcode: {result}</p>
        </div>
      )}
    </div>
  );
};

export default BarcodeScanner;
