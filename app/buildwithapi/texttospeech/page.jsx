"use client"
import React, { useState } from 'react';

const TextToSpeech = () => {
  const [text, setText] = useState('');
  const [audioUrl, setAudioUrl] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const speakText = () => {
    const synthesis = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    synthesis.speak(utterance);
    setIsSpeaking(true);
    utterance.onend = () => {
      setIsSpeaking(false);
    };
  };

  const downloadAudio = () => {
    const synthesis = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    synthesis.speak(utterance);
    utterance.onend = () => {
      const blob = new Blob([utterance.audioData], { type: 'audio/mpeg' });
      const url = URL.createObjectURL(blob);
      setAudioUrl(url);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'speech.mp3';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    };
  };

  const heading = "Text To Speech Converter";
  const description = "The Text To Speech Converter transforms written text into natural-sounding speech, enhancing accessibility for visually impaired individuals and providing a seamless user experience for converting text to audio.";

  return (
    <section className="w-full flex justify-center items-center px-5 py-36 lg:py-40">
      <div className="flex flex-col justify-center items-center gap-3 w-[80vw] md:w-[60vw]">
        <h1 className="text-5xl font-semibold text-slate-200 text-center">{heading}</h1>
        <h2 className="font-medium text-xl text-slate-300 text-center">{description}</h2>
        <div className="flex flex-col justify-center items-stretch gap-5 mt-7 w-full">
          <textarea className='w-full px-5 py-3 rounded-lg text-slate-200 outline-none card' placeholder='Enter Text To Speak' onChange={handleInputChange} value={text}></textarea>
          <div className="flex gap-5">
            <button className={`bg-sky-700 hover:bg-sky-800 transition ease-in-out px-5 py-2 font-medium text-xl text-slate-200 rounded-lg ${isSpeaking ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={speakText} disabled={isSpeaking}>Speak</button>
            <button className="bg-sky-700 hover:bg-sky-800 transition ease-in-out px-5 py-2 font-medium text-xl text-slate-200 rounded-lg" onClick={downloadAudio}>Download Audio</button>
          </div>
          {audioUrl && <audio src={audioUrl} controls className='mt-4 hidden'></audio>}
        </div>
      </div>
    </section>
  );
};

export default TextToSpeech;