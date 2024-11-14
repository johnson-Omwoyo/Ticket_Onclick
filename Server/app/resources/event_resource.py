from flask import Blueprint
from flask_restful import Api, reqparse, Resource
from datetime import datetime
from ..models import Event, db

bp = Blueprint("event", _name_)
api = Api(bp)


class EventResource(Resource):
    fields = [
        "name",
        "category",
        "organizer_id",
        "location",
        "time",
        "date",
        "capacity",
    ]

    def post(self):
        parser = reqparse.RequestParser()
        for field in EventResource.fields:
            parser.add_argument(field, required=True, help=f"{field} cannot be empty")
        data = parser.parse_args()

        time_obj = datetime.strptime(data["time"], "%H:%M:%S").time()
        date_obj = datetime.strptime(data["date"], "%Y-%m-%d").date()

        new_event = Event(
            name=data["name"],
            category=data["category"],
            organizer_id=data["organizer_id"],
            location=data["location"],
            time=time_obj,
            date=date_obj,
            capacity=data["capacity"],
        )

        db.session.add(new_event)
        db.session.commit()
        return {"message": "Event added successfully"}, 201

    def get(self, event_id=None):
        if event_id:
            event = Event.query.get_or_404(event_id)
            return event.to_dict(
                rules=("-organized_events", "-payments.event", "-tickets.event")
            )
        return [
            event.to_dict(
                rules=("-organized_events", "-payments.event", "-tickets.event")
            )
            for event in Event.query.all()
        ], 200

    def patch(self, event_id):
        event = Event.query.get_or_404(event_id)
        parser = reqparse.RequestParser()
        for field in EventResource.fields:
            parser.add_argument(field, required=False, help=f"{field} is missing")
        data = parser.parse_args()

        for field in EventResource.fields:
            if data[field] is not None:
                if field == "time":
                    setattr(
                        event, field, datetime.strptime(data[field], "%H:%M:%S").time()
                    )
                elif field == "date":
                    setattr(
                        event, field, datetime.strptime(data[field], "%Y-%m-%d").date()
                    )
                else:
                    setattr(event, field, data[field])

        db.session.commit()
        return {"message": "Update successful"}, 200

    def delete(self, event_id):
        event = Event.query.get_or_404(event_id)
        db.session.delete(event)
        db.session.commit()
        return {"message": "Event deleted successfully"}, 200


api.add_resource(EventResource, "/event", "/event/<int:event_id>")