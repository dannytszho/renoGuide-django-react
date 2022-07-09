from django.db import models

# Create your models here.
class Trail(models.Model):
    name = models.CharField(max_length=50, default="", unique=True)
    length = models.DecimalField(null=False, decimal_places=1, max_digits=4)
    elevation = models.IntegerField(null=False, default=100)
    duration = models.CharField(max_length=20, default="")
    difficulty = models.CharField(max_length=50, default="")
    rating = models.DecimalField(null=False, decimal_places=1, max_digits=4)
    url = models.URLField(max_length=200)
    imageUrl = models.URLField(max_length=500)
    created_at = models.DateTimeField(auto_now_add=True)