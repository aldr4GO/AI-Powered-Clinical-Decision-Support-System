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
- change the PYTHON_PATH in the .env file in the "AI-Powered-Clinical-Decision-Support-System" directory.
-	Get the python path from the below mentioned command.
```
where python

```
-	Change the <ASSEMBLYAI_API_KEY> in server\transcription.py from yours
-	refer to https://www.assemblyai.com/app to get your own assemblyai api key
## Start the Vite development server:
```
npm run dev
```


The React app should be live at: http://localhost:5173
![1](https://github.com/user-attachments/assets/2dd5358f-1a6e-480b-811a-f37f37800158)
![2](https://github.com/user-attachments/assets/360a9bb5-3e6e-431d-8736-03427e72dae7)
The React app should be live at: http://localhost:5000

## Upload the audio file and wait for sometime to see the results.
![3](https://github.com/user-attachments/assets/1e18b1fc-eaff-427e-981c-47faa6b2386e)
![4](https://github.com/user-attachments/assets/c6ac1806-9156-40cc-89f7-9f21596f709a)
![5](https://github.com/user-attachments/assets/8f3e1f3e-09bd-4f8e-946c-b5c1dad23169)
