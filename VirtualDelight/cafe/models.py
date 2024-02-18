from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractUser
# Create your models here.


class CustomUser(User):
    phoneNo = models.CharField(max_length=15)
    user_bio = models.TextField(max_length=500, blank=True, null=True)
    profilePicture = models.ImageField(upload_to='profile_pics/', blank=True, null=True)

    def __str__(self):
        return self.username


class Role(models.Model):
    ADMIN = 'admin'
    SUPER_ADMIN = 'super_admin'
    STAFF = 'staff'
    CUSTOMER = 'customer'

    ROLE_CHOICES = [
        (ADMIN, 'Admin'),
        (SUPER_ADMIN, 'Super Admin'),
        (STAFF, 'Staff'),
        (CUSTOMER, 'Customer'),
    ]

    roleId = models.AutoField(primary_key=True)
    roleName = models.CharField(max_length=20, choices=ROLE_CHOICES)

    def __str__(self):
        return self.roleName


class UserRole(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    role = models.ForeignKey(Role, on_delete=models.CASCADE)


class Menu(models.Model):
    BEVERAGES = 'beverages'
    SNACKS = 'snacks'
    DESSERTS = 'desserts'
    DEALS = 'deals'

    STATUS_CHOICES = [
        (BEVERAGES,'Beverages'),
        (SNACKS,'Snacks'),
        (DESSERTS,'Desserts'),
        (DEALS,'Deals'),
    ]
    itemName = models.CharField(max_length=255)
    itemPrice = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.CharField(max_length=9, choices=STATUS_CHOICES)
    menuPic = models.ImageField(upload_to='menu_pics/')

    def __str__(self):
        return self.itemName


class Order(models.Model):
    WAITING = 'waiting'
    PROCESSING = 'processing'
    DELIVERED = 'delivered'

    STATUS_CHOICES = [
        (WAITING, 'Waiting'),
        (PROCESSING, 'Processing'),
        (DELIVERED, 'Delivered'),
    ]
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    orderTotalAmount = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='waiting')
    orderDate = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Order for {self.user.username} - Total Price: {self.orderTotalAmount}"


class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    menu = models.ForeignKey(Menu, on_delete=models.CASCADE)
    itemPrice = models.DecimalField(max_digits=10, decimal_places=2)
    itemQuantity = models.PositiveIntegerField(default=1)

    def __str__(self):
        return f"{self.itemQuantity} x {self.menu.itemName} - Price: {self.itemPrice}"


class Table(models.Model):
    RESERVED = 'reserved'
    FREE = 'free'

    STATUS_CHOICES = [
        (RESERVED, 'Reserved'),
        (FREE, 'Free'),
    ]
    tableNo = models.IntegerField()
    status = models.CharField(max_length=50,choices=STATUS_CHOICES, default='free')

    def __str__(self):
        return f"{self.tableNo}"


class TableReservation(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    tableNo = models.ForeignKey(Table ,on_delete=models.CASCADE)
    startTime = models.DateTimeField()
    duration = models.DurationField()
    noOfPeople = models.IntegerField()

    def __str__(self):
        return f"Table no {self.tableNo.tableNo} reserved for {self.user.username}"


class Delivery(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    orderAmount = models.DecimalField(max_digits=10, decimal_places=2)
    orderItems = models.TextField()
    location = models.CharField(max_length=255)


class Payment(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    paymentAmount = models.DecimalField(max_digits=10, decimal_places=2)
    paymentDate = models.DateTimeField()


class Feedback(models.Model):
    VALUE_CHOICES = (
        (0, '0'),
        (1, '1'),
        (2, '2'),
        (3, '3'),
        (4, '4'),
        (5, '5'),
    )
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    menu = models.ForeignKey(Menu, on_delete=models.CASCADE)
    comments = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    rating = models.IntegerField(choices=VALUE_CHOICES)


class LoyaltyPoint(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    loyaltyPoints = models.IntegerField()
