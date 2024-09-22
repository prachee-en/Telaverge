# Generated by Django 5.0.6 on 2024-09-22 19:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bookings', '0002_booking_transport_type'),
    ]

    operations = [
        migrations.AddField(
            model_name='booking',
            name='customer_age',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='booking',
            name='customer_email',
            field=models.EmailField(default='', max_length=254),
        ),
    ]
