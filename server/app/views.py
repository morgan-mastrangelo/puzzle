from app.models import UserModel, GameHistoryModel
from app.serializers import UserSerializer, GameHistorySerializer
from rest_framework import viewsets

class UserViewSet(viewsets.ModelViewSet):
    queryset = UserModel.objects.all()
    serializer_class = UserSerializer

class GameHistoryViewSet(viewsets.ModelViewSet):
    queryset = GameHistoryModel.objects.all()
    serializer_class = GameHistorySerializer