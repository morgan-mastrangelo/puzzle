from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register('users', views.UserViewSet)
router.register('history', views.GameHistoryViewSet)

urlpatterns = [
    path('', include(router.urls))
]
