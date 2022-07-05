from rest_framework import serializers
from .models import Trail

class TrailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trail
        fields = ('id', 'trail', 'length', 'elevation', 'duration', 'difficulty', 'rating', 'created_at' )