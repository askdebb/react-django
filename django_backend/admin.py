from django.contrib import admin
from .models import School, MunicipalImages

# Register your models here.


@admin.register(School)
class SchoolAdmin(admin.ModelAdmin):
    list_display = (
        "school_name",
        "circuit_name",
        "siso_name",
        "level",
        "school_type",
    )
    
@admin.register(MunicipalImages)
class MunicipalImagesAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "image"
    )