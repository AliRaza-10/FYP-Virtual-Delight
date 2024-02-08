from django.contrib import admin
from .models import *
# Register your models here.
admin.site.register(CustomUser)
admin.site.register(Role)
admin.site.register(UserRole)
admin.site.register(Menu)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(TableReservation)
admin.site.register(Delivery)
admin.site.register(Payment)
admin.site.register(Feedback)
admin.site.register(LoyaltyPoint)