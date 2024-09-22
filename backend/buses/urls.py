# buses/urls.py
from django.urls import path
from .views import bus_list

urlpatterns = [
    path('', bus_list, name='bus_list'),
]
