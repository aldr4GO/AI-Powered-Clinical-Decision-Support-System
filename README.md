# AI-Powered Clinical Decision Support System
This is an **AI-powered clinical decision support system** designed to assist healthcare professionals by transcribing doctor-patient conversations, generating **SOAP notes (Subjective, Objective, Assessment, Plan)**, and providing **Differential Diagnoses.**

## Clone this repo and cd into the folder
```
git clone https://github.com/aldr4GO/AI-Powered-Clinical-Decision-Support-System

cd AI-Powered-Clinical-Decision-Support-System
```
## You would require to set up ollama
Refer to this link: https://ollama.com/

Create a virtual environment and install dependencies:
# Create a miniconda virtual environment
```
conda create -n test_env Python=3.10.12 anaconda
conda activate test_env
```

## Install the requirements
```
pip install -r requirements.txt
npm install
```

## Set up AssemblyAI API key:
- Create a .env file in the "AI-Powered-Clinical-Decision-Support-System" directory.
-	Add the following line, replacing the PYTHON_PATH and ASSEMBLYAI_API_KEY with yours:
-	refer to https://www.assemblyai.com/app to get your own assemblyai api key
```
PYTHON_PATH=<python-in-you-conda-environment>
ASSEMBLYAI_API_KEY=<your-api-key>
```
## Start the Vite development server:
```
npm run dev
```
The React app should be live at: http://localhost:5173

