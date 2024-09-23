# buses/urls.py
from django.urls import path
from .views import bus_list

urlpatterns = [
    path('/<str:from_city>/<str:to_city>/<str:date>/', bus_list, name='bus_list'),
]
