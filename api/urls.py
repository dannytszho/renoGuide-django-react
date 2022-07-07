from django.urls import path
from .views import TrailAPIView, TrailView

urlpatterns = [
    path('home', TrailView.as_view()),
    path('trails', TrailAPIView.as_view()),
    path('trails/<int:id>', TrailAPIView.as_view())
]
