from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import School
from .serializers import SchoolSerializer

# Create your views here.

@api_view(['GET', 'POST'])
def appHomePage(request):
    if request.method == 'GET':
        schools = School.objects.all()
        serializer = SchoolSerializer(schools, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = SchoolSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
@api_view(['GET', 'PUT', 'DELETE'])
def school_detail(request, pk):
    try:
        oneSchool = School.objects.get(pk=pk)
    except School.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer = SchoolSerializer(oneSchool)
        return Response(serializer.data)
    
    elif request.method == 'PUT':
        serializer = SchoolSerializer(oneSchool, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        oneSchool.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)