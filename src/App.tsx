import { CallControls } from './components/CallControls';
import { MessageCircle, Waves } from 'lucide-react';
import { useCallStore } from './store/callStore';

 
function App() {
  const { 
    isCallActive, 
    isRecording, 
    remoteStream, 
    localStream, 
    transcription,
    SOAP,
    dd,
    analysis
  } = useCallStore();
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 p-4">
        <div className="container mx-auto flex items-center gap-2">
          <Waves className="text-blue-400" size={32} />
          <h1 className="text-2xl font-bold">AI-Powered Clinical Decision Support Systems</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Call Session</h2>
              <div className="relative aspect-video bg-gray-700 rounded-lg overflow-hidden">
                {/* <VideoStream /> */}
                <div className="absolute bottom-4 right-4 w-1/3">
                  {/* <VideoStream isLocal /> */}
                </div>
              </div>
              <CallControls />
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <MessageCircle className="text-blue-400" />
                <h2 className="text-xl font-semibold">Live Transcription</h2>
              </div>
              <div className="h-[400px] bg-gray-700 rounded-lg p-4 overflow-y-auto">
                <p className="text-gray-400 italic">
                {transcription}
                </p>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Analysis Results</h2>
              <div className="space-y-4">
                {/* <div className="bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Sentiment Analysis</h3>
                  <div className="h-4 bg-gray-600 rounded-full">
                    <div className="h-full w-0 bg-blue-400 rounded-full transition-all duration-500"></div>
                  </div>
                </div> */}
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">SOAP notes</h3>
                  <p className="text-gray-400 italic">{SOAP}</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Differential Diagnosis</h3>
                  <p className="text-gray-400 italic">{dd}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;