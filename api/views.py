from django.shortcuts import render
from rest_framework import viewsets,permissions
from .models import Forum, Post
from .serializers import ForumSerializer, PostSerializer



class ForumViewSet(viewsets.ModelViewSet):
    queryset = Forum.objects.all()
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = ForumSerializer
    


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]
    
