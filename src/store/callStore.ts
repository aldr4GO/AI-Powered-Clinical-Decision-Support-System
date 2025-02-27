if (typeof global === 'undefined') {
  window.global = window;
}

import { create } from 'zustand';

interface CallState {
  isCallActive: boolean;
  isRecording: boolean;
  remoteStream: MediaStream | null;
  localStream: MediaStream | null;
  transcription: string;
  SOAP: string;
  dd: string;
  analysis: {
    sentiment: number;
    topics: string[];
  };
  setCallActive: (active: boolean) => void;
  setRecording: (recording: boolean) => void;
  setRemoteStream: (stream: MediaStream | null) => void;
  setLocalStream: (stream: MediaStream | null) => void;
  initializeCall: () => Promise<void>;
  updateTranscription: (text: string) => void;
  updateTranscriptionSOAP: (text: string) => void;
  updateTranscriptiondd: (text: string) => void;
  updateAnalysis: (sentiment: number, topics: string[]) => void;
}

export var useCallStore = create<CallState>((set) => ({
  isCallActive: false,
  isRecording: false,
  remoteStream: null,
  localStream: null,
  transcription: '',
  SOAP: '',
  dd: '',
  analysis: {
    sentiment: 50,
    topics: ['abcd'],
  },

  setCallActive: (active) => set({ isCallActive: active }),
  setRecording: (recording) => set({ isRecording: recording }),
  setRemoteStream: (stream) => set({ remoteStream: stream }),
  setLocalStream: (stream) => set({ localStream: stream }),

  initializeCall: async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: false,
      });

      set({ localStream: stream, isCallActive: true });

      const mediaRecorder = new MediaRecorder(stream);
      const audioChunks: Blob[] = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunks.push(event.data);
        }
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
        const formData = new FormData();
        formData.append('audio', audioBlob, 'recording.wav');

        try {
          const response = await fetch('http://localhost:5000/upload', {
            method: 'POST',
            body: formData,
          });

          const data = await response.json();
          if (response.ok) {
            set({
              transcription: data.transcription,
              SOAP: data.analysis

              // analysis: {
              //   sentiment: data.analysis.sentiment,
              //   topics: data.analysis.topics
              // },
            });
          }
        } catch (err) {
          console.error('Failed to send audio:', err);
        }
      };

      mediaRecorder.start();
      setTimeout(() => {
        mediaRecorder.stop();
      }, 10000);
    } catch (error) {
      console.error('Failed to initialize call:', error);
    }
  },

  updateTranscription: (text) => {
    set((state) => ({
      transcription: state.transcription + '\n' + text,
    }));
  },
  
  updateTranscriptionSOAP: (text) => {
    set((state) => ({
      SOAP: state.SOAP + '\n' + text,
    }));
  },

  updateTranscriptiondd: (text) => {
    set((state) => ({
      dd: state.dd + '\n' + text,
    }));
  },
  updateAnalysis: (sentiment, topics) => {
    set({
      analysis: {
        sentiment,
        topics,
      },
    });
  },
}));
