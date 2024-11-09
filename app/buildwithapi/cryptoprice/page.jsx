"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CryptoPrice = () => {
    const heading = "Live Crypto Price Tracker";
    const description = "Stay updated with real-time cryptocurrency prices. This application is built using API integration, providing accurate and up-to-date information on various digital assets.";
    const [cryptoData, setCryptoData] = useState([]);

    useEffect(() => {
        const fetchCryptoData = async () => {
            try {
                const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,litecoin,ripple,cardano,polkadot,stellar&vs_currencies=usd');
                const data = [
                    { name: 'Bitcoin', price: response.data.bitcoin.usd },
                    { name: 'Ethereum', price: response.data.ethereum.usd },
                    { name: 'Litecoin', price: response.data.litecoin.usd },
                    { name: 'Ripple', price: response.data.ripple.usd },
                    { name: 'Cardano', price: response.data.cardano.usd },
                    { name: 'Polkadot', price: response.data.polkadot.usd },
                    { name: 'Stellar', price: response.data.stellar.usd }
                ];
                setCryptoData(data);
            } catch (error) {
                console.error('Error fetching crypto data:', error);
            }
        };

        fetchCryptoData();

        const intervalId = setInterval(fetchCryptoData, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <section className="w-full flex justify-center items-center px-5 py-36">
            <div className="flex flex-col justify-center items-center gap-3 w-[80vw] md:w-[60vw]">
                <h1 className="text-5xl font-semibold text-slate-200 text-center">{heading}</h1>
                <h2 className="font-medium text-xl text-slate-300 text-center">{description}</h2>
                {/* Crypto Prices */}
                <div className="flex flex-col justify-center items-center gap-4 mt-7">
                    <div className="flex flex-wrap justify-center items-center w-full gap-5">
                        {cryptoData.map((crypto, index) => (
                            <div className="flex flex-col justify-between items-center gap-2 rounded-lg px-4 py-3 border-2 border-sky-700 w-[300px]" key={index}>
                                <h3 className='text-2xl font-semibold text-slate-200'>{crypto.name}</h3>
                                <p className='text-xl font-semibold text-slate-200'>Price: ${crypto.price}</p>
                                <p className='text-xl font-semibold text-slate-200'>{new Date().toLocaleString()}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CryptoPrice;
