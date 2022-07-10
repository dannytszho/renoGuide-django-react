
from unicodedata import name
from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response

from .serializers import TrailSerializer
from .models import Trail

# Create your views here.

class TrailCreateView(generics.ListCreateAPIView):
    queryset = Trail.objects.all()
    serializer_class = TrailSerializer

    def perform_create(self, serializer):
        serializer.save()

    def get_queryset(self):
        return Trail.objects.filter()

class TrailRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Trail.objects.all()
    serializer_class = TrailSerializer
    lookup_field = 'id'

    def get_queryset(self):
        trails = Trail.objects.all()
        return trails




    