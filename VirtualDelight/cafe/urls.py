from django.urls import path

from . import views
urlpatterns = [
    
    path('', views.index.as_view(), name='index'),
    path('register', views.RegisterView.as_view(), name='register'),
    path('login', views.LoginView.as_view(), name='login'),
    path('delivery', views.DeliveryView.as_view(), name='delivery'),
    path('feedback', views.FeedbackView.as_view(), name='feedback'),
    path('loyalty', views.LoyaltyPointView.as_view(), name='loyalty'),
    path('menu', views.MenuView.as_view(), name='menu'),
    path('order', views.OrderView.as_view(), name='order'),
    path('orderitem', views.OrderItemView.as_view(), name='orderitem'),
    path('ordertracking', views.OrderTrackingView.as_view(), name='ordertracking'),
    path('payment', views.PaymentView.as_view(), name='payment'),
    path('table', views.TableView.as_view(), name='table'),
    path('reservation', views.TableReservationView.as_view(), name='reservation'),
    path('role', views.RoleView.as_view(), name='role'),
    path('userrole', views.UserRoleView.as_view(), name='userrole'),
]