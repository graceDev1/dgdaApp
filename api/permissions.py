from rest_framework.permissions import BasePermission, IsAuthenticated, SAFE_METHODS
from django.contrib.auth import authenticate

class IsSuperUser(BasePermission):
    
    def has_permission(self, request, view):
        return request.user and request.user.is_superuser


class IsOwner(BasePermission):

    def has_object_permission(self, request, view, obj):
        if request.user:
            if request.user.is_superuser:
                return True
            else:
                return obj.owner == request.user
        else:
            return False