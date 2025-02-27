# AI-Powered Clinical Decision Support System
This is an **AI-powered clinical decision support system** designed to assist healthcare professionals by transcribing doctor-patient conversations, generating **SOAP notes (Subjective, Objective, Assessment, Plan)**, and providing **Differential Diagnoses.**

## Clone this repo and cd into the folder
```
git clone https://github.com/aldr4GO/AI-Powered-Clinical-Decision-Support-System

cd AI-Powered-Clinical-Decision-Support-System
```

## Install the requirements
```
pip install -r requirements.txt
```

## You would require to set up ollama
Refer to this link:
https://ollama.com/

Set up the Backend
Create a virtual environment and install dependencies:
# Create virtual environment
python -m venv venv

# Activate virtual environment
# Windows
venv\Scripts\activate
# Mac/Linux
source venv/bin/activate



Set up AssemblyAI API key:
1.	Create a .env file in the backend/ directory.
2.	Add the following line, replacing your-api-key with your actual AssemblyAI key:
ASSEMBLYAI_API_KEY=your-api-key
Run the backend server:
cd backend
python app.py
The Flask server should start running at: http://localhost:5000
3. Set up the Frontend
Navigate to the frontend directory and install dependencies:
cd ../frontend
npm install
Start the Vite development server:
npm run dev
The React app should be live at: http://localhost:5173



## Alternatively you can use docker
You call pull the image from docker-hub:
```
docker pull ritesh778/apipython

```
Or build the and run the image:
```
docker-compose -f docker-compose-dev.yml up -d --build

```
