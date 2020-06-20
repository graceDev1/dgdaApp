from rest_framework import serializers
from .models import User, Forum

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('nom','prenom','email','password')


class ForumSerializer(serializers.ModelSerializer):
    class Meta:
        model = Forum
        fields = ('subject','message','user','datePost')