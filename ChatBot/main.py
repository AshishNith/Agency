from flask import Flask, request, jsonify
from flask_cors import CORS
from groq import Groq
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()
GROQ_API_KEY = os.getenv("GROQ_API_KEY")

# Init Flask and Groq
app = Flask(__name__)
CORS(app)
groq = Groq(api_key=GROQ_API_KEY)

# Context for chatbot
agency_context = {
    "name": "GoRan",
    "services": [
        "Web Development",
        "UI/UX Design",
        "Digital Marketing",
        "Brand Strategy",
        "Mobile App Development"
    ],
    "expertise": "We specialize in creating digital experiences that combine innovative design with cutting-edge technology",
    "location": "Global, with offices in major tech hubs",
    "experience": "12+ years in digital innovation",
    "approach": "We take a client-first approach, focusing on delivering measurable results through creative solutions"
}

# System prompt
system_prompt = f"""You are the AI assistant for {agency_context["name"]}. 
Your role is to be helpful, professional, and knowledgeable about our services and expertise.

Format your responses using these rules:
1. Use **bold** for emphasis (wrap important terms in double asterisks)
2. Use line breaks to separate paragraphs
3. Keep paragraphs short and focused
4. Use bullet points for lists

Key points about our agency:
- {agency_context["expertise"]}
- We offer: {', '.join(agency_context["services"])}
- {agency_context["experience"]}
- {agency_context["approach"]}

Information about the Founders:
- **Ashish Ranjan**: CEO & Co-Founder, technical head
- **Atharv Golait**: CFO & Co-Founder, Expert in AI, finance and operations

Response Guidelines:
1. Be professional but friendly
2. Structure responses with clear paragraphs
3. Highlight key terms in **bold**
4. Use bullet points for listing services or features
5. Keep responses concise but informative
6. Try to be short, concise, and informative
7. Give to the point answers, avoid unnecessary details
"""

@app.route("/")
def index():
    return "Groq Chatbot with Flask is running!"

@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()
    user_message = data.get("message", "")

    try:
        response = groq.chat.completions.create(
            model="llama3-70b-8192",
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "assistant", "content": "I am ready to help. I will format responses with **bold** text for emphasis and clear paragraphs."},
                {"role": "user", "content": user_message}
            ],
            temperature=0.7,
            max_tokens=500
        )

        ai_reply = response.choices[0].message.content.strip()
        return jsonify({"reply": ai_reply})

    except Exception as e:
        print("Groq error:", str(e))
        return jsonify({"reply": "Sorry, something went wrong while processing your message."}), 500

if __name__ == "__main__":
    app.run(debug=True)
