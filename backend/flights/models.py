# flights/models.py
from django.db import models
from django.core.exceptions import ValidationError

class Flight(models.Model):
    airline = models.CharField(max_length=100)
    flight_number = models.CharField(max_length=20)
    departure_city = models.CharField(max_length=100)
    arrival_city = models.CharField(max_length=100)
    departure_time = models.DateTimeField()
    arrival_time = models.DateTimeField()
    ticket_price = models.DecimalField(max_digits=10, decimal_places=2)
    no_of_seats = models.IntegerField(default=50)

    def __str__(self):
        return f"{self.airline} {self.flight_number}"

    def clean(self):
        if self.departure_time >= self.arrival_time:
            raise ValidationError("Arrival time must be after the departure time.")

    def book_seat(self):
        if self.no_of_seats <= 0:
            raise ValidationError("No seats available.")
        self.no_of_seats -= 1
        self.save()