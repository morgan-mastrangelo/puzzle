import uuid
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin

class UserModel(AbstractBaseUser):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    intid = models.IntegerField(auto_created=True, unique=True)
    fullname = models.CharField(max_length=128)
    username = models.CharField(max_length=255)
    email = models.EmailField()
    password = models.CharField(max_length=255)
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now_add=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'fullname', 'email']

    class Meta:
        db_table = 'users'
        ordering = ['createdAt']
        
        def __str__(self) -> str:
            return self.email
        

class GameHistoryModel(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=128)
    email = models.EmailField()
    score = models.FloatField()
    limitTime = models.IntegerField()
    overTime = models.IntegerField()
    finishedAt = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'game_history'
        ordering = ['-finishedAt']

        def __str__(self) -> str:
            return self.finishedAt