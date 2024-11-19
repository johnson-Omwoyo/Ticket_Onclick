from flask import Flask
from flask_jwt_extended import JWTManager
from .resources import event_resource, user_resource, payment_resource, ticket_resource
from flask_migrate import Migrate
from flask_cors import CORS
from .models import db
from .config import Config
from dotenv import load_dotenv
from flask_jwt_extended import JWTManager
from flask_cors import CORS
import os

load_dotenv()


def create_app():

    app = Flask(__name__)

    app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv("DATABASE_URL")
    app.config["JWT_SECRET_KEY"] = os.getenv("JWT_SECRET_KEY")
    app.config["SECRET_KEY"] = os.getenv("SECRET_KEY")

    CORS(app)

    jwt = JWTManager(app)

    app.register_blueprint(event_resource.bp)
    app.register_blueprint(user_resource.bp)
    app.register_blueprint(payment_resource.bp)
    app.register_blueprint(ticket_resource.bp)

    db.init_app(app)
    migrate = Migrate(app, db)
    return app
