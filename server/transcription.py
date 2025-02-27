import assemblyai as aai
class TranscriptionService:
    def __init__(self):
        aai.settings.api_key= '<ASSEMBLYAI_API_KEY>' # use your assemblyai api key
        self.transcriber = aai.Transcriber()

    def transcribe_audio(self, audio_data):
        try:

            config = aai.TranscriptionConfig(
            speaker_labels=True,
            )
            transcript = self.transcriber.transcribe(audio_data,config)
            conversation = []
            for utterance in transcript.utterances:
                conversation.append(f"Speaker {utterance.speaker}: {utterance.text}")
            return (conversation)

        except Exception as e:
            print(f"Transcription error: {str(e)}")
            raise Exception("Failed to transcribe audio")