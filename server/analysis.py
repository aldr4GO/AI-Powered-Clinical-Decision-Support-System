from ollama import chat
from ollama import ChatResponse



class AnalysisService:

        
    def analyze_text(self, text):
        try:

            
            dd: ChatResponse = chat(model='llama3.2', messages=[
            {
                'role': 'user',
                'content': f'''instruct = """You are an AI assistant trained to provide differential diagnoses and next steps based on patient-reported symptoms. Given a detailed description of a patient's symptoms, your task is to:

                                            Identify Differential Diagnoses:

                                            List the most likely medical conditions that could explain the reported symptoms.
                                            Prioritize the diagnoses based on their likelihood, starting with the most probable.
                                            Briefly explain the reasoning behind each diagnosis, connecting the symptoms to the conditions.
                                            Suggest Next Steps:

                                            Recommend the appropriate medical tests (blood tests, imaging, etc.) that could confirm or rule out each diagnosis.
                                            Mention any immediate actions the patient should take, such as medications (over-the-counter or prescription), lifestyle changes, or emergency care if the symptoms suggest a severe condition.
                                            If a specialist consultation or medical operation is necessary, specify which type of doctor (e.g., cardiologist, neurologist) the patient should see.
                                            Ensure your output is structured clearly under these two headings:

                                            Differential Diagnoses: [List and explain]
                                            Next Steps: [Tests, treatments, and actions]
                                            If the information provided is insufficient, state the additional details required (such as symptom duration, severity, or medical history) rather than making unsupported assumptions.
                                            This is the conversation:"""

                                            {text}
                                            ''',
            },
            ])
            # or access fields directly from the response object
            SOAP: ChatResponse = chat(model='llama3.2', messages=[
            {
                'role': 'user',
                'content': f'''You are an AI assistant trained to generate SOAP notes (Subjective, Objective, Assessment, Plan) based on doctor-patient conversations. Given a text input containing a detailed conversation between a doctor and a patient, your task is to carefully extract and organize the relevant information into the SOAP format.

                                Subjective (S): Identify the patient's reported symptoms, feelings, concerns, and medical history mentioned during the conversation. This includes quotes or descriptions of how the patient feels and what they have experienced.
                                Objective (O): Extract measurable and observable data provided by the doctor, such as vital signs, physical examination findings, lab test results, or any other factual observations noted.
                                Assessment (A): Summarize the doctor’s clinical assessment or diagnosis based on the subjective and objective data. Mention any differential diagnoses if provided.
                                Plan (P): Clearly outline the doctor’s plan of action — including treatment recommendations, medications prescribed, tests ordered, follow-up plans, and lifestyle advice.
                                Also ensure that there is a line gap in the ouput after each section of SOAP.
                                
                                Subjective (S): Identify the patient's reported symptoms, feelings, concerns, and medical history mentioned during the conversation. Use clear bullet points for each detail:

                                    Chief Complaint (CC): [Briefly describe the primary reason for the patient's visit]
                                   History of Present Illness (HPI):
                                    [Key details about the current issue — onset, duration, characteristics, associated symptoms, etc.]
                                    Past Medical History (PMH):
                                    [Relevant past illnesses, surgeries, or chronic conditions]
                                    Social History (SH):
                                    [Smoking, alcohol use, occupation, living conditions, etc.]
                                    Review of Systems (ROS):
                                    Respiratory: [Symptoms like cough, shortness of breath, etc.]
                                    General: [Fatigue, weight loss, fever, etc.]
                                    Cardiovascular: [Chest pain, palpitations, etc.]
                                Ensure that each section is concise but complete. If certain information is missing from the conversation, mention 'Not discussed' instead of making assumptions. Format the output clearly under these four headings.
                                        This is the conversation:
                                        {text}
                                        ''',
            },
            ])

            return SOAP['message']['content'], dd['message']['content']
            # return SOAP['message']['content']
        except Exception as e:
            print(f"Analysis error: {str(e)}")
            raise Exception("Failed to analyze text")