from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import School, MunicipalImages
from .serializers import SchoolSerializer, MunicipalImagesSerializer


# Create your views here.


@api_view(["GET", "POST"])
def appHomePage(request):
    if request.method == "GET":
        schools = School.objects.all()
        serializer = SchoolSerializer(schools, many=True)
        return Response(serializer.data)

    elif request.method == "POST":
        serializer = SchoolSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(["GET", "PUT", "DELETE"])
def school_detail(request, pk):
    try:
        oneSchool = School.objects.get(pk=pk)
    except School.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == "GET":
        serializer = SchoolSerializer(oneSchool)
        return Response(serializer.data)

    elif request.method == "PUT":
        serializer = SchoolSerializer(oneSchool, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == "DELETE":
        oneSchool.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    

# municipal images
@api_view(["GET", "POST"])
def municipalImages(request):
    if request.method == "GET":
        images = MunicipalImages.objects.all()
        imagesSerializer = MunicipalImagesSerializer(images, many=True)
        return Response(imagesSerializer.data)
    elif request.method == "POST":
        imageSerializer = MunicipalImagesSerializer(data=request.data)
        if imageSerializer.is_valid():
            imageSerializer.save()
            return Response(imageSerializer.data, status=status.HTTP_201_CREATED)
        return Response(imageSerializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET", "PUT", "DELETE"])
def singleMunicipalImage(request, pk):
    try:
        oneImage = MunicipalImages.objects.get(pk=pk)
    except MunicipalImages.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == "GET":
        imageSerializer = MunicipalImagesSerializer(oneImage)
        return Response(imageSerializer.data)
    
    elif request.method == "PUT":
        imageSerializer = MunicipalImagesSerializer(oneImage, data=request.data)
        if imageSerializer.is_valid():
            imageSerializer.save()
            return Response(imageSerializer.data, status=status.HTTP_202_ACCEPTED)
        return Response(imageSerializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == "DELETE":
        oneImage.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    