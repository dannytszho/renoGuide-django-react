from django.urls import path
from .views import TrailView

urlpatterns = [
    path('home', TrailView.as_view())
]
