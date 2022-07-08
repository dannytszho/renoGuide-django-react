from rest_framework import serializers
from .models import Trail

class TrailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trail
        fields = ['id', 'name', 'length', 'elevation', 'duration', 'difficulty', 'rating', 'url', 'imageUrl', 'created_at' ]