"use client"
import React, { useState, useEffect } from 'react';
import QRCodeLib from 'qrcode';

const QRCodeGenerator = () => {
  const [qrData, setQrData] = useState('ainrzy.vercel.app');
  const [qrImageUrl, setQrImageUrl] = useState('');

  const handleInputChange = (event) => {
    setQrData(event.target.value);
  };

  const downloadQRCode = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = qrImageUrl;
    downloadLink.download = 'qrcode.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  useEffect(() => {
    const generateQRCode = async () => {
      try {
        const qrCode = await QRCodeLib.toDataURL(qrData);
        setQrImageUrl(qrCode);
      } catch (error) {
        console.error('Error generating QR code:', error);
      }
    };

    generateQRCode();
  }, [qrData]);

  const heading = "QR Code Generator"
  const description = "The QR Code Generator empowers users to create QR codes quickly and effortlessly, facilitating seamless sharing of information across various platforms and enhancing user engagement with your content"

  return (
    <section className="w-full flex justify-center items-center px-5 py-36 lg:py-40">
      <div className="flex flex-col justify-center items-center gap-3 w-[80vw] md:w-[60vw]">
        <h1 className="text-5xl font-semibold text-slate-200 text-center">{heading}</h1>
        <h1 className='font-medium text-xl text-slate-300 text-center'>{description}</h1>
        <div className="flex flex-col justify-center items-stretch gap-5 mt-7 w-full">
          <input
            id="qrDataInput"
            type="text"
            className="w-full px-5 py-3 rounded-lg text-slate-200 outline-none card"
            placeholder="Enter data for QR code"
            value={qrData}
            onChange={handleInputChange}
          />
          <div className="flex gap-5">
            <button
              className="bg-sky-700 hover:bg-sky-800 transition ease-in-out px-5 py-2 font-medium text-xl text-slate-200 rounded-lg"
              onClick={downloadQRCode}
              disabled={!qrImageUrl}
            >
              Download QR Code
            </button>
          </div>
          <div className='flex justify-center items-center w-full'>
            {qrImageUrl && (
              <div className="mt-4">
                <img src={qrImageUrl} alt="QR Code" className='h-[300px] w-[300px] rounded-lg'/>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QRCodeGenerator;