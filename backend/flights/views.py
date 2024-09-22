# flights/views.py
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Flight
from .serializers import FlightSerializer

@api_view(['GET'])
def flight_list(request):
    flights = Flight.objects.all()
    serializer = FlightSerializer(flights, many=True)
    return Response(serializer.data)
