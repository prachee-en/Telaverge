# bookings/models.py
from django.db import models
from flights.models import Flight
from buses.models import Bus

class Booking(models.Model):
    flight = models.ForeignKey(Flight, on_delete=models.CASCADE, null=True, blank=True)
    bus = models.ForeignKey(Bus, on_delete=models.CASCADE, null=True, blank=True)
    customer_name = models.CharField(max_length=100)
    booking_date = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=50, default="Pending")

    def __str__(self):
        return f"Booking by {self.customer_name} on {self.booking_date}"
