# buses/models.py
from django.db import models

class Bus(models.Model):
    bus_name = models.CharField(max_length=100)
    departure_city = models.CharField(max_length=100)
    arrival_city = models.CharField(max_length=100)
    departure_time = models.DateTimeField()
    arrival_time = models.DateTimeField()
    ticket_price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.bus_name
