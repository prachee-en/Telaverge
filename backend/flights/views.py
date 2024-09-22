# flights/views.py
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Flight
from .serializers import FlightSerializer
from django.http import HttpResponseBadRequest

@api_view(['GET'])
def flight_list(request, from_city, to_city, date):
    if not from_city or not to_city or not date:
        return HttpResponseBadRequest("Missing required parameters")
    flights = Flight.objects.filter(departure_city=from_city, arrival_city=to_city, departure_time__date=date)
    serializer = FlightSerializer(flights, many=True)
    return Response(serializer.data)
