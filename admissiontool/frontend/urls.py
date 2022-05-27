from django.urls import path, include

from .views import HomeRoute
from .api_views import VerifyView
urlpatterns = [
    path("", HomeRoute.as_view(), name="home" ),
    path("api/verify", VerifyView.as_view(), name="verify")
    
    
]