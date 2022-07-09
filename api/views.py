
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


class TrailAPIView(APIView):
    serializer_class = TrailSerializer

    def get_queryset(self):
        trails = Trail.objects.all()
        return trails
    """
    Retrieve Trail data
    """
    def get(self, request, *args, **kwargs):
        try:
            trail_id = kwargs['id']
            if id != None:
                try:
                    trail = Trail.objects.get(id=trail_id)
                    serializer = TrailSerializer(trail)
                except Trail.DoesNotExist:
                    return Response(status=status.HTTP_404_NOT_FOUND)
        except:
            trails = self.get_queryset()
            serializer = TrailSerializer(trails, many=True)

        return Response(serializer.data)


    