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

## Run the app
```
uvicorn app.main:app --reload
```


## Alternatively you can use docker
You call pull the image from docker-hub:
```
docker pull ritesh778/apipython

```
Or build the and run the image:
```
docker-compose -f docker-compose-dev.yml up -d --build

```
