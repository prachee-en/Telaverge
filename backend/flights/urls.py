# flights/urls.py
from django.urls import path
from .views import flight_list

urlpatterns = [
    path('/<str:from_city>/<str:to_city>/<str:date>/', flight_list, name='flight_list'),
]
