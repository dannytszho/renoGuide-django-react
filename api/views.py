
from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response

from .serializers import TrailSerializer
from .models import Trail

# Create your views here.

class TrailView(generics.CreateAPIView):
    queryset = Trail.objects.all()
    serializer_class = TrailSerializer

class TrailAPIView(APIView):
    serializer_class = TrailSerializer

    def get_queryset(self):
        trails = Trail.objects.all()
        return trails
    
    def get(self, request, *args, **kwargs):
        try:
            trail_id = kwargs['id']
            if id != None:
                trail = Trail.objects.get(id=trail_id)
                serializer = TrailSerializer(trail)
        except:
            trails = self.get_queryset()
            serializer = TrailSerializer(trails, many=True)

        return Response(serializer.data)


    