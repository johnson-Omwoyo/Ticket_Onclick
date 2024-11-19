from flask import Blueprint
from flask_restful import Api, reqparse, Resource
from ..models import Ticket, db

bp = Blueprint("ticket", __name__)
api = Api(bp)


class TicketResource(Resource):
    fields = ["user_id", "event_id"]

    def post(self):
        parser = reqparse.RequestParser()
        for field in TicketResource.fields:
            parser.add_argument(field, required=True, help=f"{field} cannot be empty")
        data = parser.parse_args()

        new_ticket = Ticket(user_id=data.get("user_id"), event_id=data.get("event_id"))

        db.session.add(new_ticket)
        db.session.commit()
        return {"message": "Ticket added successfully"}, 201

    def get(self, ticket_id=None):
        if ticket_id:
            ticket = Ticket.query.get_or_404(ticket_id)
            return ticket.to_dict()
        return [ticket.to_dict() for ticket in Ticket.query.all()], 200

    def patch(self, ticket_id):
        if ticket_id:
            ticket = Ticket.query.get_or_404(ticket_id)
            parser = reqparse.RequestParser()
            for field in TicketResource.fields:
                parser.add_argument(field, help=f"{field} is missing")
            data = parser.parse_args()

            for field in TicketResource.fields:
                if data[field]:
                    setattr(ticket, field, data[field])

            db.session.commit()
            return {"message": "Ticket updated successfully"}, 200

    def delete(self, ticket_id):
        if ticket_id:
            ticket = Ticket.query.get_or_404(ticket_id)
            db.session.delete(ticket)
            db.session.commit()
            return {"message": "Ticket deleted successfully"}, 200


api.add_resource(TicketResource, "/ticket", "/ticket/<int:ticket_id>")

"""{
  "user_id":"1",
  "event_id":"2"
}"""
