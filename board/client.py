from flask import Flask, request, jsonify
from flask_restful import Resource, Api, reqparse
from flask_cors import CORS
from waitress import serve

app = Flask(__name__)
# Enable CORS
CORS(app)

@app.route("/", methods=["POST"])
def predict():
	result = 0
	if request.method == "POST":    		
		input_value = request.form["input_value"]
		# ประมวลผล
		# ...
		# ตัวอย่างเช่น รับค่ามา แล้ว คูณ 2
		result=input_value * 2
		# ###
	return jsonify(
		prediction=result
	),201
server(app,host='0.0.0.0', port=8080)
