from django.urls import path
from . views import appHomePage, school_detail

urlpatterns = [
    path('schools/', appHomePage, name='home'),
    path('schools/<slug:pk>', school_detail, name='school-detail'),
]
