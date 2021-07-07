from django.urls import path
from .views import  DeleteTokenView

app_name = 'users_api'

urlpatterns = [
    path('logout/',DeleteTokenView.as_view(),name='blacklist'),
]