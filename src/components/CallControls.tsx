import React, { useRef } from 'react';
import { Phone, PhoneOff, Mic, MicOff, Upload } from 'lucide-react';
import { useCallStore } from '../store/callStore';

export const CallControls: React.FC = () => {
  const { 
    isCallActive, 
    isRecording, 
    setCallActive, 
    setRecording,
    initializeCall,
    updateTranscription,
    updateTranscriptionSOAP,
    updateTranscriptiondd,
    updateAnalysis
  } = useCallStore();

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleCallToggle = async () => {
    if (!isCallActive) {
      await initializeCall();
    } else {
      setCallActive(false);
    }
  };

  const handleRecordingToggle = () => {
    if (isCallActive) {
      setRecording(!isRecording);
      
      if (!isRecording) {
        startAudioProcessing();
      } else {
        stopAudioProcessing();
      }
    }
  };

  const startAudioProcessing = () => {
    const { localStream } = useCallStore.getState();
    
    if (localStream) {
      const mediaRecorder = new MediaRecorder(localStream);
      const audioChunks: Blob[] = [];

      mediaRecorder.ondataavailable = (event) => {
        audioChunks.push(event.data);
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
        await processAudioFile(audioBlob);
      };

      mediaRecorder.start(1000);
      (window as any).mediaRecorder = mediaRecorder;
    }
  };

  const stopAudioProcessing = () => {
    const mediaRecorder = (window as any).mediaRecorder;
    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
      mediaRecorder.stop();
    }
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      await processAudioFile(file);
    }
  };

  const processAudioFile = async (audioBlob: Blob) => {
    try {
      const formData = new FormData();
      formData.append('audio', audioBlob);

      const response = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData,
        mode: 'cors'
      });

      if (!response.ok) {
        const errorText=await response.text();
        throw new Error(`Failed to process audio: ${errorText}`);
      }

      const data = await response.json();
      updateTranscription(data.transcription);
      updateTranscriptionSOAP(data.SOAP);
      updateTranscriptiondd(data.dd);
      updateAnalysis(50, [data.analysis]);
    } catch (error) {
      console.error('Error processing audio:', error);
    }
  };

  return (
    <div className="flex gap-4 justify-center mt-6">
      <button
        onClick={handleCallToggle}
        className={`rounded-full p-4 ${
          isCallActive ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
        } text-white transition-colors`}
      >
        {isCallActive ? <PhoneOff size={24} /> : <Phone size={24} />}
      </button>
      <button
        onClick={handleRecordingToggle}
        className={`rounded-full p-4 ${
          isRecording ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'
        } text-white transition-colors`}
        disabled={!isCallActive}
      >
        {isRecording ? <MicOff size={24} /> : <Mic size={24} />}
      </button>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileUpload}
        accept="audio/*"
        className="hidden"
      />
      <button
        onClick={() => fileInputRef.current?.click()}
        className="rounded-full p-4 bg-purple-500 hover:bg-purple-600 text-white transition-colors"
      >
        <Upload size={24} />
      </button>
    </div>
  );
};