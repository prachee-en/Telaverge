# buses/views.py
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Bus
from .serializers import BusSerializer
from django.http import HttpResponseBadRequest


@api_view(['POST'])
def bus_list(request):
    from_city = request.data.get('from_city')
    to_city = request.data.get('to_city')
    date = request.data.get('date')

    if not from_city or not to_city or not date:
        return HttpResponseBadRequest("Missing required parameters")

    buses = Bus.objects.filter(departure_city=from_city, arrival_city=to_city, departure_time__date=date)
    serializer = BusSerializer(buses, many=True)
    return Response(serializer.data)
