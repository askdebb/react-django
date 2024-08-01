from rest_framework import serializers
from .models import School, MunicipalImages

class SchoolSerializer(serializers.ModelSerializer):
    class Meta:
        model = School
        fields = "__all__"

    def validate_year_established(self, value):
        if value < 1800 or value > 2100:
            raise serializers.ValidationError("Enter a valid year")
        return value
    
class MunicipalImagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = MunicipalImages
        fields = "__all__"