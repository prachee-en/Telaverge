# bookings/views.py
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Booking
from .serializers import BookingSerializer


@api_view(['GET', 'POST'])
def booking_list_create(request):
    if request.method == 'GET':
        bookings = Booking.objects.all()
        serializer = BookingSerializer(bookings, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        try:
            if int(request.data.get('customer_age')) < 18:
                return Response({"error": "You must be 18 years or older to book a flight."}, status=400)
        except:
            return Response({"error": "You must be 18 years or older to book a flight."}, status=400)
        serializer = BookingSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
