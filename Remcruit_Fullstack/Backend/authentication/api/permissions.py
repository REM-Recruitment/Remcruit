from rest_framework.permissions import BasePermission


class IsEmployerUser(BasePermission):
    def has_permission(self, request, view):
        return bool(request.user and request.user.is_employer)
    

class IsJobSeekerUser(BasePermission):
    def has_permission(self, request, view):
        return bool(request.user and request.user.is_jobSeeker)
