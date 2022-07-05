from django.db import models

# Create your models here.
class Trail(models.Model):
    trail = models.CharField(max_length=50, default="", unique=True)
    length = models.DecimalField(null=False, decimal_places=1, max_digits=4)
    elevation = models.IntegerField(null=False, default=100)
    duration = models.DurationField()
    difficulty = models.CharField(max_length=50, default="")
    rating = models.DecimalField(null=False, decimal_places=1, max_digits=4)
    created_at = models.DateTimeField(auto_now_add=True)