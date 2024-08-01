from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from .views import appHomePage, school_detail, municipalImages,singleMunicipalImage

urlpatterns = [
    path("schools/", appHomePage, name="home"),
    path("schools/<slug:pk>", school_detail, name="school-detail"),
    
    path("municipal-images", municipalImages, name="municipal-images"),
    path("municipal-images/<slug:pk>", singleMunicipalImage, name="municipal-images-details")
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)