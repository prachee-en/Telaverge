# flights/urls.py
from django.urls import path
from .views import flight_list

urlpatterns = [
    path('flights/', flight_list, name='flight_list'),
]
