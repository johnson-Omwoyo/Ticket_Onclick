from flask import Blueprint
from flask_restful import Api, reqparse, Resource
from flask_bcrypt import generate_password_hash
from ..models import User, db

bp = Blueprint("user", _name_)
api = Api(bp)


class UserResource(Resource):
    fields = ["name", "email", "phone", "password", "organizer"]

    def post(self):
        parser = reqparse.RequestParser()
        for field in UserResource.fields:
            parser.add_argument(field, required=True, help=f"{field} cannot be empty")
        data = parser.parse_args()

        hashed_password = generate_password_hash(data.get("password")).decode("utf-8")

        new_user = User(
            name=data.get("name"),
            email=data.get("email"),
            phone=data.get("phone"),
            password_hash=hashed_password,
            organizer=(
                data.get("organizer").lower() == "true"
                if "organizer" in data
                else False
            ),
        )
        db.session.add(new_user)
        db.session.commit()
        return {"message": "User added successfully"}, 201

    def get(self, user_id=None):
        if user_id:
            user = User.query.get_or_404(user_id)
            return user.to_dict()
        return [user.to_dict() for user in User.query.all()], 200

    def patch(self, user_id):
        if user_id:
            user = User.query.get_or_404(user_id)
            parser = reqparse.RequestParser()
            for field in ["name", "email", "phone", "organizer"]:
                parser.add_argument(field, help=f"{field} is missing")
            data = parser.parse_args()

            for field in ["name", "email", "phone"]:
                if data[field]:
                    setattr(user, field, data[field])
            if "organizer" in data and data["organizer"] is not None:
                user.organizer = data["organizer"].lower() == "true"
            db.session.commit()
            return {"message": "Update successful"}, 200

    def delete(self, user_id):
        if user_id:
            user = User.query.get_or_404(user_id)
            db.session.delete(user)
            db.session.commit()
            return {"message": "User deleted successfully"}, 200


api.add_resource(UserResource, "/user", "/user/<int:user_id>")