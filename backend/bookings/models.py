# bookings/models.py
from django.db import models
from flights.models import Flight
from buses.models import Bus
from django.core.exceptions import ValidationError

class Booking(models.Model):
    TRANSPORT_CHOICES = [
        ('flight', 'Flight'),
        ('bus', 'Bus'),
    ]

    transport_type = models.CharField(max_length=10, choices=TRANSPORT_CHOICES, default='flight')
    flight = models.ForeignKey(Flight, on_delete=models.CASCADE, null=True, blank=True)
    bus = models.ForeignKey(Bus, on_delete=models.CASCADE, null=True, blank=True)
    customer_name = models.CharField(max_length=100)
    customer_age = models.PositiveSmallIntegerField(default=0)
    customer_email = models.EmailField(max_length=254, default="")
    booking_date = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=50, default="Pending")

    def clean(self):
        # Ensure that either a flight or a bus is selected based on transport type
        if self.transport_type == 'flight' and not self.flight:
            raise ValidationError("Flight is required for flight booking.")
        if self.transport_type == 'bus' and not self.bus:
            raise ValidationError("Bus is required for bus booking.")

    def save(self, *args, **kwargs):
        # Logic to reduce seat count for either flight or bus
        if self.transport_type == 'flight' and self.flight:
            self.flight.book_seat()
        elif self.transport_type == 'bus' and self.bus:
            self.bus.book_seat()
        super().save(*args, **kwargs)

    def __str__(self):
        if self.transport_type == 'flight' and self.flight:
            return f"Booking by {self.customer_name} for Flight {self.flight.flight_number}"
        elif self.transport_type == 'bus' and self.bus:
            return f"Booking by {self.customer_name} for Bus {self.bus.id}"
        return f"Booking by {self.customer_name}"