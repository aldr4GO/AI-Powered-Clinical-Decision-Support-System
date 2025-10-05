<!--META
{
  "title": "AI Powered Clinical Decision Support System",
  "desc_portfolio": "Integrated AI models for speech-to-text and text analysis, generating diagnosis faster, ensuring real-time feedback for doctors",
  "category": FullStack
}
META-->

![thumbnail.png](https://github.com/aldr4GO/AI-Powered-Clinical-Decision-Support-System/blob/main/thumbnail.png)

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
npm install
npm run dev
```
![0](https://github.com/user-attachments/assets/604c72af-087d-47f4-bffb-7b704ede86ee)


The React app should be live at: http://localhost:5173
## press the Start button and iniitalize recording, after completing the discussion,press Stop.
## OR
## Upload the audio file and wait for sometime to see the results.
![image](https://github.com/user-attachments/assets/f1e6c15f-1153-4107-8006-d571fb06b247)

## Results
![1](https://github.com/user-attachments/assets/a1add57b-ddf6-441b-b591-eec8da86dc87)
![2](https://github.com/user-attachments/assets/32a94e34-11bf-4c47-9dce-fad399bb4fcc)

![3](https://github.com/user-attachments/assets/4a2fe2ed-1c1b-48aa-8267-c9eb7c08bbf9)
![4](https://github.com/user-attachments/assets/b37b9ca7-9d68-450f-8d19-4916b8bd3efa)
![5](https://github.com/user-attachments/assets/2264a442-159d-47ff-9a08-e1b79ab4e1ad)

# Will add new features like live transcription, streaming, video/audio call functionality soon
# Thank You
