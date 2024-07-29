from django.urls import path
from . import views

from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path('', views.handleAccount, name="handleAccount"),
    path('updateinfo', csrf_exempt(views.updateInfo), name="updateInfo"),
    path('register', views.RegistrationView.as_view(), name="register"),
    path('login', views.LoginView.as_view(), name="login"),
    path('logout', views.LogoutView.as_view(), name="logout"),
  
]