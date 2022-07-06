from django.shortcuts import render
from rest_framework import generics

from .serializers import TrailSerializer
from .models import Trail

# Create your views here.

class TrailView(generics.ListAPIView):
    queryset = Trail.objects.all()
    serializer_class = TrailSerializer

