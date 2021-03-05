from flask import Flask
import json

from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/top_ten_gold')
def top_ten_gold():

    with open('workbook/json/top_ten_gold.json') as f:
        data = json.load(f)

    return data

@app.route('/top_ten_silver')
def top_ten_silver():
    return 'Hello, World!'

@app.route('/top_ten_bronze')
def top_ten_bronze():
    return 'Hello, World!'



if __name__ == "__main__":
    app.run(debug=True)