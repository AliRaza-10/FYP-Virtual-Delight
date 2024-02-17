from django.shortcuts import render
from rest_framework.decorators import permission_classes, api_view
from rest_framework.response import Response
from rest_framework import viewsets, generics, status,  filters
from rest_framework.views import APIView
from .serializer import *
from rest_framework.permissions import AllowAny,AllowAny
from rest_framework.filters import SearchFilter
from rest_framework.authtoken.models import Token
from django.db.models import Q, Count
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.conf import settings
import json
from django.db.models import Avg
from pymongo import MongoClient
from .serializer import *
from .models import Order, OrderItem, Payment, TableReservation, Role, UserRole, Menu, LoyaltyPoint, Feedback, Delivery
from django.contrib.auth import authenticate, login

# Create your views here.
class index(APIView):
    def get(self, request, *args, **kwargs):
        user_instance = User.objects.get(id=1)
        print(user_instance)
        return Response({"message": "Welcome to Virtual Delight"})


class RegisterView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, format='json'):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message":"User created Successfully"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, format='json'):
        username = request.data.get('username', None)
        password = request.data.get('password', None)
        user = authenticate(request,username=username, password=password)
        if user:
            login(request, user)
            return Response({'success': True, 'message': 'Login successful!'}, status=status.HTTP_200_OK)
        else:
            return Response({'success': False, 'message': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)


class DeliveryView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, *args, **kwargs):
        delivery_instance = Delivery.objects.all()
        serializer = DeliverySerializer(delivery_instance, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        serializer = DeliverySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class FeedbackView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, *args, **kwargs):
        feedback_instance = Feedback.objects.all()
        serializer = FeedbackSerializer(feedback_instance, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        serializer = FeedbackSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoyaltyPointView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, *args, **kwargs):
        loyalty_instance = LoyaltyPoint.objects.all()
        serializer = LoyaltyPointSerializer(loyalty_instance, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        serializer = LoyaltyPointSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class MenuView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, *args, **kwargs):
        menu_instance = Menu.objects.all()
        serializer = MenuSerializer(menu_instance, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        serializer = MenuSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class OrderView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, *args, **kwargs):
        order_instance = Order.objects.all()
        serializer = OrderSerializer(order_instance, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        serializer = OrderSerializer(data=request.data)
        if serializer.is_valid():
            order = serializer.save()
            order_items_data = request.data.get('order_items',[])
            for item_data in order_items_data:
                menu_id = item_data.get('menu')
                menu_instance = Menu.objects.get(pk=menu_id)
                item_data.pop('menu', None)
                OrderItem.objects.create(order=order, menu=menu_instance, **item_data)

            return Response(OrderSerializer(order).data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class OrderItemView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, *args, **kwargs):
        orderitem_instance = OrderItem.objects.all()
        serializer = OrderItemSerializer(orderitem_instance, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        serializer = OrderItemSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class OrderTrackingView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, *args, **kwargs):
        ordertracking_instance = OrderTracking.objects.all()
        serializer = OrderTrackingSerializer(ordertracking_instance, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        serializer = OrderTrackingSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class PaymentView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, *args, **kwargs):
        payment_instance = Payment.objects.all()
        serializer = PaymentSerializer(payment_instance, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        serializer = PaymentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class TableView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, *args, **kwargs):
        table_instance = Table.objects.all()
        serializer = TableSerializer(table_instance, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        serializer = TableSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class TableReservationView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, *args, **kwargs):
        tablereservation_instance = TableReservation.objects.all()
        serializer = TableReservationSerializer(tablereservation_instance, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        serializer = TableReservationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class RoleView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, *args, **kwargs):
        role_instance = Role.objects.all()
        serializer = RoleSerializer(role_instance, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        serializer = RoleSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserRoleView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, *args, **kwargs):
        userrole_instance = UserRole.objects.all()
        serializer = UserRoleSerializer(userrole_instance, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        serializer = UserRoleSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)