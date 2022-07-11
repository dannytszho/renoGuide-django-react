from django.urls import path
from .views import TrailRetrieveUpdateDestroyView, TrailCreateView

urlpatterns = [
    path('trails/<int:id>', TrailRetrieveUpdateDestroyView.as_view()),
    path('trails', TrailCreateView.as_view()),
]