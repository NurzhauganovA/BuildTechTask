from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    username = None
    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []