from django import views
from django.urls import path, include
from .views import  *
from django.contrib.auth import views as auth_views
from rest_framework_simplejwt.views import (
    TokenRefreshView
)
# from rest_framework_simplejwt.views import TokenBlacklistView


urlpatterns = [
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    # path('token/blacklist/', TokenBlacklistView.as_view(), name='token_blacklist'),

    # path('register/employer/',EmployerRegisterView),
     path('register/employer/',EmployerRegister.as_view(), name='registerEmployer'),
    path('register/jobseeker/',JobSeekerRegisterView.as_view(), name='jobseeker_register'),


    # path('activateUser/<int:uid64>/<int:token>', activate_user, name="activate" ),
    path('activate/(?P<uid64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/',  
        activate_user, name='activate'),  
        
    
    path('login/', LoginAuthToken.as_view(), name='login'),
    path('logout/',LogoutView.as_view(), name='logout' ),

    path('employer/home/', EmployerOnlyView.as_view(), name='employerhome'),
    path('jobseeker/home/', JobSeekerOnlyView.as_view(), name='jobseekerhome'),

    path('updateUser/<str:pk>', UserUpdate.as_view(), name = 'updateUser'),


    path('password_reset/', include('django_rest_passwordreset.urls', namespace='password_reset')),
    path('change-password/', ChangePasswordView.as_view(), name='change-password'),

    path('test/', TestView.as_view(), name='test'),
]