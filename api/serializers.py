from rest_framework import serializers
from .models import Forum, Post


class ForumSerializer(serializers.ModelSerializer):
    class Meta:
        model = Forum
        fields = ('id','subject','message','datePost')

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('id','content','pdf_file','date_post')