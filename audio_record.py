from pvrecorder import PvRecorder
import wave, struct 

devices = PvRecorder.get_available_devices()
# for index, device in enumerate(devices):
#     print(f"[{index}] {device}")

recorder = PvRecorder(device_index=1, frame_length=512) #(32 milliseconds of 16 kHz audio)
audio = []
path = './uploads/audio_recording.wav'

try:
    recorder.start()


    while True:
        frame = recorder.read()
        audio.extend(frame)
except KeyboardInterrupt:
    recorder.stop()
    with wave.open(path, 'w') as f:
        f.setparams((1, 2, 16000, 512, "NONE", "NONE"))
        f.writeframes(struct.pack("h" * len(audio), *audio))
finally:
    recorder.delete()
    print("Recording saved to audio_recording.wav")