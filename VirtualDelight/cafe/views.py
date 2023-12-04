from django.shortcuts import render
from rest_framework.decorators import permission_classes, api_view
from rest_framework.response import Response
from rest_framework import viewsets, generics, status,  filters
from rest_framework.views import APIView
from .serializer import *
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated,AllowAny
from rest_framework.filters import SearchFilter
from rest_framework.authtoken.models import Token
from django.db.models import Q, Count
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings
import json
from django.db.models import Avg
from pymongo import MongoClient

# Create your views here.

class RegisterView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = RegisterSerializer(data=request.data)

        if serializer.is_valid():
            validated_data = serializer.validated_data
            # Print the validated data received from the user
            print("User registration data:", validated_data)
            user = serializer.save()
            return Response({
                "user": serializer.data,
            }, status=status.HTTP_201_CREATED)

        response_data = {
            'message': 'Registration failed.',
            'errors': serializer.errors
        }
        return Response(response_data, status=status.HTTP_400_BAD_REQUEST)


class LoginView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data
            return Response({
                "user": serializer.data}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
