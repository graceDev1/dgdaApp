from django.shortcuts import render
from rest_framework import viewsets,permissions
from .models import User, Forum, Post
from .serializers import ForumSerializer, PostSerializer
from .permissions import IsOwner, IsSuperUser


class ForumViewSet(viewsets.ModelViewSet):
    queryset = Forum.objects.all()
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = ForumSerializer


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    
