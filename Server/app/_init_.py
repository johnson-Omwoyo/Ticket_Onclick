from flask import Flask
from flask_jwt_extended import JWTManager
from .resources import event_resource, user_resource, payment_resource, ticket_resource
from flask_migrate import Migrate
from .models import db


def create_app():

    app = Flask(__name__)
    app.register_blueprint(event_resource.bp)
    app.register_blueprint(user_resource.bp)
    app.register_blueprint(payment_resource.bp)
    app.register_blueprint(ticket_resource.bp)

    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///trial.db"
    db.init_app(app)
    migrate = Migrate(app, db)
    return app
