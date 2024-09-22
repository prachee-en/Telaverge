# buses/models.py
from django.db import models
from django.core.exceptions import ValidationError

class Bus(models.Model):
    bus_name = models.CharField(max_length=100)
    departure_city = models.CharField(max_length=100)
    arrival_city = models.CharField(max_length=100)
    departure_time = models.DateTimeField()
    arrival_time = models.DateTimeField()
    ticket_price = models.DecimalField(max_digits=10, decimal_places=2)
    no_of_seats = models.IntegerField(default=50)

    def __str__(self):
        return self.bus_name
    
    def clean(self):
        if self.departure_time >= self.arrival_time:
            raise ValidationError("Arrival time must be after the departure time.")

    def book_seat(self):
        if self.no_of_seats <= 0:
            raise ValidationError("No seats available.")
        self.no_of_seats -= 1
        self.save()
