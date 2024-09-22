# bookings/urls.py
from django.urls import path
from .views import booking_list_create

urlpatterns = [
    path('', booking_list_create, name='booking_list_create'),
]
