from django.shortcuts import render
from rest_framework import viewsets
from .models import User, Forum
from .serializers import UserSerializer, ForumSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class ForumViewSet(viewsets.ModelViewSet):
    queryset = Forum.objects.all()
    serializer_class = ForumSerializer
