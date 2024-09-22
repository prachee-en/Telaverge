# buses/views.py
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Bus
from .serializers import BusSerializer

@api_view(['GET'])
def bus_list(request):
    buses = Bus.objects.all()
    serializer = BusSerializer(buses, many=True)
    return Response(serializer.data)
