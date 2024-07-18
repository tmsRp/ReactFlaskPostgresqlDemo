from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

# Initialize Flask app
app = Flask(__name__)
# Wrap app into CORS (Enables cross origin requests to app)
CORS(app)

# Initialize Database
# app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///mydatabase.db"
# app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://postgres:password@localhost:5432/react-flask-sql-demo"
# app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://postgres:password@db:5432/react-flask-sql-demo"
# app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://postgres:password@host.docker.internal:5432/react-flask-sql-demo"
app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://postgres:password@mydb:5432/react-flask-sql-demo2"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)
