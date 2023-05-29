from django.urls import path, include
from rest_framework import routers
from app.views import UserView, GameHistoryView

urlpatterns = [
    path('users/', UserView.as_view()),
    path('history/', GameHistoryView.as_view())
]
