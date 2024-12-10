from flask import Flask, request, jsonify
# Load model directly
from transformers import AutoTokenizer, AutoModelForSeq2SeqLM
from flask_cors import CORS

app = Flask(__name__)
CORS(app) 

@app.route('/summarised_text', methods=['POST'])
def generate():
    prompt = request.json.get('prompt')
    print(prompt)
    tokenizer = AutoTokenizer.from_pretrained("google-t5/t5-base")
    model = AutoModelForSeq2SeqLM.from_pretrained("google-t5/t5-base")
    sequence = (prompt)

                    
    inputs=tokenizer.encode("sumarize: " +sequence,return_tensors='pt', max_length=512, truncation=True)
    output = model.generate(inputs, min_length=80, max_length=100)
    decoded_output = tokenizer.decode(output[0], skip_special_tokens=True)

    return jsonify({'summarised_text': decoded_output})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
