# Generated by Django 4.1.13 on 2024-02-08 12:08

from django.conf import settings
import django.contrib.auth.models
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='CustomUser',
            fields=[
                ('user_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to=settings.AUTH_USER_MODEL)),
                ('phoneNo', models.CharField(max_length=15)),
                ('user_bio', models.TextField(blank=True, max_length=500, null=True)),
                ('profilePicture', models.ImageField(blank=True, null=True, upload_to='profile_pics/')),
            ],
            options={
                'verbose_name': 'user',
                'verbose_name_plural': 'users',
                'abstract': False,
            },
            bases=('auth.user',),
            managers=[
                ('objects', django.contrib.auth.models.UserManager()),
            ],
        ),
        migrations.CreateModel(
            name='Menu',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('itemName', models.CharField(max_length=255)),
                ('itemPrice', models.DecimalField(decimal_places=5, max_digits=10)),
                ('menuPic', models.ImageField(upload_to='menu_pics/')),
            ],
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('orderTotalAmount', models.DecimalField(decimal_places=2, max_digits=10)),
                ('status', models.CharField(choices=[('waiting', 'Waiting'), ('processing', 'Processing'), ('delivered', 'Delivered')], default='waiting', max_length=20)),
                ('orderDate', models.DateTimeField(auto_now_add=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cafe.customuser')),
            ],
        ),
        migrations.CreateModel(
            name='Role',
            fields=[
                ('roleId', models.AutoField(primary_key=True, serialize=False)),
                ('roleName', models.CharField(choices=[('admin', 'Admin'), ('super_admin', 'Super Admin'), ('staff', 'Staff'), ('customer', 'Customer')], max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='UserRole',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('role', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cafe.role')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cafe.customuser')),
            ],
        ),
        migrations.CreateModel(
            name='TableReservation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tableNo', models.CharField(max_length=10)),
                ('startTime', models.DateTimeField()),
                ('duration', models.DurationField()),
                ('status', models.CharField(max_length=50)),
                ('noOfPeople', models.IntegerField()),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cafe.customuser')),
            ],
        ),
        migrations.CreateModel(
            name='Payment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('paymentAmount', models.DecimalField(decimal_places=2, max_digits=10)),
                ('paymentDate', models.DateTimeField()),
                ('order', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cafe.order')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cafe.customuser')),
            ],
        ),
        migrations.CreateModel(
            name='OrderItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('itemPrice', models.DecimalField(decimal_places=2, max_digits=10)),
                ('itemQuantity', models.PositiveIntegerField(default=1)),
                ('menu', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cafe.menu')),
                ('order', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cafe.order')),
            ],
        ),
        migrations.CreateModel(
            name='LoyaltyPoint',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('loyaltyPoints', models.IntegerField()),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cafe.customuser')),
            ],
        ),
        migrations.CreateModel(
            name='Feedback',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('comments', models.TextField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('rating', models.IntegerField(choices=[(0, '0'), (1, '1'), (2, '2'), (3, '3'), (4, '4'), (5, '5')])),
                ('menu', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cafe.menu')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cafe.customuser')),
            ],
        ),
        migrations.CreateModel(
            name='Delivery',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('orderAmount', models.DecimalField(decimal_places=2, max_digits=10)),
                ('orderItems', models.TextField()),
                ('location', models.CharField(max_length=255)),
                ('order', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cafe.order')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cafe.customuser')),
            ],
        ),
    ]
