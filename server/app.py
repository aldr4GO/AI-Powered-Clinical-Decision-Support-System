from flask import Flask, request, jsonify
from flask_cors import cross_origin
from flask_cors import CORS
import os
from transcription import TranscriptionService
from analysis import AnalysisService

app = Flask(__name__)
if not os.path.exists('uploads'):
    os.makedirs('uploads')
CORS(app, resources={r"/*": {"origins": "*"}})
# CORS(app, resources={r"/*": {"origins": "*"}})
# , resources={r"/*": {"origins": "http://localhost:5173"}}
transcription_service = TranscriptionService()
analysis_service = AnalysisService()

# @app.route('/')
# def index():
#     return 'Hello, World!'

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'audio' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    file = request.files['audio']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    # Save the file to a temporary location
    file_path = os.path.join('uploads', file.filename)
    file.save(file_path)

    transcription = transcription_service.transcribe_audio(file_path)
    SOAP,dd = analysis_service.analyze_text(','.join(transcription))


    return jsonify({
        'transcription': '\n'.join(transcription),
        'SOAP': SOAP,
        'dd': dd
    }), 200

if __name__ == '__main__':
    app.run(debug=True, port=5000)