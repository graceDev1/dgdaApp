from rest_framework import serializers
from .models import User, Forum, Post

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','nom','prenom','email','password')


class ForumSerializer(serializers.ModelSerializer):
    class Meta:
        model = Forum
        fields = ('id','subject','message','user','datePost')

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('id','content','pdf_file','date_post')