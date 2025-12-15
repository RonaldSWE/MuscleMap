from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    pass

@app.route("/meals", methods=["POST"])
def mealPlanner():
    pass